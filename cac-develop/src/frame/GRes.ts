/**素材资源管理类 */
class GRes{
    public static _instance:GRes;         //单例
    /**资源存储器 */
    private _RESDIC:Laya.Dictionary;

    private _loadAniUtil:Laya.Animation;    //动画模板加载器
    private _currBackFun:Laya.Handler;      //当前资源加载后的回调
    private _positionDic:Laya.Dictionary;   //动画模板的宽高字典
    private _armatureList: Object = {};     //模版列表
    private _boneNameInPool:{[id:string]:any};//已经构建过的龙骨动画

    constructor(){
        this._boneNameInPool={};
        this._RESDIC=new Laya.Dictionary();
        this._positionDic=new Laya.Dictionary();
        this._loadAniUtil=new Laya.Animation();
    }

    /**获取单例 */
    public static get instance(){
        return GRes._instance || (GRes._instance=new GRes());
    }

    public init(data:any):void{
        var arrKeys:any[]=Object.keys(data);
        for(let i=0;i<arrKeys.length;i++){
            //"模块名称":{useBaseResUrl:true,items:[{"url": "res/atlas/fonts.json","type": "atlas"},...]}
            this._RESDIC.set(arrKeys[i],data[arrKeys[i]]);
        }
    }

    /**根据模块名称加载对应模块所需素材 */
    public loadResByModName(mName:string,backFun:Laya.Handler=null):void{
        var obj:any=this._RESDIC.get(mName);
        if(!obj){
            MLog.logE("模块["+mName+"]没有在cfg_game.json中配置");
            return;
        }
        obj.useBaseResUrl?Laya.URL.basePath=Cac.CFG["baseResUrl"]:Laya.URL.basePath="";
        if(obj.items && obj.items.length>0){
            Laya.loader.load(obj.items,Laya.Handler.create(GRes,(e)=>{
                if(e){
                    MLog.logD("模块:["+mName+"]是否远程加载:"+obj.useBaseResUrl+"资源加载成功");
                    //调用模块资源加载完成的回调
                    if(backFun){
                        backFun.run();
                    }
                }else{
                    MLog.logD("模块:["+mName+"]是否远程加载:"+obj.useBaseResUrl+"资源加载失败,模块调用失败");
                }
            }));
        }else{
            //调用模块资源加载完成的回调
            if(backFun){
                backFun.run();
            }
        }
    }

    /**
     * 根据模块名称释放该模块对应的资源(貌似效果不好)
     * @param mName 模块名称
     * @param handle 回调函数
     */
    public unloadResByModName(mName:string,handle:Laya.Handler=null):void{
        var obj:any=this._RESDIC.get(mName);
        if(obj){
            obj.useBaseResUrl?Laya.URL.basePath=Cac.CFG["baseResUrl"]:Laya.URL.basePath="";
            if(obj.items && obj.items.length>0){
                for(let i=0;i<obj.items.length;i++){
                    Laya.loader.clearRes(obj.items[i].url);
                }
                if(handle){
                    handle.run();
                }
            }
        }
    }

    /**加载资源 */
    public load(url: any, complete?: Laya.Handler, progress?: Laya.Handler, type?: string, priority?: number, cache?: boolean, group?: string, ignoreCache?: boolean):void{
        Laya.loader.load(url,complete,progress,type,priority,cache,group,ignoreCache);
    }

    /**
     * 加载动画资源
     * @param arr 
     * @param backFun 
     */
    public loadAniRes(arr:any,backFun:Laya.Handler=null):void{
        MLog.logD("==开始加载动画资源==");
        this._currBackFun=backFun;
        //资源数组
        var resArr:any[]=[];
        //模板数组
        var temps:any[]=[];
        var bones:any[]=[];
        for(let i=0;i<arr.length;i++){
            resArr=resArr.concat(arr[i].url);
            if(arr[i].tempArr.length>0){
                temps.push(arr[i].tempArr);
            }else{
                bones=bones.concat(arr[i].url);
            }
        }
        Laya.loader.load(resArr,Laya.Handler.create(this,()=>{
            //组装图集模板
            for(let j=0;j<temps.length;j++){
                var tArr:any[]=temps[j];
                for(let k=0;k<tArr.length;k++){
                    var info=tArr[k];
                    Laya.Animation.createFrames(this._aniUrls(info.tempUrl,info.frameLen),info.tempName);
                    MLog.logD("动画模板["+info.tempName+"]创建成功");
                    var objPost={width:info.width,height:info.height};
                    this._positionDic.set(info.tempName,objPost);
                }
            }
            //组装龙骨模板
            for(let v=0;v<bones.length;v+=2){
                var str:string=bones[v].url;
                var resNameArr:string[]=str.split(".");
                var resAllName:string=resNameArr[0];
                var allNameArr:string[]=resAllName.split("/");
                var resName=allNameArr[allNameArr.length-1];
                if (!this._armatureList[resName]) {
                    var png = Laya.loader.getRes(bones[v].url);
                    var sk = Laya.loader.getRes(bones[v+1].url);
                    var templet:Laya.Templet = new Laya.Templet();
                    templet.parseData(png, sk);
                    this._armatureList[resName]=templet;
                }
            }
            MLog.logD("==动画资源加载结束==");
            //回调
            if(this._currBackFun){
                this._currBackFun.run();
            }
        }));
    }

    /**
     * 创建一组动画的url数组（美术资源地址数组）
     * aniName  动作的名称，用于生成url
     * length   动画最后一帧的索引值，
     */    
    private _aniUrls(fullAniName:string,length:number):any{
        var urls:any = [];
        for(var i:number = 0;i<length;i++){
            //动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push(fullAniName+""+i+".png");
        }
        return urls;
    }

    //====简易对象池====//
    /**创建动画模板 */
    public createAni(boneName:string=""):any{
        var ani:any=null;
        if(boneName!=""){
            //龙骨
            var tmp:Laya.Templet=this._armatureList[boneName];
            if(tmp){
                if(!this._boneNameInPool[boneName]){
                    ani=tmp.buildArmature(1);
                    this._boneNameInPool[boneName]=boneName;
                }else{
                    ani=Laya.Pool.getItemByClass(boneName,Laya.Skeleton);
                }
                
            }else{
                MLog.logW("没有["+name+"]的龙骨动画");
            }
        }else{
            //序列帧
            ani=Laya.Pool.getItemByClass("MY_ANI",Laya.Animation);
        }
        return ani;
    }

    /**设置动画的宽高且锚点设置到中心 */
    private _setAniSize(tempName:string,ani:Laya.Animation):void{
        var size:any=this._positionDic.get(tempName);
        if(size){
            ani.width=size.width;
            ani.height=size.height;
            ani.pivot(size.width/2,size.height/2);
        }else{
            MLog.logW("找不到["+tempName+"]对应的模板动画,所以未给动画ani设置宽高");
        }
    }

    /**
     * 播放动画
     * @param ani 
     * @param backFun 
     */
    public playAni(ani:any,name?:string,nameOrIndex:any=0,start:number=0,loop:boolean=true,backFun:Laya.Handler=null,showWarn?:boolean):void{
        //序列帧动画
        if(ani instanceof Laya.Animation){
            //必须是once!!!
            ani.once(Laya.Event.COMPLETE,this,()=>{
                if(backFun){
                    backFun.run();
                }
            });
            ani.clear();
            this._setAniSize(name,ani);
            ani.play(start,loop,name,showWarn);
        }else if(ani instanceof Laya.Skeleton){
            ani.once(Laya.Event.STOPPED,this,()=>{
                if(backFun){
                    backFun.run();
                }
            });
            ani.play(nameOrIndex,loop);
        }else{
            MLog.logE("既不是帧动画,也不是龙骨!");
        }
    }

    /**回收动画 */
    public recoverAni(ani:any,name:string=null) {
        if(ani){
            ani.alpha=1;
            ani.scale(1,1);
            ani.x=0;
            ani.y=0;
            ani.removeSelf();
            if(ani instanceof Laya.Animation){
                ani.clear();
                //回收序列帧
                Laya.Pool.recover("MY_ANI", ani);
            }else if(ani instanceof Laya.Skeleton){
                if(name){
                    //回收序骨骼
                    Laya.Pool.recover(name,ani);
                }else{
                    MLog.logE("龙骨回收参数少传name");
                }
            }
        }else{
            MLog.logE("不能回收一个空对象");
        }
    } 
}
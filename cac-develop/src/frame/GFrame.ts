/**主体框架 */
class GFrame{
    /**配置文件地址 */
    private static _CFGURL:string="res/cfg/cfg_game.json";
    /**框架准备完成后的回调 */
    private static _backFun:Laya.Handler;

    /**启动 */
    public static bootStart(backFun:Laya.Handler):void{
        GFrame._backFun=backFun;
        //初始化事件派发器
        GEvent.init();
        //初始化模块管理(注册模块)
        GMode.init();
        //初始化UI管理
        GUI.init();
        //初始化GSocket
        GSocket.init();
        //开始加载主配置
        GRes.instance.load(GFrame._CFGURL,Laya.Handler.create(this,this._onComplete));
    }

    /**主配置文件加载完成 */
    private static _onComplete():void{
        Cac.CFG=Laya.loader.getRes(GFrame._CFGURL);
        //对资源进行整理(以模块名为键存储资源配置信息)
        GRes.instance.init(Cac.CFG["res"]);    
        //加载静态配置
        GData.loadCfg(Cac.CFG["staticData"],Laya.Handler.create(this,()=>{
            GFrame._onProtoLoaded();
        }));
    }

    //.proto加载完成
    private static _onProtoLoaded():void{
        if(GFrame._backFun){
            GFrame._backFun.run();
        }
    }
}
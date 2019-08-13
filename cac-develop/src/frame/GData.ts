module GData{
    /**加载及分配静态配置 */
    export function loadCfg(cfgData:any,backFun:Laya.Handler=null):void{
        cfgData.useBaseResUrl?Laya.URL.basePath=Cac.CFG["baseResUrl"]:Laya.URL.basePath="";
        GRes.instance.load(cfgData.url,Laya.Handler.create(GRes.instance,(e)=>{
            if(e){
                MLog.logD("静态配表是否远程加载:"+cfgData.useBaseResUrl+"配表加载成功");
                if(backFun){
                    backFun.run();
                }
                var data=Laya.loader.getRes(cfgData.url);
                this._initPools();
                this._allot(data);
            }else{
                MLog.logD("静态配表是否远程加载:"+cfgData.useBaseResUrl+"配表加载失败");
            }
        }),null,Laya.Loader.JSON);
    }

    //初始化数据池
    export function _initPools():void{

    }

    //分配配表
    export function _allot(gameData:any):void{

    }
}
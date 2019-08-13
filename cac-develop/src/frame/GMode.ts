/**模块管理 */
class GMode{
    /**是否初始化 */
    private static _ISINIT:boolean=false;
    private static _dicMode:Laya.Dictionary;

    /**调用模块(不能连续调用)
     * modName  模块名
     * handle   回调方法
     * parame1  start 和 update 的参数
     * funName  要调用的方法名
     * parame2  被调用的方法参数
     */
    public static call(modName:string,handle:Laya.Handler=null,parame1:any=null,funName:string=null,parame2:any=null):void{
        var modeInfo:any=GMode._dicMode.get(modName);
        if(modeInfo && modeInfo.instance){
            GMode._makeMode(modName,parame1,funName,parame2,handle);//非首次调用
        }else{
            GRes.instance.loadResByModName(modName,Laya.Handler.create(GMode,GMode._makeMode,[modName,parame1,funName,parame2,handle]));
        }
    }

    //调用模块
    private static _makeMode(modName:string,parame1:any=null,funName:string=null,parame2:any=null,handle:Laya.Handler=null):void{
        var modeInfo:any=GMode._dicMode.get(modName);
        if(modeInfo){
            var Cls:any=modeInfo.clsType;
            if(!modeInfo.instance){
                //首次调用
                var modeCls=new Cls();
                modeInfo.instance=modeCls;
                modeInfo.instance.start(parame1);
                modeInfo.instance.update(parame1);
            }else{
                //每次调用
                modeInfo.instance.update(parame1);
            }
            //根据方法名调用方法
            if(modeInfo.instance[funName]){
                if(parame2){
                    modeInfo.instance[funName](parame2);
                }else{
                    modeInfo.instance[funName]();
                }
            }else if(null!=funName){
                MLog.logW("模块["+modName+"]没有["+funName+"]函数");
            }
        }else{
            MLog.logW("没有注册["+modName+"]模块或该模块是虚模块");
        }
        //执行回调
        if(handle){
            handle.run();
        }
    }

    /**
     * 卸载(销毁)模块[完全消除]
     * modName 模块名
     * handle 回调方法
     * incRes 是否释放模块所需的资源(图片、音乐)
     */
    public static unCall(modName:string,handle:Laya.Handler=null,incRes:boolean=false):void{
        var modeInfo:any=GMode._dicMode.get(modName);
        if(modeInfo && modeInfo.instance){
            //销毁对象内存
            modeInfo.instance.dispose();
            modeInfo.instance=null;
        }
        if(incRes){
            //释放模块对应资源(若其他模块对该资源有引用那么会清理不干净)
            GRes.instance.unloadResByModName(modName);
        }
        //执行回调
        if(handle){
            handle.run();
        }
    }


    //=====================模块注册======================//
    /**初始化模块管理(注册所有实模块) */
    public static init():void{
        GMode._dicMode=new Laya.Dictionary();
        //注册模块(key:模块名,value:{模块主类型,实例})
        GMode._dicMode.set("common",{clsType:Common,instance:null});        //公用模块
        //====场景====//
        GMode._dicMode.set("login",{clsType:Login,instance:null});          //登录
        GMode._dicMode.set("menu",{clsType:Menu,instance:null});            //主界面
        GMode._dicMode.set("brnn",{clsType:Brnn,instance:null});            //百人牛牛
        GMode._dicMode.set("bcbm",{clsType:Bcbm,instance:null});            //奔驰宝马
        GMode._dicMode.set("brsz",{clsType:Brsz,instance:null});            //百人三张
        GMode._dicMode.set("bjl",{clsType:Bjl,instance:null});              //百家乐
        GMode._dicMode.set("hhdz",{clsType:Hhdz,instance:null});            //红黑大战
        GMode._dicMode.set("jxlw",{clsType:Jxlw,instance:null});            //九线拉王
        //====外围系统====//
        GMode._dicMode.set("setting",{clsType:Setting,instance:null});      //设置
        GMode._dicMode.set("gift",{clsType:Gift,instance:null});            //特惠礼包
        GMode._dicMode.set("feedback",{clsType:FeedBack,instance:null});    //问题反馈
        GMode._dicMode.set("customer",{clsType:Customer,instance:null});    //客服中心
        GMode._dicMode.set("vip",{clsType:Vip,instance:null});              //vip
        GMode._dicMode.set("activity",{clsType:Activity,instance:null});    //活动
        GMode._dicMode.set("welfare",{clsType:Welfare,instance:null});      //福利(月卡、签到)
        GMode._dicMode.set("rank",{clsType:Rank,instance:null});            //排行
        GMode._dicMode.set("shop",{clsType:Shop,instance:null});            //商店
        GMode._dicMode.set("playerinfo",{clsType:PlayerInfo,instance:null});//个人信息
        GMode._dicMode.set("bank",{clsType:Bank,instance:null});            //银行
        GMode._dicMode.set("debug",{clsType:Debug,instance:null});          //弹窗08-3
        GMode._dicMode.set("popup",{clsType:PopUp,instance:null});         //弹窗08-3
        GMode._dicMode.set("hitmole",{clsType:HitMole,instance:null});       //打地鼠
        
    }
}
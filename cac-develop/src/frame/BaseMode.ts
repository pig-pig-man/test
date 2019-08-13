/**模块基类 */
class BaseMode extends Laya.Sprite{
    constructor(){
        super();
    }

    /**
     * 首次调用时运行(用于注册关联UI)
     * 注册UI事例:GUI.regUI("LoginUI",{clsType:LoginUI,instance:null});
     * @param args 
     */
    public start(...args):void{
        MLog.logD("BaseMode start");
    } 

    //每次调用时运行
    public update(...args):void{
        MLog.logD("BaseMode update");
    }

    //销毁(从内存中移除该方法子类必须重写!!!)
    public dispose():void{
        MLog.logD("模块销毁,该方法子类必须重写!!!");
    }
}
// 程序入口
class Cac {
    /**游戏主配置(cfg_game.json) */
    public static CFG: any = null;
    public static fullScreenWidth: number = 1280;
    public static fullScreenHeight: number = 720;
    public static halfScreenWidth: number = 640;
    public static halfScreenHeight: number = 360;

    constructor() {
        //初始化微信小游戏
        Laya.MiniAdpter.init(true, false);
        //设置画布大小,不支持WebGL时自动切换至Canvas
        Laya.init(Cac.fullScreenWidth, Cac.fullScreenHeight, Laya.WebGL);
        //设置适配模式
        Laya.stage.scaleMode = "exactfit";
        //设置帧率类型
        Laya.stage.frameRate = "fast";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        //设置水平对齐
        Laya.stage.alignH = "center";
        //设置垂直对齐
        Laya.stage.alignV = "middle";
        //设置背景颜色
        Laya.stage.bgColor = "#000000";
        //性能展示窗
        // Laya.Stat.show(0,0);
        //启动游戏框架
        GFrame.bootStart(Laya.Handler.create(this, () => {
            // GSocket.createSocket("SOCKET_GAME","ws://111.231.248.194:6001",Laya.Handler.create(this,()=>{
            //     var requestL: bol.IReqAccountLogin = bol.ReqAccountLogin.create();
            //     requestL.account = "2";
            //     requestL.password = "2";
            //     requestL.openids = [];
            //     GSocket.sendMsg("SOCKET_GAME",ConstMSGDef.PROTOIDS["bol.ReqAccountLogin"], requestL);
            // }));
            // GMode.call("debug");
             GMode.call("common",Laya.Handler.create(this,()=>{
                GMode.call("login");
             }));
        }));
    }
}
new Cac();
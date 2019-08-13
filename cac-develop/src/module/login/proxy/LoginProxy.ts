module login {
    export class LoginProxy extends Laya.EventDispatcher {
        private static _instance;

        public static init() {
            if (LoginProxy._instance == null) {
                LoginProxy._instance = new LoginProxy();
            }
            var __self__ = LoginProxy._instance;
            GEvent.on(ConstMSGDef.PROTOIDS["bol.RespLoginInfo"], __self__, __self__.onRespLoginInfo);
        }

        //请求创建账号
        public static register(data: any) {
            var createAcc: bol.IReqRegisterAccount = bol.ReqRegisterAccount.create();
            // createAcc.account = data.account;
            // createAcc.password = data.password;
            createAcc.account = "xyz_002";
            createAcc.password = "1";
            GSocket.sendMsg("LOGIN_SOCKET",ConstMSGDef.PROTOIDS["bol.ReqRegisterAccount"], createAcc);
        }

        //创建账号回调
        public onRespRegisterAccount(data:bol.IRespRegisterAccount) {
            if(data.ret==0){
                //注册成功
                LoginProxy.login(null);
            }else{
                MLog.logI("注册失败!");
            }
        }

        //登录
        public static login(data: any) {
            var requestL: bol.IReqAccountLogin = bol.ReqAccountLogin.create();
            requestL.account = "xyz_002";
            requestL.password = "1";
            // requestL.account = data.account;
            // requestL.password = data.password;
            GSocket.sendMsg("LOGIN_SOCKET",ConstMSGDef.PROTOIDS["bol.ReqAccountLogin"], requestL);
        }

        public onRespAccountLogin(data:bol.IRespAccountLogin) {
            if(data.ret==0){
                //登录成功,请求玩家信息
                LoginProxy.reqLoginInfo();
            }
        }

        /**请求登录信息 */
        public static reqLoginInfo() {
            // var request: bol.IReqLoginInfo = bol.ReqLoginInfo.create();
            // GSocket.sendMsg("LOGIN_SOCKET",ConstMSGDef.PROTOIDS["bol.ReqLoginInfo"], request);
        }
        
        // public onRespLoginInfo(data:bol.IRespLoginInfo) {
        //     var aa=data;
        // }
    }
}

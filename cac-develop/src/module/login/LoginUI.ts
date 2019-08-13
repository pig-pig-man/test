module login{
    export class LoginUI extends BaseUI{
        private _currUI:ui.login.LoginUI;

        constructor(){
            super();
            this._currUI=new ui.login.LoginUI();
            this.setUI("LoginUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._currUI.img_bg.skin="res/extra/bg_loading.jpg";
        }

        /**添加监听 */
        public addEvent():void{
            this._currUI.btn_account.on(Laya.Event.CLICK,this,this._loginByAccount);
            this._currUI.btn_custom.on(Laya.Event.CLICK,this,this._loginByCustom);
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.btn_account.off(Laya.Event.CLICK,this,this._loginByAccount);
            this._currUI.btn_custom.off(Laya.Event.CLICK,this,this._loginByCustom);
        }

        //账号登录
        private _loginByAccount():void{
            GMode.call("debug");
            // GUI.removeUI("login.LoginUI");
        }
        //游客登陆
        private _loginByCustom():void{
            // MyEvent.instance.event("Event.OPEN");
            GSocket.init();
            GSocket.createSocket("dating","open");
            GMode.call("menu");
            GUI.removeUI("login.LoginUI");

        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
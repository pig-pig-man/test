module playerinfo{
    export class PlayerInfoUI extends BaseUI{
        private _currUI:ui.playerinfo.PlayerInfoUI;

        constructor(){
            super();
            this._currUI=new ui.playerinfo.PlayerInfoUI();
            this.setUI("PlayerInfoUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
        }

        /**添加监听 */
        public addEvent():void{
            this._currUI.btn_close.on(Laya.Event.CLICK,this,this._close);
            this._currUI.box_phone.on(Laya.Event.CLICK,this,this._phoneLogin);
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.btn_close.off(Laya.Event.CLICK,this,this._close);
            this._currUI.box_phone.on(Laya.Event.CLICK,this,this._phoneLogin);
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("playerinfo.PlayerInfoUI");
        }

        //手机登陆
        private  _phoneLogin():void{
            GMode.call("popup");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
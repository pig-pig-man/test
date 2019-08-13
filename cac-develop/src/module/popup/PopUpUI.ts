module popup{
    export class PopUpUI extends BaseUI{
        private _currUI:ui.playerinfo.PopUpUI;

        constructor(){
            super();
            this._currUI=new ui.playerinfo.PopUpUI();
            this.setUI("PopUpUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            // this._currUI.img_bg.skin="res/extra/img.di.jpg";
        }

        /**添加监听 */ 
        public addEvent():void{
            this._currUI.sbtn_off.on(Laya.Event.CLICK,this,this._loginByAccount);
            this._currUI.box_btn.on(Laya.Event.CLICK,this,this._tipBar);
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.sbtn_off.off(Laya.Event.CLICK,this,this._loginByAccount);
            this._currUI.box_btn.on(Laya.Event.CLICK,this,this._tipBar);
        }

        //关闭界面
        private _loginByAccount():void{
            // GMode.call("debug");
            GUI.removeUI("popup.PopUpUI");
        }
        //显示提示

        private _tipBar():void{
            common.TipBar.showMsg("请输入验证码");
        
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
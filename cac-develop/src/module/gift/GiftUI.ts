module gift{
    export class GiftUI extends BaseUI{
        private _currUI:ui.gift.GiftUI;

        constructor(){
            super();
            this._currUI=new ui.gift.GiftUI();
            this.setUI("GiftUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._currUI.img_bg.skin="res/extra/bg_gift.png";
        }

        /**添加监听 */
        public addEvent():void{
            this._currUI.btn_close.on(Laya.Event.CLICK,this,this._close);
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.btn_close.off(Laya.Event.CLICK,this,this._close);
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("gift.GiftUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
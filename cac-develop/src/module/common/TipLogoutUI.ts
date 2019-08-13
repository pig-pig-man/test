module common{
    export class TipLogoutUI extends BaseUI{
        private _currUI:ui.common.TipLogoutUI;

        constructor(){
            super();
            this._currUI=new ui.common.TipLogoutUI();
            this.setUI("TipLogoutUI",this._currUI,this);
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
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.btn_close.off(Laya.Event.CLICK,this,this._close);
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("common.TipLogoutUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
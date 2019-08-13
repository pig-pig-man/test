module activity{
    export class ActivityUI extends BaseUI{
        private _currUI:ui.activity.ActivityUI;

        constructor(){
            super();
            this._currUI=new ui.activity.ActivityUI();
            this.setUI("ActivityUI",this._currUI,this);
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
            GUI.removeUI("activity.ActivityUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
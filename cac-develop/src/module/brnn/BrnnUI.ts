module brnn{
    export class BrnnUI extends BaseUI{
        private _currUI:ui.brnn.BrnnUI;

        constructor(){
            super();
            this._currUI=new ui.brnn.BrnnUI();
            this.setUI("BrnnUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._currUI.img_bg.skin="res/extra/bg_brnn.jpg";
        }

        /**添加监听 */
        public addEvent():void{
           this._currUI.btn_more.on(Laya.Event.CLICK,this,this._backExit);
        }

        /**移除监听 */
        public removeEvent():void{
           this._currUI.btn_more.on(Laya.Event.CLICK,this,this._backExit);
        }

        //回到主界面
        private _backExit():void{
            GUI.showUI("menu.MenuUI","scene",["brnn.BrnnUI"]);
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
module jxlw{
    export class JxlwUI extends BaseUI{
        private _currUI:ui.jxlw.JxlwUI;

        constructor(){
            super();
            this._currUI=new ui.jxlw.JxlwUI();
            this.setUI("JxlwUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._currUI.img_bg.skin="res/extra/bg_jxlw.jpg";
            this._currUI.img_bg_1.skin="res/extra/bg_jxlw_1.png";
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
            GUI.showUI("menu.MenuUI","scene",["jxlw.JxlwUI"]);
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
module debug{
    export class DebugUI extends BaseUI{
        private _currUI:ui.debug.DebugUI;

        constructor(){
            super();
            this._currUI=new ui.debug.DebugUI();
            this.setUI("DebugUI",this._currUI,this);
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
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.sbtn_off.off(Laya.Event.CLICK,this,this._loginByAccount);
        }

        //给跪
        private _loginByAccount():void{
            // GMode.call("debug");
            GUI.removeUI("debug.DebugUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
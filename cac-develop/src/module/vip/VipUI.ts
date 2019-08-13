module vip{
    export class VipUI extends BaseUI{
        private _currUI:ui.vip.VipUI;

        constructor(){
            super();
            this._currUI=new ui.vip.VipUI();
            this.setUI("VipUI",this._currUI,this);
            this._currUI.list_bar.itemRender=VipBar;
            this._currUI.list_bar.hScrollBarSkin="";
            this._currUI.list_bar.array=[1];
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._initUI();
        }

        private _initUI():void{
            
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
            GUI.removeUI("vip.VipUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
module shop{
    export class ShopUI extends BaseUI{
        private _currUI:ui.shop.ShopUI;

        constructor(){
            super();
            this._currUI=new ui.shop.ShopUI();
            this.setUI("ShopUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._currUI.img_bg.skin="res/extra/bg_shop.png";
            var index:number=0;
            if(args && args.length>0){
                index=args[0];
            }
            this._clickTab(index);
        }

        /**添加监听 */
        public addEvent():void{
            this._currUI.btn_close.on(Laya.Event.CLICK,this,this._close);
            for(let i=0;this._currUI["btn_tab_"+i]!=null;i++){
                this._currUI["btn_tab_"+i].on(Laya.Event.CLICK,this,this._clickTab,[i]);
            }
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.btn_close.off(Laya.Event.CLICK,this,this._close);
            for(let i=0;this._currUI["btn_tab_"+i]!=null;i++){
                this._currUI["btn_tab_"+i].off(Laya.Event.CLICK,this,this._clickTab,[i]);
            }
        }

        private _clickTab(tabIndex:number=0):void{
            this._changeTab(tabIndex);
            this._changePanel(tabIndex);
        }

        //切换页签
        private _changeTab(tabIndex:number=0):void{
            for(let i=0;this._currUI["btn_tab_"+i]!=null;i++){
                if(i==tabIndex){
                    this._currUI["btn_tab_"+i].alpha=1;
                }else{
                    this._currUI["btn_tab_"+i].alpha=0;
                }
            }
        }

        //切换页面
        private _changePanel(tabIndex:number=0):void{
            for(let i=0;this._currUI["box_"+i]!=null;i++){
                if(i==tabIndex){
                    this._currUI["box_"+i].visible=true;
                }else{
                    this._currUI["box_"+i].visible=false;
                }
            }
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("shop.ShopUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
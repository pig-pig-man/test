module feedback{
    export class FeedBackUI extends BaseUI{
        private _currUI:ui.feedback.FeedBackUI;

        constructor(){
            super();
            this._currUI=new ui.feedback.FeedBackUI();
            this.setUI("FeedBackUI",this._currUI,this);
            this._currUI.list_msg.itemRender=FeedItem;
            this._currUI.list_msg.vScrollBarSkin="";
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._initUI();
            this._changeTab(0);
            this._changePanel(0);
            this._onRespMsg();
        }

        private _initUI():void{
            
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

        //监听收到消息
        private _onRespMsg(data:any=null):void{
            this._currUI.list_msg.array=[1,2,3,4,5,6,7];
            this._currUI.list_msg.renderHandler = Laya.Handler.create(this,this._updateItem);
        }

        private _updateItem(cell: FeedItem, index: number): void {
            var data=cell.dataSource;
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("feedback.FeedBackUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
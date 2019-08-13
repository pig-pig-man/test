module customer{
    export class CustomerUI extends BaseUI{
        private _currUI:ui.customer.CustomerUI;

        constructor(){
            super();
            this._currUI=new ui.customer.CustomerUI();
            this.setUI("FeedBackUI",this._currUI,this);
            this._currUI.list_msg.itemRender=MsgItem;
            this._currUI.list_msg.vScrollBarSkin="";
            this._currUI.list_qa.itemRender=QuestionItem;
            this._currUI.list_qa.vScrollBarSkin="";
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._initUI();
            this._onRespMsg();
        }

        private _initUI():void{
            this._clickTab(0);
            this._initQa();
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
            this._currUI.list_msg.renderHandler = Laya.Handler.create(this,this._updateItem,null,false);
        }

        private _updateItem(cell: MsgItem, index: number): void {
            var data=cell.dataSource;
            cell.init();
        }

        private _initQa(data:any=null):void{
            this._currUI.list_qa.array=[1,2,3,4,5,6,7];
            this._currUI.list_qa.renderHandler = Laya.Handler.create(this,this._updateQaItem,null,false);
        }

        private _updateQaItem(cell: QuestionItem, index: number): void {
            var data=cell.dataSource;
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("customer.CustomerUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
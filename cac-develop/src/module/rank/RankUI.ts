module rank{
    export class RankUI extends BaseUI{
        private _currUI:ui.rank.RankUI;

        constructor(){
            super();
            this._currUI=new ui.rank.RankUI();
            this.setUI("RankUI",this._currUI,this);
            this._currUI.list_rank.itemRender=RankItem;
            this._currUI.list_rank.vScrollBarSkin="";
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
            this._clickTab(0);
            this._onRespMsg();
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

        //收到排行回调
        private _onRespMsg(data:any=null):void{
            this._currUI.list_rank.array=[1,2,3,4,5,6,7,8,9,10];
            this._currUI.list_rank.renderHandler=Laya.Handler.create(this,this._updateItem,null,false);
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("rank.RankUI");
        }

        private _updateItem(cell: RankItem, index: number): void {
            var data=cell.dataSource;
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
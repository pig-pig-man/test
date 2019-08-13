module menu{
    export class SelectSceneUI extends BaseUI{
        private _currUI:ui.menu.SelectSceneUI;
        private _baseTime:number=150;   //缓动动画单位时间
        private _typ:number=0;          //0斗地主 1金典三张

        constructor(){
            super();
            this._currUI=new ui.menu.SelectSceneUI();
            this.setUI("SelectSceneUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            if(args && args.length>0){
                this._typ=args[0];
                if(this._typ==0){
                    //斗地主
                    this._currUI.img_ddz.visible=true;
                    this._currUI.img_jdsz.visible=false;
                }else if(this._typ==1){
                    //金典三张
                    this._currUI.img_ddz.visible=false;
                    this._currUI.img_jdsz.visible=true;
                }
            }
            this._tweenIn(Laya.Handler.create(this,()=>{
                super.update();
            }));
        }

        /**添加监听 */
        public addEvent():void{
            this._currUI.btn_close.on(Laya.Event.CLICK,this,this._close);
        }

        /**移除监听 */
        public removeEvent():void{
           this._currUI.btn_close.off(Laya.Event.CLICK,this,this._close);
        }

        //缓动出场
        private _tweenOut(backFun:Laya.Handler=null):void{
            Laya.Tween.to(this._currUI.box_title,{x:-300},this._baseTime*3,Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.btn_close,{x:1400},this._baseTime*3,Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.box_list,{x:1300},this._baseTime*3,Laya.Ease.backIn,Laya.Handler.create(this,()=>{
                if(backFun){
                    backFun.run();
                }
            }));
        }

        //缓动入场
        private _tweenIn(backFun:Laya.Handler=null):void{
            this._currUI.box_title.x=-300;
            this._currUI.btn_close.x=1400;
            this._currUI.box_list.x=1300;
            Laya.Tween.to(this._currUI.box_title,{x:30},this._baseTime*3,Laya.Ease.backOut);
            Laya.Tween.to(this._currUI.btn_close,{x:1204},this._baseTime*3,Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.box_list,{x:98},this._baseTime*3,Laya.Ease.backOut,Laya.Handler.create(this,()=>{
                if(backFun){
                    backFun.run();
                }
            }));
        }

        //关闭面板
        private _close():void{
            this._tweenOut(Laya.Handler.create(this,()=>{
                var obj=GUI.getUIByName("MenuUI");
                if(obj && obj.spt){
                    var menu:MenuUI=obj.spt;
                    menu.tweenIn(null,false);
                }
                GUI.removeUI("menu.SelectSceneUI");
            }));
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
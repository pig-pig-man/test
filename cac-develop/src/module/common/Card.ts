module common{
    export class Card extends ui.common.CardUI{
        private _isOpen:boolean=false;  //正反面
        private _backFun:Laya.Handler=null;
        
        constructor(){
            super();
            this.isOpen=false;
            this.on(Laya.Event.CLICK,this,this.debug);
        }

        private debug():void{
            if(this._isOpen){
                this._isOpen=false;
                this.playCardAni("ani_close",Laya.Handler.create(this,()=>{

                }));
            }else{
                this._isOpen=true;
                this.playCardAni("ani_open");
            }
        }

        /**
         * 设置正反面
         * @param flg 
         */
        public set isOpen(flg:boolean){
            this._isOpen=flg;
            if(this._isOpen){
                this.img_back.scaleX=0;
                this.img_face.scaleX=1;
            }else{
                this.img_back.scaleX=1;
                this.img_face.scaleX=0;
            }
        }

        /**
         * 播放牌面动画
         * @param aniName 
         * @param backFun 
         */
        public playCardAni(aniName:string,backFun:Laya.Handler=null):void{
            this._backFun=backFun;
            if(this[aniName]){
                this[aniName].once(Laya.Event.COMPLETE,this,this._aniFinished);
                this[aniName].play(0,false)
            }else{
                if(this._backFun){
                    this._backFun.run();
                }
            }
            
        }

        //完成动画
        private _aniFinished():void{
            if(this._backFun){
                this._backFun.run();
            }
        }

    }
}
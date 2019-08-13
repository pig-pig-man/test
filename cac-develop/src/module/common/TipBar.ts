module common{
    export class TipBar extends ui.common.TipBarUI{
        private static _layer: Laya.Sprite = null;
        private static _barArr: TipBar[] = [];
        private static _showBarArr: TipBar[] = [];


        constructor(){
            super();
            
        }

    //排序
     private static makeList():void{
            for(let i=0;i<TipBar._showBarArr.length;i++){
                let bar:TipBar=TipBar._showBarArr[i];
                //改变y值，实现提示条飘动
                bar.y = Cac.halfScreenHeight-100*(TipBar._showBarArr.length-1-i);
            }
        }
        //接受错误内容
        public static showMsg(mag:string):void{
            if(!TipBar._layer){
                TipBar._layer = GUI.getLayByName("guiMask");          
            }
        let bar: TipBar = TipBar._barArr.shift();
        if (!bar) {
                bar = new TipBar();
            }
        bar.txt_tip.text = mag;
        TipBar._layer.addChild(bar);
        TipBar._showBarArr.push(bar);
        bar.x = Cac.halfScreenWidth;
        // bar.y = Cac.halfScreenHeight;
        TipBar.makeList();
        bar.show();
    }
    
    public show():void{
        this.scaleX = 0.5;
        this.scaleY = 0.5;
        this.alpha = 0.7;
        Laya.Tween.to(this,{scaleX:1,scaleY:1},200,Laya.Ease.backOut,Laya.Handler.create(this,()=>{
            Laya.timer.once(1200, this, () => {
                    Laya.Tween.to(this, { alpha: 0 }, 300, null, Laya.Handler.create(this, () => {
                        this.removeSelf();
                        TipBar._barArr.push(this);
                        TipBar._showBarArr.shift();
                    }));
                });
            }));
       
    }
    
}
}
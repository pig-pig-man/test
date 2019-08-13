/**UI基类 */
class BaseUI extends Laya.Sprite{
    //相关界面实例
    private _mc:Laya.Sprite;
    //当前UI的名称
    private _currName:string;

    constructor(){
        super();
    }

    /**
     * 每次展示面板时调用
     * @param args 
     */
    public update(...args):void{
        this.addEvent();
        if(this._mc && this._mc["box_body"]){
            this._mc["box_body"].scale(0.6,0.6);
            Laya.Tween.to(this._mc["box_body"],{scaleX:1,scaleY:1},300,Laya.Ease.backOut);
        }
    }

    public addEvent():void{
    
    }

    public removeEvent():void{
    
    }

    /**
     * 设置界面实例(子类不准复写!!!)
     */
    public setUI(uName:string,ui:Laya.Sprite,spt:any=null){
        this._currName=uName;
        this._mc=ui;
        var obj={mc:ui,spt:spt};
        GUI.setUI(uName,obj);
    }

    /**
     * 在指定节点显示(子类不准复写!!!)
     * @param lay 
     */
    public show(lay:Laya.Sprite):void{
        lay.addChild(this._mc);
    }

    /**
     * 销毁对象(super方法最后调用)
     */
    public dispose():void{
        GUI.removeUI(this._currName);
        this._mc.destroy();
        this._mc=null;
        this.destroy();
    }

    /**
     * 移除面板
     */
    public remove():void{
        if(this._mc && this._mc["box_body"]){
            Laya.Tween.to(this._mc["box_body"],{scaleX:1.3,scaleY:1.3,alpha:0},500,Laya.Ease.backIn,Laya.Handler.create(this,()=>{
                this._mc["box_body"].scale(1,1);
                this._mc["box_body"].alpha=1;
                this.removeEvent();
                this._mc.removeSelf();
            }));
        }else{
            this.removeEvent();
            this._mc.removeSelf();
        }
    }
}
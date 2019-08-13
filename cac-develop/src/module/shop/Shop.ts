class Shop extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("shop.ShopUI",{clsType:shop.ShopUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("shop.ShopUI","sceneTop",null,args);
    }

    public dispose():void{
        
    }
}
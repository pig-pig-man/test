class Gift extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("gift.GiftUI",{clsType:gift.GiftUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("gift.GiftUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
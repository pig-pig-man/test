class PopUp extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("popup.PopUpUI",{clsType:popup.PopUpUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("popup.PopUpUI","guiMask",null);
    }

    public dispose():void{
        
    }
}
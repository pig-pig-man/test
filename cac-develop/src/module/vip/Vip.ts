class Vip extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("vip.VipUI",{clsType:vip.VipUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("vip.VipUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
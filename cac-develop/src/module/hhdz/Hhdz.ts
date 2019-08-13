class Hhdz extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("hhdz.HhdzUI",{clsType:hhdz.HhdzUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("hhdz.HhdzUI","scene",null);
    }

    public dispose():void{
        
    }
}
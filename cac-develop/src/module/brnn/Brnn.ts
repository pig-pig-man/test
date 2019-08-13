class Brnn extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("brnn.BrnnUI",{clsType:brnn.BrnnUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("brnn.BrnnUI","scene",null);
    }

    public dispose():void{
        
    }
}
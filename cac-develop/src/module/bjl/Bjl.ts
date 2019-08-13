class Bjl extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("bjl.BjlUI",{clsType:bjl.BjlUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("bjl.BjlUI","scene",null);
    }

    public dispose():void{
        
    }
}
class Brsz extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("brsz.BrszUI",{clsType:brsz.BrszUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("brsz.BrszUI","scene",null);
    }

    public dispose():void{
        
    }
}
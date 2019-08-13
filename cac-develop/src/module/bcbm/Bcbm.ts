class Bcbm extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("bcbm.BcbmUI",{clsType:bcbm.BcbmUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("bcbm.BcbmUI","scene",null);
    }

    public dispose():void{
        
    }
}
class Jxlw extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("jxlw.JxlwUI",{clsType:jxlw.JxlwUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("jxlw.JxlwUI","scene",null);
    }

    public dispose():void{
        
    }
}
class Common extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("common.TipWndUI",{clsType:common.TipWndUI,instance:null});
        GUI.regUI("common.TipLogoutUI",{clsType:common.TipLogoutUI,instance:null});
    } 

    public update(...args):void{
        
    }

    public dispose():void{
        
    }
}
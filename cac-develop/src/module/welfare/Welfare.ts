class Welfare extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("welfare.WelfareUI",{clsType:welfare.WelfareUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("welfare.WelfareUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
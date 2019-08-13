class Debug extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("debug.DebugUI",{clsType:debug.DebugUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("debug.DebugUI","gui",null);
    }

    public dispose():void{
        
    }
}
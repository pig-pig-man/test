class Activity extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("activity.ActivityUI",{clsType:activity.ActivityUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("activity.ActivityUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
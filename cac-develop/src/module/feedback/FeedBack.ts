class FeedBack extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("feedback.FeedBackUI",{clsType:feedback.FeedBackUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("feedback.FeedBackUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
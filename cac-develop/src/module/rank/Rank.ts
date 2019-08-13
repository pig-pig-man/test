class Rank extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("rank.RankUI",{clsType:rank.RankUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("rank.RankUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
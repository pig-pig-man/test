class PlayerInfo extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("playerinfo.PlayerInfoUI",{clsType:playerinfo.PlayerInfoUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("playerinfo.PlayerInfoUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
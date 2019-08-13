class HitMole extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("hitmole.GameStartUI",{clsType:hitmole.GameStartUI,instance:null});
        GUI.regUI("hitmole.GameViewUI",{clsType:hitmole.GameViewUI,instance:null});
        GUI.regUI("hitmole.HammerUI",{clsType:hitmole.HammerUI,instance:null}); 
        GUI.regUI("hitmole.GameOverUI",{clsType:hitmole.GameOverUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("hitmole.GameStartUI","scene",null);
    }
    public dispose():void{
        
    }
}
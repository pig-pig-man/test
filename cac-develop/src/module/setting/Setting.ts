class Setting extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("setting.SettingUI",{clsType:setting.SettingUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("setting.SettingUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
class Menu extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("menu.MenuUI",{clsType:menu.MenuUI,instance:null});
        GUI.regUI("menu.SelectSceneUI",{clsType:menu.SelectSceneUI,instance:null}); 
    } 

    public update(...args):void{
        GUI.showUI("menu.MenuUI","scene",null);
    }

    public dispose():void{
        
    }
}
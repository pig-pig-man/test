class Login extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("login.LoginUI",{clsType:login.LoginUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("login.LoginUI","scene",null);
    }

    public dispose():void{
        
    }
}
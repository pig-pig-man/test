class Bank extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("bank.BankUI",{clsType:bank.BankUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("bank.BankUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
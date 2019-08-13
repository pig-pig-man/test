class Customer extends BaseMode{
    constructor(){
        super();
    }

    public start(...args):void{
        GUI.regUI("customer.CustomerUI",{clsType:customer.CustomerUI,instance:null});
    } 

    public update(...args):void{
        GUI.showUI("customer.CustomerUI","sceneTop",null);
    }

    public dispose():void{
        
    }
}
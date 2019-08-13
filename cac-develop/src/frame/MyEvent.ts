//事件派发者创建
class MyEvent extends Laya.EventDispatcher{
    public static _instance: MyEvent;
    constructor() {
        super();
    }
    //获取单例
    public static get instance(){
        return MyEvent._instance || (MyEvent._instance = new MyEvent());
    }
}






class GSocket {
    private static _dicSockets: Laya.Dictionary;
    private static _noCallBackList: Array<any>;

    public static init(): void {
        GSocket._noCallBackList = [];
        GSocket._dicSockets = new Laya.Dictionary();
    }

    // /**
    //  *接收到服务端消息   
    //  *{socketName:Socket名称,msg:具体消息} 
    //  */
    // public static onMesgReveived(result:any):void{
    //     //派发事件(此处cmd-1目的是对应发送时的协议号)
    //     MLog.logD("["+result.socketName+"]收到消息["+cmd+"]:",result);
    //     GSocket.removeNoCallBack(cmd-1);
    // }

    /**
     * 创建Socket
     * @param name 
     */
    public static createSocket(name: string, data: any): void {
        var baseSocket: Socket = GSocket._dicSockets.get(name);
        if (!baseSocket) {
            //创建Socket
            baseSocket = new Socket(name, data);
            //存储Socket
            GSocket._dicSockets.set(name, baseSocket);
            //建立连接
            baseSocket.connect();

        }
    }
    // /**
    //  * 根据Socket的名称让对应Socket发送消息
    //  * @param name //socket名称
    //  * @param data //proto
    //  */
    // public static sendMsg(name:string,data:any):void{
    //     var baseSocket:Socket=GSocket._dicSockets.get(name);

    // }


}
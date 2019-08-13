/**基本socket类 */
class Socket {
    private _socketName: string = "";
    private _socketData: string = "";
    private _socket: Laya.Socket;
    // private _isConnected:boolean=false;//是否建立连接
    // private _output: Laya.Byte;
    // private _input: Laya.Byte;

    constructor(sName: string, sData: any) {
        this._socketName = sName;
        this._socketData = sData;
        this._socket = new Laya.Socket();

    }

    public get socketName() {
        return this._socketName;
    }

    private _initEvent(): void {
        this._socket.on(Laya.Event.OPEN, this, this._onSocketOpen);
        this._socket.on(Laya.Event.CLOSE, this, this._onSocketClose);
        this._socket.on(Laya.Event.MESSAGE, this, this._onMessageReveived);
        this._socket.on(Laya.Event.ERROR, this, this._onConnectError);
    }

    private _clearEvent(): void {
        this._socket.off(Laya.Event.OPEN, this, this._onSocketOpen);
        this._socket.off(Laya.Event.CLOSE, this, this._onSocketClose);
        this._socket.off(Laya.Event.MESSAGE, this, this._onMessageReveived);
        this._socket.off(Laya.Event.ERROR, this, this._onConnectError);
    }

    /**
     * 根据路径链接socket
     */
    public connect(): void {
        this._initEvent();
        // this._socket.connectByUrl("ws:///47.96.163.75:9527");
        this._socket.connectByUrl("ws://echo.websocket.org:80");
    }

    //打开socket
    private _onSocketOpen(): void {
        console.log(this._socketName + "Connected");
        // 发送字符串

        this._socket.send(this._socketData + "+" + this._socketName);

    }

    //收到信息
    private _onMessageReveived(message: any): void {
        console.log(message);

        this._socket.input.clear();
    }

    //关闭socket
    private _onSocketClose(): void {
        console.log("Socket closed");
    }

    //socket错误
    private _onConnectError(): void {
        console.log("ERROR");
    }
}
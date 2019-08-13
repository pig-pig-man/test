// module laya {
//     import Event = Laya.Event;
//     import Socket = Laya.Socket;
//     import Byte = Laya.Byte;

//     export class NetWork_Socket {
//         private socket: Socket;
//         private output: Byte;

//         constructor() {
            
            
//             this.connect();
//         }

//         private connect(): void {
//             this.socket = new Socket();
//             //this.socket.connect("echo.websocket.org", 80);
//             // this.socket.connectByUrl("ws://echo.websocket.org:80");
//             this.socket.connectByUrl("ws:///47.96.163.75:9527");

//             this.output = this.socket.output;
            
//             GEvent.on("Event.OPEN",this,this.onSocketOpen);
//             // MyEvent.instance.on("Event.OPEN", this,this.onSocketOpen);
//             // MyEvent.instance.on("BTN_UP", this, this.upplay);
//             // MyEvent.instance.on("BTN_UP", this, this.upplay);
//             // MyEvent.instance.on("BTN_UP", this, this.upplay);
//             // this.socket.on(Event.OPEN, this, this.onSocketOpen);
//             this.socket.on(Event.CLOSE, this, this.onSocketClose);
//             this.socket.on(Event.MESSAGE, this, this.onMessageReveived);
//             this.socket.on(Event.ERROR, this, this.onConnectError);
//         }
//         //连接
//         private onSocketOpen(): void {
//             console.log("Connected");

//             // 发送字符串
//             this.socket.send("demonstrate <sendString>");

//         }

//         private onSocketClose(): void {
//             console.log("Socket closed");
//         }

//         private onMessageReveived(message: any): void {
//             console.log("Message from server:");
//             if (typeof message == "string") {
//                 console.log(message);
//             }
//             else if (message instanceof ArrayBuffer) {
//                 console.log(new Byte(message).readUTFBytes());
//             }
//             this.socket.input.clear();
//         }

//         private onConnectError(e: Event): void {
//             console.log("error");
//         }
//     }
// }
// new laya.NetWork_Socket();



module hitmole {
    export class HammerUI extends BaseUI {
        private _currUI: ui.hitmole.HammerUI;
        constructor() {
            super();
            this._currUI = new ui.hitmole.HammerUI();
            // this.setUI("HammerUI", this._currUI, this);
            // //设置适配模式
            // Laya.stage.scaleMode = "exactfit";
            // //设置水平对齐
            // Laya.stage.alignH = "center";
            //设置垂直对齐
            Laya.stage.alignV = "middle";
            Laya.stage.bgColor = "#ffcccc";
        

        }

        /**
        * 每次展示面板时调用
        * @param args 
        */
        public update(...args): void {
            super.update();
            // this._currUI.img_bg.skin = "res/extra/bg_help.png";
        }


        /**添加监听 */
        public addEvent(): void {
            Laya.Mouse.hide();
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);

        }

        /**移除监听 */
        public removeEvent(): void {
            Laya.Mouse.show();
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        }

        onMouseDown(): void {
            //播放锤子动画
            this._currUI.hit1.play(0, false);
        }

        onMouseMove(): void {
            // this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 3);
            this.pos(Laya.stage.mouseX, Laya.stage.mouseY);
           
        }

        //回到主界面
        private _backExit(): void {
        }

        /**
         * 移除面板
         */
        public remove(): void {
            super.remove();
        }
    }
}
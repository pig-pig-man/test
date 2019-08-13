


module hitmole {
    export class GameStartUI extends BaseUI {
        private _currUI: ui.hitmole.GameStartUI;
        // private gameview: GameViewUI;
        constructor() {
            super();
            this._currUI = new ui.hitmole.GameStartUI();
            this.setUI("GameStartUI", this._currUI, this);
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
            this._currUI.btn_start.on(Laya.Event.CLICK, this, this._backExit);
        }

        /**移除监听 */
        public removeEvent(): void {
            this._currUI.btn_start.on(Laya.Event.CLICK, this, this._backExit);
        }

        //回到主界面
        private _backExit(): void {
            // GUI.showUI("menu.MenuUI", "scene", ["hitmole.GameStartUI"]);
            let gameview = new GameViewUI();
            gameview.gameStart();
            
            GUI.showUI("hitmole.GameViewUI", "scene", ["hitmole.GameStartUI"]); 
            GUI.showUI("hitmole.HammerUI", "mask", null);

        }
        /**
         * 移除面板
         */
        public remove(): void {
            super.remove();
        }
    }
}
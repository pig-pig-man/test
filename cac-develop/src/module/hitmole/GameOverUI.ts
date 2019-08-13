


module hitmole {
    export class GameOverUI extends BaseUI {
        private _currUI: ui.hitmole.GameOverUI;
        constructor() {
            super();
            this._currUI = new ui.hitmole.GameOverUI();
            this.setUI("GameOverUI", this._currUI, this);
            // //设置适配模式
            // Laya.stage.scaleMode = "exactfit";
            // //设置水平对齐
            // Laya.stage.alignH = "center";
            //设置垂直对齐
            Laya.stage.alignV = "middle";
            Laya.stage.bgColor = "#ffcccc";
            this.addEvent();

        }


        restartGame(): void {
            // this.removeSelf();
            // GameMain.gameView.removeSelf();
            // Laya.stage.addChild(GameMain.gameStart);
            // GUI.instence.removeUI("hammerUI");
            // GUI.instence.removeUI("gameviewUI");
            // GUI.instence.showUI("gamestartUI", "root");
            GUI.showUI("hitmole.GameStartUI", "scene", ["hitmole.GameOverUI","hitmole.GameViewUI"]);

        }
        //设置分数显示
        public setScoreUI(score: number): void {
            var data: any = {};
            var temp: number = score;
            for (var i: number = 9; i >= 0; i--) {
                data["item" + i] = { index: Math.floor(temp % 10) };
                temp /= 10;
            }
            this._currUI.img_score.dataSource = data;

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
            this._currUI.btn_restart.on(Laya.Event.CLICK, this, this.restartGame);
           
        }

        /**移除监听 */
        public removeEvent(): void {
            this._currUI.btn_restart.on(Laya.Event.CLICK, this, this.restartGame);
        }

        //回到主界面
        private _backExit(): void {
            // GUI.showUI("menu.MenuUI", "scene", ["hitmole.GameStartUI"]);
            // GUI.showUI("hitmole.GameViewUI", "scene", ["hitmole.GameStartUI"]);
        }
        // //账号登录
        // private _loginByAccount():void{
        //     GMode.call("debug");
        //     // GUI.removeUI("login.LoginUI");
        // }
        // //游客登陆
        // private _loginByCustom():void{
        //     GMode.call("menu");
        //     GUI.removeUI("login.LoginUI");
        // }

        /**
         * 移除面板
         */
        public remove(): void {
            super.remove();
        }
    }
}
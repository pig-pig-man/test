


module hitmole {
    export class GameViewUI extends BaseUI {
        private _currUI: ui.hitmole.GameViewUI;
        private moles: Array<Mole>;
        private moleNum: number = 9;
        private score: number;
        private  hammer: HammerUI;
        private gameover:GameOverUI;

        constructor() {
            super();
            this._currUI = new ui.hitmole.GameViewUI();
            this.hammer = new HammerUI();
            this.gameover = new GameOverUI();
            this.setUI("GameViewUI", this._currUI, this);
            Laya.stage.bgColor = "#ffcccc";

            this.moles = new Array<Mole>();
            this._currUI.timeBar.value = 1;
            this.score = 0;
            var hitCallBackHd: Laya.Handler = Laya.Handler.create(this, this.setScore, null, false);
            for (var i: number = 0; i < this.moleNum; i++) {
                //定义box对象， 得到Gameui中的item0-item8
                var box: ui.hitmole.MoleUI = this._currUI["mole" + i];
                //更换地鼠前遮挡图（草grass），更换skin图片来实现。 
                box.img_grass.skin = "hitmole/mask-0" + (i + 1) + ".png";
                //实例化Mole类，传入地鼠的常态图、受击图、最低点
                var mole: Mole = new Mole(box.normal, box.hit, this._currUI["score" + i], 34, hitCallBackHd);
                //得到所有地鼠的数组 moles[]
                this.moles.push(mole);

            }
            // GUI.showUI("hitmole.HammerUI", "mask", null);
        }


        /**
       * 每次展示面板时调用
       * @param args 
       */
        public update(...args): void {
            super.update();

        }

        onLoop(): void {
            this._currUI.timeBar.value -= (1 / 10);// 倒计时时间设置
            if (this._currUI.timeBar.value <= 0) {
                this.gameOver();
            }
            var index: number = Math.floor(Math.random() * this.moleNum);
            this.moles[index].show();
        }
        public gameStart(): void {
            this._currUI.timeBar.value = 1;
            this.score = 0;
            this.updateScoreUI();
      
            // hammer.visible = true;
            this.hammer.addEvent();
            Laya.timer.loop(1000, this, this.onLoop);
        }
        gameOver(): void {
            
            Laya.timer.clear(this, this.onLoop);
            this.hammer.visible = false;
            this.hammer.removeEvent();
            // if(!GameMain.gameOver){
            //     GameMain.gameOver = new GameOver();    
            // }
            
            this.gameover.setScoreUI(this.score);
            // GUI.instence.showUI("gameoverUI", "wind");
            // Laya.stage.addChild(GameMain.gameOver);
            this._backExit();
            console.log("游戏结束");
        }
        setScore(type: number): void {
            this.score += (type == 1 ? -100 : 100);
            if (this.score < 0) this.score = 0;
            this.updateScoreUI();
        }
        updateScoreUI(): void {
            var data: any = {};
            var temp: number = this.score;
            for (var i: number = 9; i >= 0; i--) {
                data["item" + i] = { index: Math.floor(temp % 10) };
                temp /= 10;
            }
            this._currUI.box_shuzi.dataSource = data

        }

        /**添加监听 */
        public addEvent(): void {
            //    this._currUI.btn_start.on(Laya.Event.CLICK,this,this._backExit);
        }

        /**移除监听 */
        public removeEvent(): void {
            //    this._currUI.btn_start.on(Laya.Event.CLICK,this,this._backExit);
        }

        //游戏结束界面
        private _backExit(): void {
            GUI.showUI("hitmole.GameOverUI", "gui", null);
        }
        /**
         * 移除面板
         */
        public remove(): void {
            super.remove();
        }
    }
}
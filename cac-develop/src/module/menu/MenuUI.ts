module menu {
    export class MenuUI extends BaseUI {
        private _currUI: ui.menu.MenuUI;
        private _baseTime: number = 200;   //缓动动画单位时间

        constructor() {
            super();
            this._currUI = new ui.menu.MenuUI();
            this.setUI("MenuUI", this._currUI, this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args): void {
            this._currUI.img_bg.skin = "res/extra/bg_menu.jpg";
            this.tweenIn(Laya.Handler.create(this, () => {
                super.update();
            }));
        }

        /**添加监听 */
        public addEvent(): void {
            this._currUI.btn_ddz.on(Laya.Event.CLICK, this, this._openSelectScene, [0]);
            this._currUI.btn_jdsz.on(Laya.Event.CLICK, this, this._openSelectScene, [1]);

            this._currUI.btn_brnn.on(Laya.Event.CLICK, this, this._openBrnn);
            this._currUI.btn_bcbm.on(Laya.Event.CLICK, this, this._openBcbm);
            this._currUI.btn_brsz.on(Laya.Event.CLICK, this, this._openBrsz);
            this._currUI.btn_bjl.on(Laya.Event.CLICK, this, this._openBjl);
            this._currUI.btn_hhdz.on(Laya.Event.CLICK, this, this._openHhdz);
            this._currUI.btn_fruit.on(Laya.Event.CLICK, this, this._openJxlw);

            this._currUI.btn_setting.on(Laya.Event.CLICK, this, this._openSetting);
            this._currUI.btn_tehui.on(Laya.Event.CLICK, this, this._openGift);
            this._currUI.btn_feedback.on(Laya.Event.CLICK, this, this._openFeedBack);
            this._currUI.btn_custom.on(Laya.Event.CLICK, this, this._openCustomer);
            this._currUI.btn_vip.on(Laya.Event.CLICK, this, this._openVip);
            this._currUI.btn_active.on(Laya.Event.CLICK, this, this._openActivity);
            this._currUI.btn_fuli.on(Laya.Event.CLICK, this, this._openWelfare);
            this._currUI.btn_rank.on(Laya.Event.CLICK, this, this._openRank);
            this._currUI.btn_shop.on(Laya.Event.CLICK, this, this._openShop, [0]);
            this._currUI.btn_add_gold.on(Laya.Event.CLICK, this, this._openShop, [1]);
            this._currUI.btn_add_damod.on(Laya.Event.CLICK, this, this._openShop, [3]);
            this._currUI.box_gold.on(Laya.Event.CLICK, this, this._openShop, [1]);
            this._currUI.box_damond.on(Laya.Event.CLICK, this, this._openShop, [3]);
            this._currUI.btn_head.on(Laya.Event.CLICK, this, this._openPlayerInfo);
            this._currUI.btn_bank.on(Laya.Event.CLICK, this, this._openBank);

            this._currUI.btn_hitmole.on(Laya.Event.CLICK, this, this._openhitmole);//点击按钮，打开打地鼠游戏



        }

        /**移除监听 */
        public removeEvent(): void {
            this._currUI.btn_ddz.on(Laya.Event.CLICK, this, this._openSelectScene, [0]);
            this._currUI.btn_jdsz.on(Laya.Event.CLICK, this, this._openSelectScene, [1]);

            this._currUI.btn_brnn.off(Laya.Event.CLICK, this, this._openBrnn);
            this._currUI.btn_bcbm.off(Laya.Event.CLICK, this, this._openBcbm);
            this._currUI.btn_brsz.off(Laya.Event.CLICK, this, this._openBrsz);
            this._currUI.btn_bjl.off(Laya.Event.CLICK, this, this._openBjl);
            this._currUI.btn_hhdz.off(Laya.Event.CLICK, this, this._openHhdz);
            this._currUI.btn_fruit.off(Laya.Event.CLICK, this, this._openJxlw);

            this._currUI.btn_setting.off(Laya.Event.CLICK, this, this._openSetting);
            this._currUI.btn_tehui.off(Laya.Event.CLICK, this, this._openGift);
            this._currUI.btn_feedback.off(Laya.Event.CLICK, this, this._openFeedBack);
            this._currUI.btn_custom.off(Laya.Event.CLICK, this, this._openCustomer);
            this._currUI.btn_vip.off(Laya.Event.CLICK, this, this._openVip);
            this._currUI.btn_active.off(Laya.Event.CLICK, this, this._openActivity);
            this._currUI.btn_fuli.off(Laya.Event.CLICK, this, this._openWelfare);
            this._currUI.btn_rank.off(Laya.Event.CLICK, this, this._openRank);
            this._currUI.btn_shop.off(Laya.Event.CLICK, this, this._openShop);
            this._currUI.btn_add_gold.off(Laya.Event.CLICK, this, this._openShop);
            this._currUI.btn_add_damod.off(Laya.Event.CLICK, this, this._openShop);
            this._currUI.box_gold.off(Laya.Event.CLICK, this, this._openShop);
            this._currUI.box_damond.off(Laya.Event.CLICK, this, this._openShop);
            this._currUI.btn_head.off(Laya.Event.CLICK, this, this._openPlayerInfo);
            this._currUI.btn_bank.off(Laya.Event.CLICK, this, this._openBank);

            this._currUI.btn_hitmole.off(Laya.Event.CLICK, this, this._openhitmole);
        }

        //选场 0斗地主 1金典三张
        private _openSelectScene(typ: number = 0): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GUI.showUI("menu.SelectSceneUI", "gui", null, [typ]);
            }), false);
        }

        //打开百人牛牛界面
        private _openBrnn(): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GMode.call("brnn");
                GUI.removeUI("menu.MenuUI");
            }));
        }

        //打开奔驰宝马界面
        private _openBcbm(): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GMode.call("bcbm");
                GUI.removeUI("menu.MenuUI");
            }));
        }

        //打开百人三张界面
        private _openBrsz(): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GMode.call("brsz");
                GUI.removeUI("menu.MenuUI");
            }));
        }

        //打开百家乐
        private _openBjl(): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GMode.call("bjl");
                GUI.removeUI("menu.MenuUI");
            }));
        }

        //打开红黑大战
        private _openHhdz(): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GMode.call("hhdz");
                GUI.removeUI("menu.MenuUI");
            }));
        }

        //打开九线拉王
        private _openJxlw(): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GMode.call("jxlw");
                GUI.removeUI("menu.MenuUI");
            }));
        }

        //打开打地鼠
        private _openhitmole(): void {
            this.tweenOut(Laya.Handler.create(this, () => {
                GMode.call("hitmole");
                GUI.removeUI("menu.MenuUI");
                // GSocket.init();
                GSocket.createSocket("hitmole", "loading");
            }));
        }

        //================================================//

        //打开设置界面
        private _openSetting(): void {
            GMode.call("setting");
        }

        //打开特惠礼包界面
        private _openGift(): void {
            GMode.call("gift");
        }

        //打开问题反馈界面
        private _openFeedBack(): void {
            GMode.call("feedback");
        }

        //打开客服中心界面
        private _openCustomer(): void {
            GMode.call("customer");
        }

        //打开VIP界面
        private _openVip(): void {
            GMode.call("vip");
        }

        //打开活动界面
        private _openActivity(): void {
            GMode.call("activity");
        }

        //打开福利(月卡签到)界面
        private _openWelfare(): void {
            GMode.call("welfare");
        }

        //打开排行界面
        private _openRank(): void {
            GMode.call("rank");
        }

        //打开商店界面
        private _openShop(index: number = 0): void {
            GMode.call("shop", null, index);
        }

        //打开个人信息界面
        private _openPlayerInfo(): void {
            GMode.call("playerinfo");
        }

        //打开银行界面
        private _openBank(): void {
            GMode.call("bank");
        }

        //=======================================//
        //缓动出场
        public tweenOut(backFun: Laya.Handler = null, isFloorTween: boolean = true): void {
            if (isFloorTween) {
                Laya.Tween.to(this._currUI.box_floor, { y: 725 }, this._baseTime * 3, Laya.Ease.backIn);
            }
            Laya.Tween.to(this._currUI.box_menu, { x: -1000 }, this._baseTime * 3, Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.img_logo, { x: -300 }, this._baseTime * 3, Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.btn_ssc, { y: -200 }, this._baseTime * 3, Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.box_right, { x: 1287 }, this._baseTime * 3, Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.btn_ssl, { y: -200 }, this._baseTime * 2, Laya.Ease.backIn);
            Laya.Tween.to(this._currUI.btn_hitmole, { y: -200 }, this._baseTime * 1, Laya.Ease.backIn);//打地鼠

            Laya.Tween.to(this._currUI.btn_active, { y: -60 }, this._baseTime, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(this._currUI.btn_tehui, { y: -60 }, this._baseTime, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this._currUI.btn_fuli, { y: -60 }, this._baseTime, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                        if (backFun) {
                            Laya.timer.once(this._baseTime, this, () => {
                                backFun.run();
                            });
                        }
                    }));
                }));
            }));
        }

        //缓动入场
        public tweenIn(backFun: Laya.Handler = null, isFloorTween: boolean = true): void {
            if (isFloorTween) {
                this._currUI.box_floor.y = 752
                Laya.Tween.to(this._currUI.box_floor, { y: 597 }, this._baseTime * 3, Laya.Ease.backOut);
            }
            this._currUI.box_menu.x = -1000;
            this._currUI.box_right.x = 1287;
            this._currUI.img_logo.x = -300;
            this._currUI.btn_ssl.y = -200;
            this._currUI.btn_ssc.y = -200;
            this._currUI.btn_hitmole.y = -200;
            this._currUI.btn_active.y = -60;
            this._currUI.btn_tehui.y = -60;
            this._currUI.btn_fuli.y = -60;
            Laya.Tween.to(this._currUI.box_menu, { x: 156 }, this._baseTime * 3, Laya.Ease.backOut);
            Laya.Tween.to(this._currUI.img_logo, { x: 30 }, this._baseTime * 3, Laya.Ease.backOut);
            Laya.Tween.to(this._currUI.btn_ssc, { y: 168 }, this._baseTime * 3, Laya.Ease.backOut);
            Laya.Tween.to(this._currUI.box_right, { x: 1187 }, this._baseTime * 3, Laya.Ease.backOut);
            Laya.Tween.to(this._currUI.btn_ssl, { y: 42 }, this._baseTime * 2, Laya.Ease.backOut);
            Laya.Tween.to(this._currUI.btn_hitmole, { y: 289 }, this._baseTime * 2, Laya.Ease.backOut);
            Laya.Tween.to(this._currUI.btn_active, { y: 51 }, this._baseTime, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(this._currUI.btn_tehui, { y: 46 }, this._baseTime, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this._currUI.btn_fuli, { y: 58 }, this._baseTime, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                        if (backFun) {
                            backFun.run();
                        }
                    }));
                }));
            }));
        }


        /**
         * 移除面板
         */
        public remove(): void {
            super.remove();
        }
    }
}
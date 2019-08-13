
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.activity {
    export class ActivityUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public btn_close:component.ScaleButton;
		public btn_0:component.ScaleButton;
		public btn_1:component.ScaleButton;
		public btn_2:component.ScaleButton;
		public btn_3:component.ScaleButton;
		public btn_4:component.ScaleButton;
		public btn_5:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":360,"x":640,"width":1041,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-25,"x":-281},"child":[{"type":"Image","props":{"y":44,"x":281,"skin":"common/img1.png"}},{"type":"Image","props":{"y":118,"x":295,"width":1010,"skin":"common/img2.png","height":523}},{"type":"Image","props":{"y":17,"x":562,"skin":"activity/t_hd.png"}},{"type":"ScaleButton","props":{"y":57,"x":1312,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":107,"x":42,"width":965,"height":487},"child":[{"type":"ScaleButton","props":{"y":80,"x":235,"var":"btn_0","skin":"activity/sbtn_img1.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":80,"x":715,"var":"btn_1","skin":"activity/sbtn_img2.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":243,"x":235,"var":"btn_2","skin":"activity/sbtn_img3.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":243,"x":715,"var":"btn_3","skin":"activity/sbtn_img4.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":409,"x":235,"var":"btn_4","skin":"activity/sbtn_img5.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":409,"x":715,"var":"btn_5","skin":"activity/sbtn_img6.png","label":"","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.activity.ActivityUI.uiView);

        }

    }
}

module ui.bank {
    export class BankUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public btn_close:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":360,"x":640,"width":1041,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-10,"x":-6},"child":[{"type":"Image","props":{"y":27,"skin":"common/img1.png"}},{"type":"Image","props":{"y":101,"x":14,"width":1010,"skin":"common/img2.png","height":523}},{"type":"Image","props":{"y":23,"x":324,"skin":"common/title.png"}},{"type":"Image","props":{"y":37,"x":492,"skin":"bank/t_bank.png"}},{"type":"ScaleButton","props":{"y":40,"x":1031,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.bank.BankUI.uiView);

        }

    }
}

module ui.bcbm {
    export class BcbmUI extends View {
		public img_bg:Laya.Image;
		public box_doors:Laya.Box;
		public box_touch_0:Laya.Box;
		public img_shade_0:Laya.Image;
		public box_touch_1:Laya.Box;
		public img_shade_1:Laya.Image;
		public box_touch_2:Laya.Box;
		public img_shade_2:Laya.Image;
		public box_touch_3:Laya.Box;
		public img_shade_3:Laya.Image;
		public box_touch_4:Laya.Box;
		public img_shade_4:Laya.Image;
		public box_touch_5:Laya.Box;
		public img_shade_5:Laya.Image;
		public box_touch_6:Laya.Box;
		public img_shade_6:Laya.Image;
		public box_touch_7:Laya.Box;
		public img_shade_7:Laya.Image;
		public box_car:Laya.Box;
		public box_circle:Laya.Box;
		public box_0:Laya.Box;
		public box_1:Laya.Box;
		public box_2:Laya.Box;
		public box_3:Laya.Box;
		public box_4:Laya.Box;
		public box_5:Laya.Box;
		public box_6:Laya.Box;
		public box_7:Laya.Box;
		public box_8:Laya.Box;
		public box_9:Laya.Box;
		public box_10:Laya.Box;
		public box_11:Laya.Box;
		public box_12:Laya.Box;
		public box_13:Laya.Box;
		public box_14:Laya.Box;
		public box_15:Laya.Box;
		public box_16:Laya.Box;
		public box_17:Laya.Box;
		public box_18:Laya.Box;
		public box_19:Laya.Box;
		public box_20:Laya.Box;
		public box_21:Laya.Box;
		public box_22:Laya.Box;
		public box_23:Laya.Box;
		public box_24:Laya.Box;
		public box_25:Laya.Box;
		public box_26:Laya.Box;
		public box_27:Laya.Box;
		public box_28:Laya.Box;
		public box_29:Laya.Box;
		public box_30:Laya.Box;
		public box_31:Laya.Box;
		public btn_more:component.ScaleButton;
		public btn_players:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":-160,"var":"img_bg"}},{"type":"Box","props":{"y":198,"x":220,"var":"box_doors"},"child":[{"type":"Box","props":{"y":-14,"x":4,"var":"box_touch_0"},"child":[{"type":"Image","props":{"y":27,"x":97,"skin":"bcbm/img_car_logo1.png"}},{"type":"Image","props":{"x":69,"skin":"bcbm/img_car_logo5.png"}},{"type":"Image","props":{"y":14,"var":"img_shade_0","skin":"bcbm/img_shade1.png"}}]},{"type":"Box","props":{"y":-13,"x":213,"var":"box_touch_1"},"child":[{"type":"Image","props":{"y":27,"x":72,"skin":"bcbm/img_car_logo2.png"}},{"type":"Image","props":{"x":44,"skin":"bcbm/img_car_logo6.png"}},{"type":"Image","props":{"y":13,"var":"img_shade_1","skin":"bcbm/img_shade2.png"}}]},{"type":"Box","props":{"y":-12,"x":423,"var":"box_touch_2"},"child":[{"type":"Image","props":{"y":27,"x":72,"skin":"bcbm/img_car_logo3.png"}},{"type":"Image","props":{"x":44,"skin":"bcbm/img_car_logo7.png"}},{"type":"Image","props":{"y":12,"var":"img_shade_2","skin":"bcbm/img_shade2.png"}}]},{"type":"Box","props":{"y":-12,"x":632,"var":"box_touch_3"},"child":[{"type":"Image","props":{"y":27,"x":71,"skin":"bcbm/img_car_logo4.png"}},{"type":"Image","props":{"x":43,"skin":"bcbm/img_car_logo8.png"}},{"type":"Image","props":{"y":12,"var":"img_shade_3","skin":"bcbm/img_shade3.png"}}]},{"type":"Box","props":{"y":174,"x":0,"var":"box_touch_4"},"child":[{"type":"Image","props":{"y":96,"x":143,"skin":"bcbm/img_car_logo1.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":96,"x":143,"skin":"bcbm/img_car_logo5.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_shade_4","skin":"bcbm/img_shade4.png"}}]},{"type":"Box","props":{"y":175,"x":212,"var":"box_touch_5"},"child":[{"type":"Image","props":{"y":96,"x":127,"skin":"bcbm/img_car_logo2.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":96,"x":127,"skin":"bcbm/img_car_logo6.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":174,"x":208,"var":"img_shade_5","skin":"bcbm/img_shade2.png","scaleY":-1,"scaleX":-1}}]},{"type":"Box","props":{"y":175,"x":421,"var":"box_touch_6"},"child":[{"type":"Image","props":{"y":98,"x":127,"skin":"bcbm/img_car_logo3.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":98,"x":127,"skin":"bcbm/img_car_logo7.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":174,"x":208,"var":"img_shade_6","skin":"bcbm/img_shade2.png","scaleY":-1,"scaleX":-1}}]},{"type":"Box","props":{"y":174,"x":631,"var":"box_touch_7"},"child":[{"type":"Image","props":{"y":98,"x":126,"skin":"bcbm/img_car_logo4.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":98,"x":126,"skin":"bcbm/img_car_logo8.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_shade_7","skin":"bcbm/img_shade5.png"}}]}]},{"type":"Box","props":{"y":116,"x":367,"var":"box_car","anchorY":0.5,"anchorX":0.3},"child":[{"type":"Image","props":{"skin":"bcbm/img_car1.png"}},{"type":"Image","props":{"skin":"bcbm/img_car2.png"}}]},{"type":"Box","props":{"y":132.5,"x":156.5,"var":"box_circle"},"child":[{"type":"Box","props":{"y":38,"x":220,"width":75,"var":"box_0","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":295,"width":75,"var":"box_1","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":370,"width":75,"var":"box_2","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":444,"width":75,"var":"box_3","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":520,"width":75,"var":"box_4","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":596,"width":75,"var":"box_5","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":673,"width":75,"var":"box_6","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":746,"width":75,"var":"box_7","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":823,"width":75,"var":"box_8","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":66.5,"x":884.5,"width":75,"var":"box_9","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":111,"x":930,"width":75,"var":"box_10","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":186,"x":930,"width":75,"var":"box_11","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":263,"x":930,"width":75,"var":"box_12","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":342,"x":930,"width":75,"var":"box_13","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":399.5,"x":883.5,"width":75,"var":"box_14","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":823,"width":75,"var":"box_15","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":746,"width":75,"var":"box_16","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":674,"width":75,"var":"box_17","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":596,"width":75,"var":"box_18","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":519,"width":75,"var":"box_19","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":445,"width":75,"var":"box_20","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":370,"width":75,"var":"box_21","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":295,"width":75,"var":"box_22","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":220,"width":75,"var":"box_23","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":443,"x":145,"width":75,"var":"box_24","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":401.5,"x":86.5,"width":75,"var":"box_25","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo1.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo5.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":354,"x":40,"width":75,"var":"box_26","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":276,"x":40,"width":75,"var":"box_27","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo2.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo6.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":200,"x":40,"width":75,"var":"box_28","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":119,"x":40,"width":75,"var":"box_29","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo3.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo7.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":64.5,"x":82.5,"width":75,"var":"box_30","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.45,"scaleX":0.45,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":38,"x":147,"width":75,"var":"box_31","height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":37,"skin":"bcbm/img_car_logo4.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36.900000000000006,"x":36.900000000000006,"skin":"bcbm/img_car_logo8.png","scaleY":0.35,"scaleX":0.35,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"ScaleButton","props":{"y":53,"x":1215,"var":"btn_more","skin":"bcbm/sbtn_more.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":52,"x":1088,"var":"btn_players","skin":"bcbm/sbtn_friend.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":22,"x":31,"skin":"zzzzzzz/外围/11个人信息9.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.bcbm.BcbmUI.uiView);

        }

    }
}

module ui.bjl {
    export class BjlUI extends View {
		public img_bg:Laya.Image;
		public box_list:Laya.Box;
		public img_ping:Laya.Image;
		public img_tdp:Laya.Image;
		public img_z:Laya.Image;
		public img_z_duizi:Laya.Image;
		public img_z_tw:Laya.Image;
		public img_x_tw:Laya.Image;
		public img_x:Laya.Image;
		public img_x_duizi:Laya.Image;
		public box_seats:Laya.Box;
		public btn_players:component.ScaleButton;
		public btn_more:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"x":-160,"var":"img_bg"}},{"type":"Box","props":{"y":171,"x":188,"var":"box_list"},"child":[{"type":"Image","props":{"y":101,"x":344,"var":"img_ping","skin":"bjl/bright_ping.png"}},{"type":"Image","props":{"y":215,"x":378,"var":"img_tdp","skin":"bjl/bright_tdp.png"}},{"type":"Image","props":{"y":129,"x":558,"var":"img_z","skin":"bjl/bright_z_x.png"}},{"type":"Image","props":{"x":530,"var":"img_z_duizi","skin":"bjl/bright_z_x_duizi.png"}},{"type":"Image","props":{"y":190,"x":481,"var":"img_z_tw","skin":"bjl/bright_z_x_tianwang.png"}},{"type":"Image","props":{"y":190,"x":422,"var":"img_x_tw","skin":"bjl/bright_z_x_tianwang.png","scaleX":-1}},{"type":"Image","props":{"y":129,"x":345,"var":"img_x","skin":"bjl/bright_z_x.png","scaleX":-1}},{"type":"Image","props":{"x":372,"var":"img_x_duizi","skin":"bjl/bright_z_x_duizi.png","scaleX":-1}}]},{"type":"Box","props":{"y":95,"x":18,"var":"box_seats"},"child":[{"type":"Box","props":{"y":12,"x":34},"child":[{"type":"Image","props":{"skin":"bjl/img_first.png"}}]},{"type":"Box","props":{"x":975},"child":[{"type":"Image","props":{"skin":"bjl/img_shensuanzi.png"}}]},{"type":"Box","props":{"y":135},"child":[{"type":"Image","props":{"skin":"bjl/img_tx.png"}},{"type":"Image","props":{"skin":"bjl/img_sitdown.png"}}]},{"type":"Box","props":{"y":135,"x":1138},"child":[{"type":"Image","props":{"skin":"bjl/img_tx.png"}},{"type":"Image","props":{"skin":"bjl/img_sitdown.png"}}]},{"type":"Box","props":{"y":304,"x":16},"child":[{"type":"Image","props":{"skin":"bjl/img_tx.png"}},{"type":"Image","props":{"skin":"bjl/img_sitdown.png"}}]},{"type":"Box","props":{"y":304,"x":1122},"child":[{"type":"Image","props":{"skin":"bjl/img_tx.png"}},{"type":"Image","props":{"skin":"bjl/img_sitdown.png"}}]}]},{"type":"ScaleButton","props":{"y":52,"x":1088,"var":"btn_players","skin":"bjl/sbtn_friend.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":53,"x":1215,"var":"btn_more","skin":"bjl/sbtn_more.png","label":"","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.bjl.BjlUI.uiView);

        }

    }
}

module ui.brnn {
    export class BrnnUI extends View {
		public img_bg:Laya.Image;
		public box_doors:Laya.Box;
		public box_t:Laya.Box;
		public img_t:Laya.Image;
		public img_t_light:Laya.Image;
		public box_d:Laya.Box;
		public img_d:Laya.Image;
		public img_d_light:Laya.Image;
		public box_x:Laya.Box;
		public img_x:Laya.Image;
		public img_x_light:Laya.Image;
		public box_h:Laya.Box;
		public img_h:Laya.Image;
		public img_h_light:Laya.Image;
		public box_floor:Laya.Box;
		public btn_shop:component.ScaleButton;
		public btn_chat:component.ScaleButton;
		public btn_laba:component.ScaleButton;
		public img_head:Laya.Image;
		public txt_name:laya.display.Text;
		public box_history:Laya.Box;
		public box_seats:Laya.Box;
		public box_set_0:Laya.Box;
		public box_set_1:Laya.Box;
		public box_set_2:Laya.Box;
		public box_set_3:Laya.Box;
		public box_set_4:Laya.Box;
		public box_set_5:Laya.Box;
		public btn_players:component.ScaleButton;
		public btn_more:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":-160,"var":"img_bg"}},{"type":"Box","props":{"y":182,"x":197,"var":"box_doors"},"child":[{"type":"Box","props":{"var":"box_t"},"child":[{"type":"Image","props":{"var":"img_t","skin":"brnn/img_desktop1.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_t_light","skin":"brnn/img_desktop5.png"}}]},{"type":"Box","props":{"x":219,"var":"box_d"},"child":[{"type":"Image","props":{"var":"img_d","skin":"brnn/img_desktop2.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_d_light","skin":"brnn/img_desktop5.png"}}]},{"type":"Box","props":{"x":439,"var":"box_x"},"child":[{"type":"Image","props":{"var":"img_x","skin":"brnn/img_desktop3.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_x_light","skin":"brnn/img_desktop5.png"}}]},{"type":"Box","props":{"x":658,"var":"box_h"},"child":[{"type":"Image","props":{"var":"img_h","skin":"brnn/img_desktop4.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_h_light","skin":"brnn/img_desktop5.png"}}]}]},{"type":"Box","props":{"y":616,"x":504.5,"var":"box_floor"},"child":[{"type":"Image","props":{"y":28,"x":280,"skin":"brnn/bg_laba.png"}},{"type":"ScaleButton","props":{"y":76,"x":35.5,"var":"btn_shop","skin":"brnn/sbtn_shop.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":74,"x":237.5,"var":"btn_chat","skin":"brnn/sbtn_chat.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":72,"x":340.5,"var":"btn_laba","skin":"brnn/sbtn_laba.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":135.5,"var":"img_head","skin":"menu/img_touxiang.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":79,"x":69.5,"width":138,"var":"txt_name","text":"起风了我要飘了","height":24,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":551,"x":47,"var":"box_history"},"child":[{"type":"Image","props":{"skin":"brnn/img_chart.png"}}]},{"type":"Box","props":{"y":94,"x":18,"var":"box_seats"},"child":[{"type":"Box","props":{"y":12,"x":34,"var":"box_set_0"},"child":[{"type":"Image","props":{"skin":"brnn/img_first.png"}}]},{"type":"Box","props":{"x":975,"var":"box_set_1"},"child":[{"type":"Image","props":{"skin":"brnn/img_shensuanzi.png"}}]},{"type":"Box","props":{"y":135,"var":"box_set_2"},"child":[{"type":"Image","props":{"skin":"brnn/img_tx.png"}},{"type":"Image","props":{"skin":"brnn/img_sitdown.png"}}]},{"type":"Box","props":{"y":135,"x":1138,"var":"box_set_3"},"child":[{"type":"Image","props":{"skin":"brnn/img_tx.png"}},{"type":"Image","props":{"skin":"brnn/img_sitdown.png"}}]},{"type":"Box","props":{"y":304,"x":16,"var":"box_set_4"},"child":[{"type":"Image","props":{"skin":"brnn/img_tx.png"}},{"type":"Image","props":{"skin":"brnn/img_sitdown.png"}}]},{"type":"Box","props":{"y":304,"x":1122,"var":"box_set_5"},"child":[{"type":"Image","props":{"skin":"brnn/img_tx.png"}},{"type":"Image","props":{"skin":"brnn/img_sitdown.png"}}]}]},{"type":"ScaleButton","props":{"y":52,"x":1088,"var":"btn_players","skin":"brnn/sbtn_friend.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":53,"x":1215,"var":"btn_more","skin":"brnn/sbtn_more.png","label":"","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.brnn.BrnnUI.uiView);

        }

    }
}

module ui.brsz {
    export class BrszUI extends View {
		public img_bg:Laya.Image;
		public box_list:Laya.Box;
		public box_door_0:Laya.Box;
		public img_light_0:Laya.Image;
		public img_dark_0:Laya.Image;
		public box_door_1:Laya.Box;
		public img_light_1:Laya.Image;
		public img_dark_1:Laya.Image;
		public box_door_2:Laya.Box;
		public img_light_2:Laya.Image;
		public img_dark_2:Laya.Image;
		public box_door_3:Laya.Box;
		public img_light_3:Laya.Image;
		public img_dark_3:Laya.Image;
		public btn_players:component.ScaleButton;
		public btn_more:component.ScaleButton;
		public box_seats:Laya.Box;
		public box_set_0:Laya.Box;
		public box_set_1:Laya.Box;
		public box_set_2:Laya.Box;
		public box_set_3:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"x":-160,"var":"img_bg"}},{"type":"Box","props":{"y":183,"x":196,"var":"box_list"},"child":[{"type":"Box","props":{"var":"box_door_0"},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_light_0","skin":"brsz/img_gxfc0.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_dark_0","skin":"brsz/img_gxfc1.png"}}]},{"type":"Box","props":{"x":220,"var":"box_door_1"},"child":[{"type":"Image","props":{"y":1,"x":0,"var":"img_light_1","skin":"brsz/img_gxfc0.png"}},{"type":"Image","props":{"y":1,"x":0,"var":"img_dark_1","skin":"brsz/img_gxfc2.png"}}]},{"type":"Box","props":{"x":441,"var":"box_door_2"},"child":[{"type":"Image","props":{"y":1,"x":0,"var":"img_light_2","skin":"brsz/img_gxfc0.png"}},{"type":"Image","props":{"y":3,"x":0,"var":"img_dark_2","skin":"brsz/img_gxfc3.png"}}]},{"type":"Box","props":{"x":661,"var":"box_door_3"},"child":[{"type":"Image","props":{"y":3,"x":0,"var":"img_light_3","skin":"brsz/img_gxfc0.png"}},{"type":"Image","props":{"y":3,"x":0,"var":"img_dark_3","skin":"brsz/img_gxfc4.png"}}]}]},{"type":"ScaleButton","props":{"y":54,"x":1087,"var":"btn_players","skin":"brsz/sbtn_friend.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":55,"x":1214,"var":"btn_more","skin":"brsz/sbtn_more.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":171,"x":25,"var":"box_seats"},"child":[{"type":"Box","props":{"var":"box_set_0"},"child":[{"type":"Image","props":{"skin":"brsz/img_tx.png"}},{"type":"Image","props":{"skin":"brsz/img_sitdown.png"}}]},{"type":"Box","props":{"x":1124,"var":"box_set_1"},"child":[{"type":"Image","props":{"skin":"brsz/img_tx.png"}},{"type":"Image","props":{"skin":"brsz/img_sitdown.png"}}]},{"type":"Box","props":{"y":190,"var":"box_set_2"},"child":[{"type":"Image","props":{"skin":"brsz/img_tx.png"}},{"type":"Image","props":{"skin":"brsz/img_sitdown.png"}}]},{"type":"Box","props":{"y":190,"x":1124,"var":"box_set_3"},"child":[{"type":"Image","props":{"skin":"brsz/img_tx.png"}},{"type":"Image","props":{"skin":"brsz/img_sitdown.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.brsz.BrszUI.uiView);

        }

    }
}

module ui.common {
    export class CardUI extends View {
		public ani_close:Laya.FrameAnimation;
		public ani_open:Laya.FrameAnimation;
		public img_back:Laya.Image;
		public img_face:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":80,"height":100},"child":[{"type":"Image","props":{"y":49,"x":40,"var":"img_back","skin":"cards/img_paibei.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":49,"x":40,"var":"img_face","skin":"cards/pai_1.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":5}]}},{"target":2,"keyframes":{"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5}]}}],"name":"ani_close","id":1,"frameRate":24,"action":0},{"nodes":[{"target":3,"keyframes":{"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":5}]}},{"target":2,"keyframes":{"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5}]}}],"name":"ani_open","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.common.CardUI.uiView);

        }

    }
}

module ui.common {
    export class TipBarUI extends View {
		public box_bg:Laya.Box;
		public txt_tip:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"y":30,"x":125,"width":250,"height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box_bg"},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":250,"lineWidth":1,"height":60,"fillColor":"#0d0d0d"}}]},{"type":"Text","props":{"y":1,"x":0,"width":250,"var":"txt_tip","valign":"middle","text":"提示语","pivotY":1,"height":60,"fontSize":30,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.common.TipBarUI.uiView);

        }

    }
}

module ui.common {
    export class TipLogoutUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public btn_close:component.ScaleButton;
		public txt_tip:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":339,"x":640,"width":687,"var":"box_body","height":429,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-125,"x":-457},"child":[{"type":"Image","props":{"y":138,"x":457,"width":686,"skin":"common/img1.png","height":408}},{"type":"Image","props":{"y":211,"x":470,"width":659,"skin":"common/img2.png","height":319}},{"type":"Image","props":{"y":130,"x":597,"skin":"common/title.png"}},{"type":"Image","props":{"y":140,"x":765,"skin":"common/t_tishi.png"}},{"type":"ScaleButton","props":{"y":157,"x":1137,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"ScaleButton","props":{"y":357,"x":343,"skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":17,"x":28,"width":115,"text":"继续退出","height":28,"fontSize":28,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":178,"x":247,"skin":"common/img_di.png"}},{"type":"Image","props":{"y":178,"x":386,"skin":"common/img_di.png"}},{"type":"Image","props":{"y":270,"x":389,"skin":"common/t_yueka.png"}},{"type":"Image","props":{"y":272,"x":267,"skin":"common/t_qiandao.png"}},{"type":"Text","props":{"y":127,"x":156,"width":445,"var":"txt_tip","text":"您还有以下福利没有领取，点击图标领取！","strokeColor":"#be580d","stroke":1,"height":27,"fontSize":22,"color":"#be580d"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.common.TipLogoutUI.uiView);

        }

    }
}

module ui.common {
    export class TipWndUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public box_bg:Laya.Box;
		public btn_close:component.ScaleButton;
		public btn_ok:component.ScaleButton;
		public txt_submit:laya.display.Text;
		public hde_msg:laya.html.dom.HTMLDivElement;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":335,"x":640,"width":689,"var":"box_body","height":421,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-125,"x":-457,"var":"box_bg"},"child":[{"type":"Image","props":{"y":138,"x":457,"width":686,"skin":"common/img1.png","height":408}},{"type":"Image","props":{"y":211,"x":470,"width":659,"skin":"common/img2.png","height":319}},{"type":"Image","props":{"y":130,"x":597,"skin":"common/title.png"}},{"type":"Image","props":{"y":140,"x":765,"skin":"common/t_tishi.png"}},{"type":"ScaleButton","props":{"y":157,"x":1137,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"ScaleButton","props":{"y":346,"x":343,"var":"btn_ok","skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":17,"x":28,"width":115,"var":"txt_submit","text":"确定","height":28,"fontSize":28,"color":"#ffffff","align":"center"}}]},{"type":"HTMLDivElement","props":{"y":167,"x":199,"width":288,"var":"hde_msg","innerHTML":"<p style=\"font-weight: bold;color:#be580d;font-size:24px;\">金币不足，是否前往购买?</p> ","height":136}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("HTMLDivElement",laya.html.dom.HTMLDivElement);

            super.createChildren();
            this.createView(ui.common.TipWndUI.uiView);

        }

    }
}

module ui.customer {
    export class CustomerUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public box_bg:Laya.Box;
		public btn_close:component.ScaleButton;
		public box_tab:Laya.Box;
		public btn_tab_0:Laya.Button;
		public btn_tab_1:Laya.Button;
		public btn_tab_2:Laya.Button;
		public box_0:Laya.Box;
		public btn_copy:component.ScaleButton;
		public box_1:Laya.Box;
		public list_msg:Laya.List;
		public box_2:Laya.Box;
		public list_qa:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":350,"x":641,"width":1041,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-25,"x":-281,"var":"box_bg"},"child":[{"type":"Image","props":{"y":44,"x":281,"skin":"common/img1.png"}},{"type":"Image","props":{"y":118,"x":295,"width":1010,"skin":"common/img2.png","height":523}},{"type":"Image","props":{"y":37,"x":597,"skin":"common/title.png"}},{"type":"Image","props":{"y":51,"x":728,"skin":"customer/t_kefu.png"}},{"type":"ScaleButton","props":{"y":57,"x":1312,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":112,"x":168,"var":"box_tab"},"child":[{"type":"Button","props":{"stateNum":1,"skin":"customer/btn_lianxi2.png"}},{"type":"Button","props":{"x":231,"stateNum":1,"skin":"customer/btn_xiaoxi2.png"}},{"type":"Button","props":{"y":0,"x":462,"stateNum":1,"skin":"customer/btn_wenti2.png"}},{"type":"Button","props":{"var":"btn_tab_0","stateNum":1,"skin":"customer/btn_lianxi1.png"}},{"type":"Button","props":{"x":231,"var":"btn_tab_1","stateNum":1,"skin":"customer/btn_xiaoxi1.png"}},{"type":"Button","props":{"y":0,"x":462,"var":"btn_tab_2","stateNum":1,"skin":"customer/btn_wenti.png"}}]},{"type":"Box","props":{"y":246,"x":81,"var":"box_0"},"child":[{"type":"Image","props":{"y":3,"x":35,"skin":"customer/icon_qq.png"}},{"type":"Text","props":{"y":188,"width":254,"text":"服务QQ号:1207269696","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"Text","props":{"x":340,"width":423,"text":"步骤1:点击下方[复制并联系客服QQ]按钮","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"Text","props":{"y":60,"x":340,"width":423,"text":"步骤2:打开QQ——右上角[+]——加为好友","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"Text","props":{"y":120,"x":340,"width":423,"text":"步骤3:在输入栏中长按并粘贴QQ后搜索","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"Text","props":{"y":180,"x":340,"width":423,"text":"步骤4:加为好友并反馈你的问题","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"ScaleButton","props":{"y":305,"x":438,"width":275,"var":"btn_copy","skin":"common/sbtn_true.png","sizeGrid":"0,69,0,57","label":"","height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":19,"x":31,"skin":"customer/t_copyqq.png"}}]}]},{"type":"Box","props":{"y":176,"x":14,"width":1011,"var":"box_1","height":469},"child":[{"type":"List","props":{"x":7,"width":983,"var":"list_msg","height":356}},{"type":"Image","props":{"y":357,"skin":"customer/img_downline.png"}},{"type":"Radio","props":{"y":390,"x":44,"skin":"common/radio.png"}},{"type":"Text","props":{"y":397,"x":110,"width":49,"text":"全选","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"ScaleButton","props":{"y":406,"x":885,"width":181,"skin":"common/sbtn_true.png","sizeGrid":"0,69,0,57","label":"","height":63,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":36,"skin":"customer/t_delete.png"}}]}]},{"type":"Box","props":{"y":185,"x":27,"var":"box_2"},"child":[{"type":"List","props":{"width":983,"var":"list_qa","height":356}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.customer.CustomerUI.uiView);

        }

    }
}

module ui.customer {
    export class MsgItemUI extends View {
		public txt_title:laya.display.Text;
		public txt_name:laya.display.Text;
		public txt_time:laya.display.Text;
		public check_select:Laya.CheckBox;

        public static  uiView:any ={"type":"View","props":{"width":990,"height":95},"child":[{"type":"Image","props":{"y":24,"x":98,"skin":"customer/icon_mail.png"}},{"type":"Text","props":{"y":13,"x":186,"width":423,"var":"txt_title","text":"已收到玩家卡仕达看见爱上更多","height":32,"fontSize":22,"color":"#7f5630"}},{"type":"Text","props":{"y":54,"x":183,"width":423,"var":"txt_name","text":"发件人:昵称昵称昵称","height":32,"fontSize":22,"color":"#ecba38"}},{"type":"Text","props":{"y":57,"x":698,"width":260,"var":"txt_time","text":"收件时间:2018.12.06 14:30:05","height":20,"fontSize":18,"color":"#d3a780","align":"right"}},{"type":"Image","props":{"y":88,"x":1,"skin":"common/new_line.png"}},{"type":"CheckBox","props":{"y":26,"x":26,"var":"check_select","skin":"common/checkbox.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.customer.MsgItemUI.uiView);

        }

    }
}

module ui.customer {
    export class QuestionItemUI extends View {
		public txt_q:laya.display.Text;
		public txt_a:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":980,"height":90},"child":[{"type":"Text","props":{"y":2,"x":48,"width":254,"var":"txt_q","text":"Q:问题问题问题问题问题问题问题问题问题问题问题","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"Text","props":{"y":41,"x":50,"width":254,"var":"txt_a","text":"A:回答回答回答回答回答回答回答回答回答回答回答回答","height":32,"fontSize":22,"color":"#d3a780"}},{"type":"Image","props":{"y":84,"x":-9,"width":998,"skin":"common/new_line.png","height":4}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.customer.QuestionItemUI.uiView);

        }

    }
}

module ui.debug {
    export class DebugUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public sbtn_off:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":8,"x":-154,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":367,"x":650,"width":909,"var":"box_body","height":556,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":25,"x":0,"width":908,"skin":"common/img1.png","height":531}},{"type":"Image","props":{"y":92,"x":19,"width":870,"skin":"common/img2.png","height":440}},{"type":"ScaleButton","props":{"y":32,"x":896,"var":"sbtn_off","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.debug.DebugUI.uiView);

        }

    }
}

module ui.feedback {
    export class FeedBackUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public box_bg:Laya.Box;
		public btn_close:component.ScaleButton;
		public box_tab:Laya.Box;
		public btn_tab_0:Laya.Button;
		public btn_tab_1:Laya.Button;
		public box_0:Laya.Box;
		public txt_msg:Laya.TextArea;
		public btn_submit:component.ScaleButton;
		public box_1:Laya.Box;
		public list_msg:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":350,"x":641,"width":1040,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-25,"x":-281,"var":"box_bg"},"child":[{"type":"Image","props":{"y":44,"x":281,"skin":"common/img1.png"}},{"type":"Image","props":{"y":118,"x":295,"width":1010,"skin":"common/img2.png","height":523}},{"type":"Image","props":{"y":37,"x":597,"skin":"common/title.png"}},{"type":"Image","props":{"y":51,"x":728,"skin":"feedback/t_ntwg.png"}},{"type":"ScaleButton","props":{"y":57,"x":1312,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":112,"x":174,"var":"box_tab"},"child":[{"type":"Button","props":{"stateNum":1,"skin":"feedback/btn_jianyi2.png"}},{"type":"Button","props":{"x":346,"stateNum":1,"skin":"feedback/btn_hiufu2.png"}},{"type":"Button","props":{"var":"btn_tab_0","stateNum":1,"skin":"feedback/btn_jianyi1.png"}},{"type":"Button","props":{"x":346,"var":"btn_tab_1","stateNum":1,"skin":"feedback/btn_hiufu1.png"}}]},{"type":"Box","props":{"y":184,"x":66,"var":"box_0"},"child":[{"type":"Image","props":{"y":-13,"x":-13,"width":935,"skin":"feedback/img1.png","height":322,"sizeGrid":"12,17,16,15"}},{"type":"TextArea","props":{"x":7,"width":891,"var":"txt_msg","type":"text","promptColor":"#774e2b","prompt":"请在此输入您的建议","height":295,"fontSize":22,"color":"#774e2b"}},{"type":"Text","props":{"y":317,"width":906,"text":"发现BUG?功能建议?活动创意?请将您的建议写在这里吧,如果被采纳，可得丰富的奖励哦!","height":32,"fontSize":22,"color":"#774e2b"}},{"type":"ScaleButton","props":{"y":390,"x":453,"var":"btn_submit","skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":53,"skin":"feedback/tijiao.png"}}]}]},{"type":"Box","props":{"y":176,"x":66,"var":"box_1"},"child":[{"type":"List","props":{"width":905,"var":"list_msg","height":407}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.feedback.FeedBackUI.uiView);

        }

    }
}

module ui.feedback {
    export class FeedItemUI extends View {
		public txt_name:laya.display.Text;
		public txt_time:laya.display.Text;
		public txt_ask:Laya.TextArea;
		public txt_answer:Laya.TextArea;

        public static  uiView:any ={"type":"View","props":{"width":905,"height":240},"child":[{"type":"Image","props":{"y":47,"x":7,"width":890,"skin":"feedback/img2.png","height":186,"sizeGrid":"12,13,15,11"}},{"type":"Image","props":{"y":134,"x":0,"skin":"feedback/img3.png"}},{"type":"Text","props":{"y":19,"x":15,"width":76,"var":"txt_name","text":"客服:","height":28,"fontSize":22,"color":"#774e2b"}},{"type":"Text","props":{"y":19,"x":679,"width":204,"var":"txt_time","text":"2019-01-22 10:23:07","height":28,"fontSize":22,"color":"#774e2b","align":"right"}},{"type":"TextArea","props":{"y":66,"x":36,"width":842,"var":"txt_ask","text":"巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉","promptColor":"#ea8126","height":66,"fontSize":22,"color":"#ea8126"}},{"type":"TextArea","props":{"y":156,"x":39,"width":842,"var":"txt_answer","text":"回复:如此如此,这般这般","promptColor":"#774e2b","height":66,"fontSize":22,"color":"#774e2b"}},{"type":"Button","props":{"width":905,"height":240}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.feedback.FeedItemUI.uiView);

        }

    }
}

module ui.gift {
    export class GiftUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public box_bg:Laya.Box;
		public img_bg:Laya.Image;
		public btn_close:component.ScaleButton;
		public box_0:Laya.Box;
		public txt_num_0:laya.display.Text;
		public txt_state_0:laya.display.Text;
		public txt_gold_0:laya.display.Text;
		public txt_pay_0:laya.display.Text;
		public btn_pay_0:component.ScaleButton;
		public txt_pay_num_0:laya.display.Text;
		public box_1:Laya.Box;
		public txt_num_1:laya.display.Text;
		public txt_state_1:laya.display.Text;
		public txt_gold_1:laya.display.Text;
		public txt_pay_1:laya.display.Text;
		public btn_pay_1:component.ScaleButton;
		public txt_pay_num_1:laya.display.Text;
		public box_2:Laya.Box;
		public btn_pay_2:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":355,"x":643,"var":"box_body","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-30,"x":-163,"var":"box_bg"},"child":[{"type":"Image","props":{"y":30,"x":163,"width":1280,"var":"img_bg","height":650}},{"type":"ScaleButton","props":{"y":93,"x":1318,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":161,"x":935,"skin":"gift/img3.png"}}]},{"type":"Box","props":{"y":140,"x":181,"width":287,"var":"box_0","height":453},"child":[{"type":"Image","props":{"x":26,"skin":"gift/img_xianshi2.png"}},{"type":"Image","props":{"y":53,"skin":"gift/img7.png"}},{"type":"Image","props":{"y":10,"x":20,"skin":"gift/img5.png"},"child":[{"type":"Text","props":{"y":5,"x":10,"width":183,"var":"txt_num_0","text":"兑换比例  1:1000","height":24,"fontSize":20,"color":"#ffffff"}}]},{"type":"Image","props":{"y":117,"x":101,"skin":"gift/img1.png"}},{"type":"Image","props":{"y":58,"x":164,"skin":"gift/img2.png"},"child":[{"type":"Text","props":{"y":7,"x":20,"var":"txt_state_0","text":"即将开始","strokeColor":"#dd9619","stroke":1,"fontSize":18,"color":"#dd9619","align":"center"}}]},{"type":"Text","props":{"y":229,"x":84,"var":"txt_gold_0","text":"1000金币","strokeColor":"#dd9619","stroke":1,"fontSize":28,"color":"#b45f10","align":"center"}},{"type":"Text","props":{"y":290,"x":88,"var":"txt_pay_0","text":"1000金币","strokeColor":"#603634","stroke":1,"fontSize":26,"color":"#603634","align":"center"}},{"type":"ScaleButton","props":{"y":383,"x":147,"var":"btn_pay_0","skin":"gift/sbtn_pay.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":13,"x":38,"width":130,"var":"txt_pay_num_0","text":"10元","strokeColor":"#580f0f","stroke":2,"height":43,"fontSize":28,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":140,"x":470,"width":295,"var":"box_1","height":453},"child":[{"type":"Image","props":{"x":26,"skin":"gift/img_xianshi2.png"}},{"type":"Image","props":{"y":53,"skin":"gift/img7.png"}},{"type":"Image","props":{"y":10,"x":20,"skin":"gift/img5.png"},"child":[{"type":"Text","props":{"y":5,"x":10,"width":183,"var":"txt_num_1","text":"兑换比例  1:1000","height":24,"fontSize":20,"color":"#ffffff"}}]},{"type":"Image","props":{"y":117,"x":101,"skin":"gift/img1.png"}},{"type":"Image","props":{"y":58,"x":164,"skin":"gift/img2.png"},"child":[{"type":"Text","props":{"y":7,"x":20,"var":"txt_state_1","text":"即将开始","strokeColor":"#dd9619","stroke":1,"fontSize":18,"color":"#dd9619","align":"center"}}]},{"type":"Text","props":{"y":229,"x":84,"var":"txt_gold_1","text":"1000金币","strokeColor":"#dd9619","stroke":1,"fontSize":28,"color":"#b45f10","align":"center"}},{"type":"Text","props":{"y":290,"x":88,"var":"txt_pay_1","text":"1000金币","strokeColor":"#603634","stroke":1,"fontSize":26,"color":"#603634","align":"center"}},{"type":"ScaleButton","props":{"y":383,"x":147,"var":"btn_pay_1","skin":"gift/sbtn_pay.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":13,"x":38,"width":130,"var":"txt_pay_num_1","text":"10元","strokeColor":"#580f0f","stroke":2,"height":43,"fontSize":28,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":142,"x":803,"width":290,"var":"box_2","height":453},"child":[{"type":"Image","props":{"y":-5,"x":2,"skin":"gift/img_xianshi3.png"}},{"type":"Text","props":{"y":290,"x":39,"text":"专属服务赶紧来体验哦","strokeColor":"#ffffff","stroke":1,"fontSize":22,"color":"#ffffff","align":"center"}},{"type":"ScaleButton","props":{"y":383,"x":147,"var":"btn_pay_2","skin":"gift/sbtn_pay.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":42,"skin":"gift/t1.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.gift.GiftUI.uiView);

        }

    }
}

module ui.hhdz {
    export class HhdzUI extends View {
		public img_bg:Laya.Image;
		public box_top:Laya.Box;
		public box_list:Laya.Box;
		public door_he:Laya.Image;
		public box_red:Laya.Box;
		public door_r_0:Laya.Image;
		public door_r_1:Laya.Image;
		public door_r_2:Laya.Image;
		public door_r_3:Laya.Image;
		public door_r_4:Laya.Image;
		public box_black:Laya.Box;
		public door_b_0:Laya.Image;
		public door_b_1:Laya.Image;
		public door_b_2:Laya.Image;
		public door_b_3:Laya.Image;
		public door_b_4:Laya.Image;
		public box_seats:Laya.Box;
		public btn_players:component.ScaleButton;
		public btn_more:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"x":-160,"var":"img_bg"}},{"type":"Box","props":{"y":-2,"x":257,"var":"box_top"},"child":[{"type":"Image","props":{"width":270,"skin":"hhdz/img_red.png","height":104}},{"type":"Image","props":{"x":495,"width":270,"skin":"hhdz/img_black.png","height":104}}]},{"type":"Box","props":{"y":191,"x":184,"var":"box_list"},"child":[{"type":"Image","props":{"x":206,"var":"door_he","skin":"hhdz/light11.png"}},{"type":"Box","props":{"var":"box_red"},"child":[{"type":"Image","props":{"var":"door_r_0","skin":"hhdz/light1.png"}},{"type":"Image","props":{"y":102,"x":1,"var":"door_r_1","skin":"hhdz/light3.png"}},{"type":"Image","props":{"y":228,"x":53,"var":"door_r_2","skin":"hhdz/light4.png"}},{"type":"Image","props":{"y":268,"x":187,"var":"door_r_3","skin":"hhdz/light5.png"}},{"type":"Image","props":{"y":288,"x":310,"var":"door_r_4","skin":"hhdz/light6.png"}}]},{"type":"Box","props":{"x":456,"var":"box_black"},"child":[{"type":"Image","props":{"var":"door_b_0","skin":"hhdz/light2.png"}},{"type":"Image","props":{"y":100,"x":300,"var":"door_b_1","skin":"hhdz/light10.png"}},{"type":"Image","props":{"y":230,"x":205,"var":"door_b_2","skin":"hhdz/light9.png"}},{"type":"Image","props":{"y":267,"x":111,"var":"door_b_3","skin":"hhdz/light8.png"}},{"type":"Image","props":{"y":287,"var":"door_b_4","skin":"hhdz/light7.png"}}]}]},{"type":"Box","props":{"y":87,"x":39,"var":"box_seats"},"child":[{"type":"Box","props":{"y":12},"child":[{"type":"Image","props":{"skin":"hhdz/img_first.png"}}]},{"type":"Box","props":{"x":963},"child":[{"type":"Image","props":{"skin":"hhdz/img_shensuanzi.png"}}]},{"type":"Box","props":{"y":164,"x":1},"child":[{"type":"Image","props":{"skin":"hhdz/img_tx.png"}},{"type":"Image","props":{"skin":"hhdz/img_sitdown.png"}}]},{"type":"Box","props":{"y":164,"x":1093},"child":[{"type":"Image","props":{"skin":"hhdz/img_tx.png"}},{"type":"Image","props":{"skin":"hhdz/img_sitdown.png"}}]},{"type":"Box","props":{"y":344,"x":2},"child":[{"type":"Image","props":{"skin":"hhdz/img_tx.png"}},{"type":"Image","props":{"skin":"hhdz/img_sitdown.png"}}]},{"type":"Box","props":{"y":344,"x":1094},"child":[{"type":"Image","props":{"skin":"hhdz/img_tx.png"}},{"type":"Image","props":{"skin":"hhdz/img_sitdown.png"}}]}]},{"type":"ScaleButton","props":{"y":52,"x":1088,"var":"btn_players","skin":"hhdz/sbtn_friend.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":53,"x":1215,"var":"btn_more","skin":"hhdz/sbtn_more.png","label":"","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.hhdz.HhdzUI.uiView);

        }

    }
}

module ui.hitmole {
    export class GameOverUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public btn_restart:Laya.Button;
		public img_score:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Box","props":{"y":0,"x":-100,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1000,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":600}}]},{"type":"Box","props":{"y":100,"x":150,"var":"box_body"},"child":[{"type":"Image","props":{"width":500,"skin":"hitmole/overBg.png","sizeGrid":"15,15,24,12","height":400}},{"type":"Image","props":{"y":47,"x":43,"skin":"hitmole/total Score.png"}},{"type":"Button","props":{"y":275,"x":161,"var":"btn_restart","stateNum":2,"skin":"hitmole/btn_restart.png"}},{"type":"Box","props":{"y":190,"x":160,"var":"img_score"},"child":[{"type":"Clip","props":{"skin":"hitmole/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"hitmole/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"hitmole/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"hitmole/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"hitmole/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"hitmole/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"hitmole/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"hitmole/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"hitmole/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"hitmole/clip_number.png","name":"item9","clipX":10}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitmole.GameOverUI.uiView);

        }

    }
}

module ui.hitmole {
    export class GameStartUI extends View {
		public img_bg:Laya.Image;
		public btn_start:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":115,"x":278,"var":"img_bg","skin":"hitmole/help.png"}},{"type":"Button","props":{"y":483,"x":551,"var":"btn_start","stateNum":2,"skin":"hitmole/btn_start.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitmole.GameStartUI.uiView);

        }

    }
}

module ui.hitmole {
    export class GameViewUI extends View {
		public img_bg:Laya.Image;
		public box_mole:Laya.Box;
		public mole0:ui.hitmole.MoleUI;
		public mole1:ui.hitmole.MoleUI;
		public mole2:ui.hitmole.MoleUI;
		public mole3:ui.hitmole.MoleUI;
		public mole4:ui.hitmole.MoleUI;
		public mole5:ui.hitmole.MoleUI;
		public mole6:ui.hitmole.MoleUI;
		public mole7:ui.hitmole.MoleUI;
		public mole8:ui.hitmole.MoleUI;
		public box_score:Laya.Box;
		public score0:Laya.Image;
		public score1:Laya.Image;
		public score2:Laya.Image;
		public score3:Laya.Image;
		public score4:Laya.Image;
		public score5:Laya.Image;
		public score6:Laya.Image;
		public score7:Laya.Image;
		public score8:Laya.Image;
		public timeBar:Laya.ProgressBar;
		public box_shuzi:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":640,"width":1280,"height":720},"child":[{"type":"Image","props":{"y":-270,"x":-395,"var":"img_bg","skin":"hitmole/back.png"}},{"type":"Box","props":{"y":-117,"x":-306,"var":"box_mole"},"child":[{"type":"Mole","props":{"x":37,"var":"mole0","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":2,"x":226,"var":"mole1","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":6,"x":421,"var":"mole2","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":92,"x":7,"var":"mole3","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":93,"x":224,"var":"mole4","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":90,"x":424,"var":"mole5","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":189,"var":"mole6","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":195,"x":227,"var":"mole7","runtime":"ui.hitmole.MoleUI"}},{"type":"Mole","props":{"y":196,"x":447,"var":"mole8","runtime":"ui.hitmole.MoleUI"}}]},{"type":"Box","props":{"y":-128,"x":-249,"var":"box_score"},"child":[{"type":"Image","props":{"var":"score0","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":16,"x":178,"var":"score1","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":11,"x":379,"var":"score2","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":104,"x":-25,"var":"score3","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":101,"x":179,"var":"score4","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":97,"x":386,"var":"score5","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":193,"x":-30,"var":"score6","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":200,"x":189,"var":"score7","skin":"hitmole/score_1.png"}},{"type":"Image","props":{"y":203,"x":411,"var":"score8","skin":"hitmole/score_1.png"}}]},{"type":"ProgressBar","props":{"y":-313,"x":-601,"var":"timeBar","value":1,"skin":"hitmole/progress_time.png"}},{"type":"Box","props":{"y":-250,"x":-549,"var":"box_shuzi"},"child":[{"type":"Clip","props":{"skin":"hitmole/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"hitmole/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"hitmole/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"hitmole/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"hitmole/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"hitmole/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"hitmole/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"hitmole/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"hitmole/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"hitmole/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.hitmole.MoleUI",ui.hitmole.MoleUI);

            super.createChildren();
            this.createView(ui.hitmole.GameViewUI.uiView);

        }

    }
}

module ui.hitmole {
    export class HammerUI extends View {
		public hit1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":11,"x":2,"skin":"hitmole/hammer.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":46,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":52,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}],"pivotY":[{"value":54,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":0}],"pivotX":[{"value":59,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":0}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":0}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0}]}}],"name":"hit1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitmole.HammerUI.uiView);

        }

    }
}

module ui.hitmole {
    export class MoleUI extends View {
		public box_mole:Laya.Box;
		public normal:Laya.Image;
		public hit:Laya.Image;
		public img_grass:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":150,"height":150},"child":[{"type":"Box","props":{"y":10,"x":6,"var":"box_mole"},"child":[{"type":"Image","props":{"y":0,"x":6,"var":"normal","skin":"hitmole/mouse_normal_1.png"}},{"type":"Image","props":{"y":25,"x":7,"var":"hit","skin":"hitmole/mouse_hit_1.png"}},{"type":"Image","props":{"y":92,"var":"img_grass","skin":"hitmole/mask-01.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hitmole.MoleUI.uiView);

        }

    }
}

module ui.jxlw {
    export class JxlwUI extends View {
		public img_bg:Laya.Image;
		public img_bg_1:Laya.Image;
		public box_top:Laya.Box;
		public box_lines:Laya.Box;
		public img_line1:Laya.Image;
		public img_line2:Laya.Image;
		public img_line3:Laya.Image;
		public img_line4:Laya.Image;
		public img_line5:Laya.Image;
		public img_line6:Laya.Image;
		public img_line7:Laya.Image;
		public img_line8:Laya.Image;
		public img_line9:Laya.Image;
		public box_left:Laya.Box;
		public btn_right:Laya.Box;
		public box_msg:Laya.Box;
		public box_btns:Laya.Box;
		public btn_all:Laya.Button;
		public btn_lines:Laya.Button;
		public btn_base:Laya.Button;
		public btn_free_cancel:Laya.Button;
		public btn_free:Laya.Button;
		public btn_auto_cancel:Laya.Button;
		public btn_start:Laya.Button;
		public btn_more:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"x":-160,"var":"img_bg"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_bg_1"}},{"type":"Box","props":{"y":12,"x":324,"var":"box_top"},"child":[{"type":"Image","props":{"width":634,"skin":"jxlw/img_jxlw_bg_laba.png","sizeGrid":"0,15,0,16","height":43}},{"type":"Image","props":{"y":6,"x":70,"skin":"jxlw/t_pot.png"}}]},{"type":"Box","props":{"y":130,"x":225,"var":"box_lines"},"child":[{"type":"Image","props":{"y":165,"x":2,"var":"img_line1","skin":"jxlw/img_line1.png"}},{"type":"Image","props":{"y":38,"x":1,"var":"img_line2","skin":"jxlw/img_line2.png"}},{"type":"Image","props":{"y":292,"var":"img_line3","skin":"jxlw/img_line3.png"}},{"type":"Image","props":{"y":53,"x":1,"var":"img_line4","skin":"jxlw/img_line4.png"}},{"type":"Image","props":{"y":24,"x":1,"var":"img_line5","skin":"jxlw/img_line5.png"}},{"type":"Image","props":{"y":64,"x":1,"var":"img_line6","skin":"jxlw/img_line6.png"}},{"type":"Image","props":{"y":184,"x":1,"var":"img_line7","skin":"jxlw/img_line7.png"}},{"type":"Image","props":{"var":"img_line8","skin":"jxlw/img_line8.png"}},{"type":"Image","props":{"y":2,"var":"img_line9","skin":"jxlw/img_line9.png"}}]},{"type":"Box","props":{"y":119,"x":196,"var":"box_left"},"child":[{"type":"Box","props":{"y":20,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_8_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_8_h.png"}}]},{"type":"Box","props":{"y":57,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_2_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_2_h.png"}}]},{"type":"Box","props":{"y":93,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_4_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_4_h.png"}}]},{"type":"Box","props":{"y":148,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_6_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_6_h.png"}}]},{"type":"Box","props":{"y":184,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_1_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_1_h.png"}}]},{"type":"Box","props":{"y":219,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_7_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_7_h.png"}}]},{"type":"Box","props":{"y":273,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_5_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_5_h.png"}}]},{"type":"Box","props":{"y":309,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_3_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_3_h.png"}}]},{"type":"Box","props":{"y":345,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_9_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_9_h.png"}}]}]},{"type":"Box","props":{"y":120,"x":1043,"var":"btn_right"},"child":[{"type":"Box","props":{"y":20,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_9_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_9_h.png"}}]},{"type":"Box","props":{"y":56,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_2_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_2_h.png"}}]},{"type":"Box","props":{"y":92,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_4_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_4_h.png"}}]},{"type":"Box","props":{"y":144,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_6_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_6_h.png"}}]},{"type":"Box","props":{"y":181,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_1_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_1_h.png"}}]},{"type":"Box","props":{"y":217,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_7_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_7_h.png"}}]},{"type":"Box","props":{"y":271,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_5_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_5_h.png"}}]},{"type":"Box","props":{"y":308,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_3_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_3_h.png"}}]},{"type":"Box","props":{"y":344,"x":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_8_n.png"}},{"type":"Button","props":{"stateNum":1,"skin":"jxlw/btn_8_h.png"}}]}]},{"type":"Box","props":{"y":525,"x":216,"var":"box_msg"},"child":[{"type":"Image","props":{"x":35,"skin":"jxlw/img_footer.png"}},{"type":"Image","props":{"x":303,"skin":"jxlw/img_footer.png"}},{"type":"Image","props":{"x":631,"skin":"jxlw/img_footer.png"}},{"type":"Image","props":{"y":2,"skin":"jxlw/img_jxlw_dou.png"}},{"type":"Image","props":{"y":6,"x":524,"skin":"jxlw/t_leiji.png"}},{"type":"Image","props":{"y":6,"x":246,"skin":"jxlw/t_xiazhu.png"}}]},{"type":"Box","props":{"y":587,"x":146,"var":"box_btns"},"child":[{"type":"Button","props":{"var":"btn_all","stateNum":2,"skin":"jxlw/btn_all.png"}},{"type":"Button","props":{"x":168,"var":"btn_lines","stateNum":2,"skin":"jxlw/btn_lines.png"}},{"type":"Button","props":{"x":390,"var":"btn_base","stateNum":2,"skin":"jxlw/btn_base.png"}},{"type":"Button","props":{"x":710,"var":"btn_free_cancel","stateNum":2,"skin":"jxlw/btn_free_cancel.png"}},{"type":"Button","props":{"x":710,"var":"btn_free","stateNum":2,"skin":"jxlw/btn_free.png"}},{"type":"Button","props":{"x":710,"var":"btn_auto_cancel","stateNum":2,"skin":"jxlw/btn_auto_cancel.png"}},{"type":"Button","props":{"x":710,"var":"btn_start","stateNum":2,"skin":"jxlw/btn_start.png"}}]},{"type":"ScaleButton","props":{"y":52,"x":1214,"var":"btn_more","skin":"jxlw/sbtn_more.png","label":"","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.jxlw.JxlwUI.uiView);

        }

    }
}

module ui.login {
    export class LoginUI extends View {
		public img_bg:Laya.Image;
		public img_logo:Laya.Image;
		public btn_svr:component.ScaleButton;
		public box_btns:Laya.Box;
		public btn_custom:component.ScaleButton;
		public btn_phone:component.ScaleButton;
		public btn_account:component.ScaleButton;
		public img_floor:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":1280,"var":"img_bg","height":720}},{"type":"Image","props":{"y":24,"x":33,"var":"img_logo","skin":"login/new_img_logo.png"}},{"type":"ScaleButton","props":{"y":587,"x":1167,"var":"btn_svr","skin":"login/sbtn_kefu.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":525,"x":184,"var":"box_btns"},"child":[{"type":"ScaleButton","props":{"y":42,"x":131,"var":"btn_custom","skin":"login/sbtn_visitor.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":42,"x":450,"var":"btn_phone","skin":"login/sbtn_phone.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":42,"x":771,"var":"btn_account","skin":"login/sbtn_number.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":611,"x":0,"width":1280,"var":"img_floor","skin":"login/new_bg_shadow.png","sizeGrid":"27,5,34,6"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.login.LoginUI.uiView);

        }

    }
}

module ui.menu {
    export class MenuUI extends View {
		public img_bg:Laya.Image;
		public img_logo:Laya.Image;
		public txt_version:laya.display.Text;
		public box_top:Laya.Box;
		public btn_active:component.ScaleButton;
		public btn_tehui:component.ScaleButton;
		public btn_fuli:component.ScaleButton;
		public box_menu:Laya.Box;
		public btn_ddz:component.ScaleButton;
		public btn_jdsz:component.ScaleButton;
		public btn_brnn:component.ScaleButton;
		public btn_brsz:component.ScaleButton;
		public btn_bjl:component.ScaleButton;
		public btn_bcbm:component.ScaleButton;
		public btn_fruit:component.ScaleButton;
		public btn_hhdz:component.ScaleButton;
		public box_right:Laya.Box;
		public img_bg_right:Laya.Image;
		public btn_custom:component.ScaleButton;
		public btn_rank:component.ScaleButton;
		public btn_vip:component.ScaleButton;
		public btn_feedback:component.ScaleButton;
		public btn_setting:component.ScaleButton;
		public box_floor:Laya.Box;
		public img_floor:Laya.Image;
		public btn_laba:component.ScaleButton;
		public txt_uid:laya.display.Text;
		public btn_bank:component.ScaleButton;
		public btn_shop:component.ScaleButton;
		public box_gold:Laya.Box;
		public btn_add_gold:component.ScaleButton;
		public txt_gold:laya.display.Text;
		public box_damond:Laya.Box;
		public btn_add_damod:component.ScaleButton;
		public txt_damond:laya.display.Text;
		public btn_head:component.ScaleButton;
		public box_head:Laya.Box;
		public img_bg_head:Laya.Image;
		public img_head:Laya.Image;
		public txt_name:laya.display.Text;
		public box_left:Laya.Box;
		public btn_ssl:component.ScaleButton;
		public btn_ssc:component.ScaleButton;
		public btn_hitmole:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":-160,"var":"img_bg"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_logo","skin":"menu/title_baile.png"},"child":[{"type":"Image","props":{"y":13,"x":71,"skin":"menu/t_baile.png"}},{"type":"Text","props":{"y":77,"x":5,"width":71,"var":"txt_version","text":"[R.v.1.3.5]","height":20,"fontSize":16,"color":"#ffffff"}}]},{"type":"Box","props":{"y":6,"x":809,"var":"box_top"},"child":[{"type":"ScaleButton","props":{"y":51,"x":40,"var":"btn_active","stateNum":1,"skin":"menu/sbtn_activity.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":46,"x":172,"var":"btn_tehui","stateNum":1,"skin":"menu/sbtn_tehui.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":58,"x":286,"var":"btn_fuli","stateNum":1,"skin":"menu/sbtn_fuli.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":131,"x":156,"width":996,"var":"box_menu","height":470},"child":[{"type":"ScaleButton","props":{"y":111,"x":124,"var":"btn_ddz","stateNum":1,"skin":"menu/sbtn_ddz.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":111,"x":374,"var":"btn_jdsz","stateNum":1,"skin":"menu/sbtn_jdc.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":111,"x":624,"var":"btn_brnn","stateNum":1,"skin":"menu/sbtn_brps.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":111,"x":874,"var":"btn_brsz","stateNum":1,"skin":"menu/sbtn_qqh.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":354,"x":124,"var":"btn_bjl","stateNum":1,"skin":"menu/sbtn_hl30.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":354,"x":374,"var":"btn_bcbm","stateNum":1,"skin":"menu/sbtn_fcdz.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":354,"x":624,"var":"btn_fruit","stateNum":1,"skin":"menu/sbtn_sgdz.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":354,"x":874,"var":"btn_hhdz","stateNum":1,"skin":"menu/sbtn_hhdz.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":19,"x":1187,"width":95,"var":"box_right","height":577},"child":[{"type":"Image","props":{"var":"img_bg_right","skin":"menu/img_right.png"}},{"type":"ScaleButton","props":{"y":71,"x":50,"var":"btn_custom","stateNum":1,"skin":"menu/sbtn_footer_kefu.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":175,"x":49,"var":"btn_rank","stateNum":1,"skin":"menu/sbtn_footer_paihang.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":276,"x":48,"var":"btn_vip","stateNum":1,"skin":"menu/sbtn_footer_vip.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":383,"x":50,"var":"btn_feedback","stateNum":1,"skin":"menu/sbtn_niti.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":493,"x":49,"var":"btn_setting","stateNum":1,"skin":"menu/sbtn_footer_shezhi.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":597,"x":0,"width":1285,"var":"box_floor","height":128},"child":[{"type":"Image","props":{"y":46,"x":0,"width":1280,"var":"img_floor","skin":"menu/img_footer3.png"}},{"type":"Image","props":{"y":57,"x":120,"width":230,"skin":"menu/img_footer2.png","sizeGrid":"0,23,0,22","height":49},"child":[{"type":"ScaleButton","props":{"y":23,"x":199,"var":"btn_laba","skin":"menu/sbtn_laba.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":12,"x":17,"width":157,"var":"txt_uid","text":"ID:95273707","height":22,"fontSize":22,"color":"#ffffff","align":"left"}}]},{"type":"ScaleButton","props":{"y":71,"x":976,"width":87,"var":"btn_bank","stateNum":1,"skin":"menu/sbtn_bank.png","height":84,"anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":95,"x":1154,"width":201,"var":"btn_shop","stateNum":1,"skin":"menu/sbtn_shop.png","height":125,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":57,"x":382,"var":"box_gold"},"child":[{"type":"Image","props":{"width":230,"skin":"menu/img_footer2.png","sizeGrid":"0,23,0,22","height":49},"child":[{"type":"Image","props":{"x":-5,"skin":"menu/img_coin.png"}},{"type":"ScaleButton","props":{"y":23,"x":208,"var":"btn_add_gold","stateNum":1,"skin":"menu/sbtn_plus.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":12,"x":43,"width":142,"var":"txt_gold","text":"999,999,999","height":22,"fontSize":22,"color":"#ffffff","align":"left"}}]}]},{"type":"Box","props":{"y":57,"x":640,"var":"box_damond"},"child":[{"type":"Image","props":{"width":230,"skin":"menu/img_footer2.png","sizeGrid":"0,23,0,22","height":49},"child":[{"type":"Image","props":{"y":7,"x":-3,"skin":"menu/img_zuanshi.png"}},{"type":"ScaleButton","props":{"y":23,"x":208,"var":"btn_add_damod","stateNum":1,"skin":"menu/sbtn_plus.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":12,"x":53,"width":142,"var":"txt_damond","text":"999,999,999","height":22,"fontSize":22,"color":"#ffffff","align":"left"}}]}]},{"type":"ScaleButton","props":{"y":57,"x":76,"width":110,"var":"btn_head","label":"","height":108,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"width":110,"var":"box_head","height":108},"child":[{"type":"Image","props":{"var":"img_bg_head","skin":"menu/img_touxiangkuang.png"}},{"type":"Image","props":{"y":4,"x":4,"var":"img_head","skin":"menu/img_touxiang.png"}}]}]},{"type":"Text","props":{"y":19,"x":135,"width":209,"var":"txt_name","text":"起风了我要飘了","height":24,"fontSize":22,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":144,"x":32,"var":"box_left"},"child":[{"type":"ScaleButton","props":{"y":42,"x":42,"var":"btn_ssl","stateNum":1,"skin":"menu/sbtn_ssl.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":168,"x":42,"var":"btn_ssc","stateNum":1,"skin":"menu/sbtn_ssc.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":286,"x":42,"var":"btn_hitmole","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"stateNum":1,"skin":"menu/btn_hammer.png"}},{"type":"Text","props":{"y":69,"x":17,"width":71,"text":"打地鼠","height":24,"fontSize":22,"color":"#c0b42b","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.menu.MenuUI.uiView);

        }

    }
}

module ui.menu {
    export class SelectSceneUI extends View {
		public box_title:Laya.Box;
		public img_jdsz:Laya.Image;
		public img_ddz:Laya.Image;
		public btn_close:component.ScaleButton;
		public box_list:Laya.Box;
		public box_0:Laya.Box;
		public box_1:Laya.Box;
		public box_2:Laya.Box;
		public box_3:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"mouseThrough":true,"mouseEnabled":true,"height":720},"child":[{"type":"Box","props":{"y":19,"x":29,"var":"box_title"},"child":[{"type":"Image","props":{"skin":"menu/title_baile.png"}},{"type":"Image","props":{"y":15,"x":69,"var":"img_jdsz","skin":"menu/img_youshang.png"}},{"type":"Image","props":{"y":15,"x":81,"var":"img_ddz","skin":"menu/img_youshang_dou.png"}}]},{"type":"ScaleButton","props":{"y":51,"x":1204,"var":"btn_close","skin":"menu/sbtn_exit.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":194,"x":98,"var":"box_list"},"child":[{"type":"Box","props":{"width":254,"var":"box_0","height":330},"child":[{"type":"Image","props":{"skin":"menu/img1.png"}},{"type":"Image","props":{"y":48,"x":34,"skin":"menu/img_jingdian_chuji.png"}},{"type":"Image","props":{"y":131,"x":12,"skin":"menu/bg_zige2.png"}},{"type":"Image","props":{"y":188,"x":33,"skin":"menu/bg_difen.png"}},{"type":"Image","props":{"y":282,"x":15,"skin":"menu/img_user1.png"}},{"type":"Image","props":{"y":282,"x":46,"skin":"menu/img_user2.png"}},{"type":"Image","props":{"y":282,"x":76,"skin":"menu/img_user3.png"}},{"type":"Text","props":{"y":145,"x":125,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":202,"x":102,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":242,"x":72,"width":99,"text":"带人: 5000","height":25,"fontSize":20,"color":"#eff9f7","align":"center"}},{"type":"Text","props":{"y":285,"x":122,"width":113,"text":"5998人在玩","height":25,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"right"}}]},{"type":"Box","props":{"x":281,"width":254,"var":"box_1","height":330},"child":[{"type":"Image","props":{"skin":"menu/img2.png"}},{"type":"Image","props":{"y":48,"x":32,"skin":"menu/img_jingdian_putong.png"}},{"type":"Image","props":{"y":131,"x":12,"skin":"menu/bg_zige2.png"}},{"type":"Image","props":{"y":188,"x":33,"skin":"menu/bg_difen.png"}},{"type":"Image","props":{"y":282,"x":15,"skin":"menu/img_user1.png"}},{"type":"Image","props":{"y":282,"x":46,"skin":"menu/img_user2.png"}},{"type":"Image","props":{"y":282,"x":76,"skin":"menu/img_user3.png"}},{"type":"Text","props":{"y":145,"x":125,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":202,"x":102,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":242,"x":72,"width":99,"text":"带人: 5000","height":25,"fontSize":20,"color":"#eff9f7","align":"center"}},{"type":"Text","props":{"y":285,"x":122,"width":113,"text":"5998人在玩","height":25,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"right"}}]},{"type":"Box","props":{"x":562,"width":254,"var":"box_2","height":330},"child":[{"type":"Image","props":{"skin":"menu/img3.png"}},{"type":"Image","props":{"y":48,"x":32,"skin":"menu/img_jingdian_fuhao.png"}},{"type":"Image","props":{"y":131,"x":12,"skin":"menu/bg_zige2.png"}},{"type":"Image","props":{"y":188,"x":33,"skin":"menu/bg_difen.png"}},{"type":"Image","props":{"y":282,"x":15,"skin":"menu/img_user1.png"}},{"type":"Image","props":{"y":282,"x":46,"skin":"menu/img_user2.png"}},{"type":"Image","props":{"y":282,"x":76,"skin":"menu/img_user3.png"}},{"type":"Text","props":{"y":145,"x":125,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":202,"x":102,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":242,"x":72,"width":99,"text":"带人: 5000","height":25,"fontSize":20,"color":"#eff9f7","align":"center"}},{"type":"Text","props":{"y":285,"x":122,"width":113,"text":"5998人在玩","height":25,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"right"}}]},{"type":"Box","props":{"x":843,"width":254,"var":"box_3","height":330},"child":[{"type":"Image","props":{"skin":"menu/img4.png"}},{"type":"Image","props":{"y":48,"x":31,"skin":"menu/img_jingdian_zhizun.png"}},{"type":"Image","props":{"y":131,"x":12,"skin":"menu/bg_zige2.png"}},{"type":"Image","props":{"y":188,"x":33,"skin":"menu/bg_difen.png"}},{"type":"Image","props":{"y":282,"x":15,"skin":"menu/img_user1.png"}},{"type":"Image","props":{"y":282,"x":46,"skin":"menu/img_user2.png"}},{"type":"Image","props":{"y":282,"x":76,"skin":"menu/img_user3.png"}},{"type":"Text","props":{"y":145,"x":125,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":202,"x":102,"width":99,"text":"1000","height":25,"fontSize":22,"color":"#125b68","align":"center"}},{"type":"Text","props":{"y":242,"x":72,"width":99,"text":"带人: 5000","height":25,"fontSize":20,"color":"#eff9f7","align":"center"}},{"type":"Text","props":{"y":285,"x":122,"width":113,"text":"5998人在玩","height":25,"fontSize":20,"color":"#ffffff","alpha":0.5,"align":"right"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.menu.SelectSceneUI.uiView);

        }

    }
}

module ui.playerinfo {
    export class PlayerInfoUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public btn_close:component.ScaleButton;
		public btn_head:component.ScaleButton;
		public box_phone:component.ScaleButton;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":360,"x":640,"width":1041,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-10,"x":-6},"child":[{"type":"Image","props":{"y":27,"skin":"common/img1.png"}},{"type":"Image","props":{"y":101,"x":14,"width":1010,"skin":"common/img2.png","height":523}},{"type":"Image","props":{"y":23,"x":324,"skin":"common/title.png"}},{"type":"Image","props":{"y":37,"x":456,"skin":"playerinfo/title_gerenxinxi.png"}},{"type":"ScaleButton","props":{"y":40,"x":1031,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"ScaleButton","props":{"y":189,"x":99,"var":"btn_head","skin":"menu/img_touxiang.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":272,"x":99,"width":100,"skin":"common/sbtn_true.png","label":"","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":6,"x":9,"skin":"playerinfo/gai.png"}}]},{"type":"ScaleButton","props":{"y":227,"x":924,"skin":"playerinfo/sbtn_shop2.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":414,"x":872,"width":212,"var":"box_phone","skin":"common/sbtn_true.png","label":"","height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":30,"skin":"playerinfo/t_bangding.png"}}]},{"type":"ScaleButton","props":{"y":166,"x":839,"width":112,"skin":"common/sbtn_true.png","label":"","height":48,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":10,"x":25,"skin":"playerinfo/t_copyid.png"}}]},{"type":"ScaleButton","props":{"y":161,"x":519,"skin":"playerinfo/sbtn_bianji.png","label":"","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.playerinfo.PlayerInfoUI.uiView);

        }

    }
}

module ui.playerinfo {
    export class PopUpUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public sbtn_off:component.ScaleButton;
		public box_btn:Laya.Box;
		public box_ok:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-144,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":374,"x":660,"width":909,"var":"box_body","height":556,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":25,"x":0,"width":908,"skin":"common/img1.png","height":531}},{"type":"Image","props":{"y":92,"x":19,"width":870,"skin":"common/img2.png","height":440}},{"type":"Image","props":{"y":29,"x":251,"skin":"common/title.png"}},{"type":"Image","props":{"y":40,"x":381,"width":152,"skin":"playerinfo/t_bdsj.png","height":40}},{"type":"ScaleButton","props":{"y":32,"x":896,"var":"sbtn_off","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":315,"x":696,"width":176,"var":"box_btn","height":69,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ScaleButton","props":{"y":36,"x":86,"skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":30,"x":88,"width":111,"skin":"playerinfo/t_yzm.png","label":"","height":36,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":407,"x":360,"width":174,"var":"box_ok","height":68},"child":[{"type":"ScaleButton","props":{"y":41,"x":88,"skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":45,"skin":"playerinfo/tijiao.png"}}]}]},{"type":"Box","props":{"y":195,"x":104},"child":[{"type":"Text","props":{"y":1,"width":125,"text":"手机号：","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#060606"}},{"type":"Text","props":{"y":100,"width":123,"text":"验证码：","height":38,"fontSize":30,"font":"Microsoft YaHei","color":"#060606"}},{"type":"Image","props":{"x":115,"width":529,"skin":"playerinfo/bg_info.png","sizeGrid":"4,11,6,12","height":49}},{"type":"Image","props":{"y":95,"x":115,"width":312,"skin":"playerinfo/bg_info.png","sizeGrid":"4,11,6,12","height":49}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.playerinfo.PopUpUI.uiView);

        }

    }
}

module ui.rank {
    export class RankUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public box_tabs:Laya.Box;
		public btn_tab_0:Laya.Button;
		public btn_tab_1:Laya.Button;
		public btn_tab_2:Laya.Button;
		public btn_close:component.ScaleButton;
		public list_rank:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":360,"x":640,"width":1041,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":12,"x":0},"child":[{"type":"Image","props":{"y":7,"skin":"common/img1.png"}},{"type":"Image","props":{"y":81,"x":14,"width":1010,"skin":"common/img2.png","height":523}},{"type":"Image","props":{"x":316,"skin":"common/title.png"}},{"type":"Image","props":{"y":14,"x":466,"skin":"rank/t_paihangbang.png"}}]},{"type":"Box","props":{"y":112,"x":168,"var":"box_tabs"},"child":[{"type":"Button","props":{"stateNum":1,"skin":"rank/btn_caifu2.png"}},{"type":"Button","props":{"y":0,"x":231,"stateNum":1,"skin":"rank/btn_meiri2.png"}},{"type":"Button","props":{"y":0,"x":461,"stateNum":1,"skin":"rank/btn_meizhou2.png"}},{"type":"Button","props":{"var":"btn_tab_0","stateNum":1,"skin":"rank/btn_caifu.png"}},{"type":"Button","props":{"y":0,"x":231,"var":"btn_tab_1","stateNum":1,"skin":"rank/btn_meiri.png"}},{"type":"Button","props":{"y":0,"x":461,"var":"btn_tab_2","stateNum":1,"skin":"rank/btn_meizhou.png"}}]},{"type":"ScaleButton","props":{"y":32,"x":1031,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":174,"x":33,"width":975,"var":"list_rank","height":412}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.rank.RankUI.uiView);

        }

    }
}

module ui.rank {
    export class RankItemUI extends View {
		public img_rank:Laya.Image;
		public img_head:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_uid:laya.display.Text;
		public txt_gold:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":975,"height":105},"child":[{"type":"Box","props":{"y":0,"x":0,"width":975,"height":105},"child":[{"type":"Image","props":{"y":45,"x":80,"var":"img_rank","skin":"rank/img_rank1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":44,"x":188,"var":"img_head","skin":"menu/img_touxiang.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":45,"x":245,"skin":"rank/img1.png"}},{"type":"Image","props":{"y":22,"x":671,"skin":"common/img_coin.png"}},{"type":"Image","props":{"y":99,"x":0,"skin":"common/new_line.png"}},{"type":"Text","props":{"y":9,"x":253,"width":238,"var":"txt_name","text":"起风了我要飘了","height":28,"fontSize":24,"color":"#7f5630"}},{"type":"Text","props":{"y":48,"x":253,"width":142,"var":"txt_uid","text":"ID:95273707","height":28,"fontSize":22,"color":"#7f5630","align":"left"}},{"type":"Text","props":{"y":33,"x":726,"width":210,"var":"txt_gold","text":"156465346578","height":28,"fontSize":22,"color":"#7f5630","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.rank.RankItemUI.uiView);

        }

    }
}

module ui.setting {
    export class SettingUI extends View {
		public box_mask:Laya.Box;
		public img_mask:Laya.Image;
		public box_body:Laya.Box;
		public box_bg:Laya.Box;
		public btn_close:component.ScaleButton;
		public box_music:Laya.Box;
		public progress_music:Laya.ProgressBar;
		public hslider_music:Laya.HSlider;
		public box_voice:Laya.Box;
		public progress_voice:Laya.ProgressBar;
		public hslider_voice:Laya.HSlider;
		public txt_state:laya.display.Text;
		public btn_true:component.ScaleButton;
		public txt_change:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"var":"img_mask","skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":357,"x":640,"width":909,"var":"box_body","height":556,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-79,"x":-346,"var":"box_bg"},"child":[{"type":"Image","props":{"y":104,"x":346,"width":908,"skin":"common/img1.png","height":531}},{"type":"Image","props":{"y":171,"x":365,"width":870,"skin":"common/img2.png","height":440}},{"type":"Image","props":{"y":95,"x":597,"skin":"common/title.png"}},{"type":"Image","props":{"y":109,"x":766,"skin":"setting/title_shezhi.png"}},{"type":"ScaleButton","props":{"y":111,"x":1242,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":193,"x":156,"skin":"setting/t_shengyin.png"}},{"type":"Image","props":{"y":299,"x":156,"skin":"setting/t_yinxiao.png"}},{"type":"Box","props":{"y":190,"x":301,"var":"box_music"},"child":[{"type":"ProgressBar","props":{"y":18.5,"width":450,"var":"progress_music","skin":"setting/progress.png","height":20,"sizeGrid":"7,26,10,9"}},{"type":"HSlider","props":{"y":28.5,"x":-2,"width":454,"var":"hslider_music","value":50,"skin":"setting/hslider.png","showLabel":false,"height":57,"anchorY":0.5}}]},{"type":"Box","props":{"y":292,"x":301,"var":"box_voice"},"child":[{"type":"ProgressBar","props":{"y":19.5,"width":450,"var":"progress_voice","skin":"setting/progress.png","height":20,"sizeGrid":"7,26,10,9"}},{"type":"HSlider","props":{"y":28.5,"x":-2,"width":454,"var":"hslider_voice","value":50,"skin":"setting/hslider.png","showLabel":false,"height":57,"anchorY":0.5}}]},{"type":"Text","props":{"y":381,"x":362,"width":183,"var":"txt_state","text":"当前:游客登录","strokeColor":"#be580d","stroke":1,"height":30,"fontSize":24,"color":"#be580d","align":"center"}},{"type":"ScaleButton","props":{"y":463,"x":454,"var":"btn_true","skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":21,"x":19,"width":134,"var":"txt_change","text":"切换账号","strokeColor":"#ffffff","height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.setting.SettingUI.uiView);

        }

    }
}

module ui.shop {
    export class ShopUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public img_bg:Laya.Image;
		public box_tabs:Laya.Box;
		public btn_tab_0:Laya.Button;
		public btn_tab_1:Laya.Button;
		public btn_tab_2:Laya.Button;
		public btn_tab_3:Laya.Button;
		public btn_svr:component.ScaleButton;
		public btn_close:component.ScaleButton;
		public box_0:Laya.Box;
		public box_1:Laya.Box;
		public btn_change:component.ScaleButton;
		public box_2:Laya.Box;
		public box_3:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":360,"x":640,"width":1040,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":12,"x":0},"child":[{"type":"Image","props":{"y":7,"x":14,"width":1013,"skin":"common/img1.png","height":632}},{"type":"Image","props":{"y":54,"x":29,"width":985,"skin":"common/img2.png","height":562}},{"type":"Image","props":{"y":48,"x":51,"width":938,"skin":"shop/img1.png","sizeGrid":"11,12,14,11","height":544}},{"type":"Image","props":{"y":-40,"x":-15,"var":"img_bg","skin":"zzzzzzz/外围/t_shop.png"}}]},{"type":"Box","props":{"y":119,"x":168,"width":720,"var":"box_tabs","height":48},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"shop/btn_zuanshi2.png"}},{"type":"Button","props":{"y":0,"x":181,"stateNum":1,"skin":"shop/btn_jinbi2.png"}},{"type":"Button","props":{"y":0,"x":360,"stateNum":1,"skin":"shop/btn_yueka2.png"}},{"type":"Button","props":{"y":0,"x":540,"stateNum":1,"skin":"shop/btn_vip2.png"}},{"type":"Button","props":{"y":0,"x":0,"var":"btn_tab_0","stateNum":1,"skin":"shop/btn_zuanshi1.png"}},{"type":"Button","props":{"y":0,"x":181,"var":"btn_tab_1","stateNum":1,"skin":"shop/btn_jinbi1.png"}},{"type":"Button","props":{"y":0,"x":360,"var":"btn_tab_2","stateNum":1,"skin":"shop/btn_yueka1.png"}},{"type":"Button","props":{"y":0,"x":540,"var":"btn_tab_3","stateNum":1,"skin":"shop/btn_vip1.png"}}]},{"type":"ScaleButton","props":{"y":144,"x":112,"width":104,"var":"btn_svr","skin":"common/sbtn_cancel.png","label":"","height":45,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":11,"x":11,"width":81,"text":"联系客服","strokeColor":"#449a1b","stroke":1,"height":20,"fontSize":16,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":32,"x":1031,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":173,"x":80,"var":"box_0"},"child":[{"type":"Box","props":{"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"x":223,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"x":446,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"x":669,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":214,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":214,"x":223,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":214,"x":446,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":214,"x":669,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":76,"x":105,"skin":"shop/icon_zuan_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":100,"x":42,"width":129,"text":"60钻","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"6元","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":24,"color":"#ffffff","align":"center"}}]}]}]},{"type":"Box","props":{"y":175,"x":74,"var":"box_1"},"child":[{"type":"Image","props":{"y":4,"width":892,"skin":"shop/img3.png","sizeGrid":"0,17,0,17","height":346}},{"type":"Image","props":{"x":123,"skin":"shop/t1.png"}},{"type":"ScaleButton","props":{"y":383,"x":446,"width":172,"var":"btn_change","skin":"common/sbtn_true.png","label":"","height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":49,"skin":"shop/t_duihuan.png"}}]},{"type":"Image","props":{"y":148,"x":6,"width":880,"skin":"common/new_line.png"}},{"type":"Box","props":{"y":86,"x":71},"child":[{"type":"Image","props":{"y":5,"x":15,"width":220,"skin":"common/img_input.png","height":40,"sizeGrid":"0,26,0,23"}},{"type":"Image","props":{"skin":"common/img_coin.png"}},{"type":"Text","props":{"y":10,"x":52,"width":187,"text":"999999999","height":30,"fontSize":26,"color":"#fbf9f7"}}]},{"type":"Box","props":{"y":90,"x":332},"child":[{"type":"Image","props":{"x":16,"width":220,"skin":"common/img_input.png","height":40,"sizeGrid":"0,26,0,23"}},{"type":"Image","props":{"y":2,"skin":"common/img_zuanshi.png"}},{"type":"Text","props":{"y":5,"x":57,"width":187,"text":"999999999","height":30,"fontSize":26,"color":"#fbf9f7"}}]},{"type":"Box","props":{"y":87,"x":593},"child":[{"type":"Image","props":{"y":6,"x":7,"width":220,"skin":"common/img_input.png","height":40,"sizeGrid":"0,26,0,23"}},{"type":"Image","props":{"skin":"common/img_bank.png"}},{"type":"Text","props":{"y":10,"x":44,"width":187,"text":"999999999","height":30,"fontSize":26,"color":"#fbf9f7"}}]},{"type":"Box","props":{"y":208,"x":512},"child":[{"type":"Image","props":{"y":5,"x":15,"width":220,"skin":"common/img_input.png","height":40,"sizeGrid":"0,26,0,23"}},{"type":"Image","props":{"skin":"common/img_coin.png"}},{"type":"Text","props":{"y":10,"x":52,"width":187,"text":"999999999","height":30,"fontSize":26,"color":"#fbf9f7"}}]},{"type":"Box","props":{"y":212,"x":148},"child":[{"type":"Image","props":{"x":16,"width":220,"skin":"common/img_input.png","height":40,"sizeGrid":"0,26,0,23"}},{"type":"Image","props":{"y":2,"skin":"common/img_zuanshi.png"}},{"type":"Text","props":{"y":5,"x":57,"width":187,"text":"999999999","height":30,"fontSize":26,"color":"#fbf9f7"}}]},{"type":"Image","props":{"y":219,"x":422,"skin":"shop/img_jiantou.png"}},{"type":"ScaleButton","props":{"y":299,"x":128,"width":146,"skin":"common/sbtn_cancel.png","label":"","height":53,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":0,"width":147,"text":"10","strokeColor":"#215606","stroke":2,"height":32,"fontSize":32,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":299,"x":288,"width":146,"skin":"common/sbtn_cancel.png","label":"","height":53,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":0,"width":147,"text":"100","strokeColor":"#215606","stroke":2,"height":32,"fontSize":32,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":299,"x":448,"width":146,"skin":"common/sbtn_cancel.png","label":"","height":53,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":0,"width":147,"text":"1000","strokeColor":"#215606","stroke":2,"height":32,"fontSize":32,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":299,"x":608,"width":146,"skin":"common/sbtn_cancel.png","label":"","height":53,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":0,"width":147,"text":"5000","strokeColor":"#215606","stroke":2,"height":32,"fontSize":32,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":299,"x":768,"width":146,"skin":"common/sbtn_cancel.png","label":"","height":53,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":6,"x":0,"width":147,"text":"全部","strokeColor":"#215606","stroke":2,"height":32,"fontSize":32,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":183,"x":78,"var":"box_2"},"child":[{"type":"Box","props":{"width":295,"height":420},"child":[{"type":"Image","props":{"y":9,"x":12,"skin":"shop/bg2.png"}},{"type":"Image","props":{"skin":"shop/bg1.png"}},{"type":"Image","props":{"y":77,"x":98,"skin":"shop/img5.png"}},{"type":"Image","props":{"y":90,"x":120,"skin":"shop/icon_baiyin.png"}},{"type":"Image","props":{"y":182,"x":55,"skin":"shop/img6.png"},"child":[{"type":"Text","props":{"y":6,"x":6,"width":172,"text":"剩余","strokeColor":"#c24b0c","height":24,"fontSize":22,"color":"#774e2b","align":"center"}}]},{"type":"Image","props":{"y":228,"x":28,"skin":"shop/img7.png"},"child":[{"type":"Text","props":{"y":19,"x":32,"width":172,"text":"领取","strokeColor":"#c24b0c","stroke":2,"height":36,"fontSize":32,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":348,"x":147,"skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":0,"width":172,"text":"领取","strokeColor":"#f67539","stroke":2,"height":36,"fontSize":28,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":20,"x":89,"skin":"shop/t3.png"}}]},{"type":"Box","props":{"x":296,"width":295,"height":420},"child":[{"type":"Image","props":{"y":9,"x":12,"skin":"shop/bg2.png"}},{"type":"Image","props":{"skin":"shop/bg1.png"}},{"type":"Image","props":{"y":77,"x":98,"skin":"shop/img5.png"}},{"type":"Image","props":{"y":90,"x":120,"skin":"shop/icon_huangjin.png"}},{"type":"Image","props":{"y":182,"x":55,"skin":"shop/img6.png"},"child":[{"type":"Text","props":{"y":6,"x":6,"width":172,"text":"剩余","strokeColor":"#c24b0c","height":24,"fontSize":22,"color":"#774e2b","align":"center"}}]},{"type":"Image","props":{"y":228,"x":28,"skin":"shop/img7.png"},"child":[{"type":"Text","props":{"y":19,"x":32,"width":172,"text":"领取","strokeColor":"#c24b0c","stroke":2,"height":36,"fontSize":32,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":348,"x":147,"skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":0,"width":172,"text":"领取","strokeColor":"#f67539","stroke":2,"height":36,"fontSize":28,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":20,"x":87,"skin":"shop/t4.png"}}]},{"type":"Box","props":{"x":592,"width":295,"height":420},"child":[{"type":"Image","props":{"y":9,"x":12,"skin":"shop/bg2.png"}},{"type":"Image","props":{"skin":"shop/bg1.png"}},{"type":"Image","props":{"y":77,"x":98,"skin":"shop/img5.png"}},{"type":"Image","props":{"y":90,"x":120,"skin":"shop/icon_zhizun.png"}},{"type":"Image","props":{"y":182,"x":55,"skin":"shop/img6.png"},"child":[{"type":"Text","props":{"y":6,"x":6,"width":172,"text":"剩余","strokeColor":"#c24b0c","height":24,"fontSize":22,"color":"#774e2b","align":"center"}}]},{"type":"Image","props":{"y":228,"x":28,"skin":"shop/img7.png"},"child":[{"type":"Text","props":{"y":19,"x":32,"width":172,"text":"领取","strokeColor":"#c24b0c","stroke":2,"height":36,"fontSize":32,"color":"#ffffff","align":"center"}}]},{"type":"ScaleButton","props":{"y":348,"x":147,"skin":"common/sbtn_true.png","label":"","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":0,"width":172,"text":"领取","strokeColor":"#f67539","stroke":2,"height":36,"fontSize":28,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":20,"x":87,"skin":"shop/t5.png"}}]}]},{"type":"Box","props":{"y":177,"x":75,"var":"box_3"},"child":[{"type":"Box","props":{"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":56,"x":109,"skin":"shop/icon_coin.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":102,"x":8,"width":198,"text":"微信号:215443","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"宝宝代理充值","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"x":223,"width":215,"height":206},"child":[{"type":"Image","props":{"skin":"shop/bg_leimu.png"}},{"type":"Image","props":{"y":62,"x":112,"skin":"shop/icon_coin.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":104,"x":10,"width":191,"text":"微信号:48674","strokeColor":"#a1720f","stroke":1,"height":30,"fontSize":24,"color":"#e79c17","align":"center"}},{"type":"ScaleButton","props":{"y":167,"x":107,"width":150,"skin":"common/sbtn_cancel.png","label":"","height":59,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":14,"x":10,"width":129,"text":"财神代理充值","strokeColor":"#93ee68","stroke":1,"height":30,"fontSize":20,"color":"#ffffff","align":"center"}}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.shop.ShopUI.uiView);

        }

    }
}

module ui.ssc {
    export class SscUI extends View {
		public box_mask:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ssc.SscUI.uiView);

        }

    }
}

module ui.vip {
    export class VipUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public box_bg:Laya.Box;
		public btn_close:component.ScaleButton;
		public list_bar:Laya.List;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":640,"width":1280,"height":720,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":350,"x":641,"width":1041,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-25,"x":-281,"var":"box_bg"},"child":[{"type":"Image","props":{"y":44,"x":281,"skin":"common/img1.png"}},{"type":"Image","props":{"y":118,"x":295,"width":1010,"skin":"common/img2.png","height":523}},{"type":"Image","props":{"y":37,"x":597,"skin":"common/title.png"}},{"type":"Image","props":{"y":51,"x":708,"skin":"vip/t_vip.png"}},{"type":"ScaleButton","props":{"y":57,"x":1312,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":140,"x":326,"width":955,"skin":"common/img_di.png","sizeGrid":"35,34,30,30","height":392}}]},{"type":"List","props":{"y":471,"x":19,"width":996,"var":"list_bar","renderType":"render","height":142}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);

            super.createChildren();
            this.createView(ui.vip.VipUI.uiView);

        }

    }
}

module ui.vip {
    export class VipBarUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":4550,"height":146},"child":[{"type":"Box","props":{"y":32,"x":0,"width":4550,"height":82},"child":[{"type":"ProgressBar","props":{"y":19,"x":51,"width":4436,"skin":"vip/progress.png","height":30,"sizeGrid":"-1,33,0,10"}},{"type":"Box","props":{"y":29,"x":50,"width":124,"height":117,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":123,"x":64,"skin":"vip/light1.png","anchorY":1,"anchorX":0.5}},{"type":"Image","props":{"y":49,"x":64,"width":55,"skin":"vip/img_jiantou.png","height":49,"anchorY":1,"anchorX":0.5}}]},{"type":"Box","props":{},"child":[{"type":"Image","props":{"skin":"vip/img_v0_1.png"}},{"type":"Image","props":{"skin":"vip/img_v0_2.png"}},{"type":"Image","props":{"skin":"vip/img_v0_3.png"}}]},{"type":"Box","props":{"x":219},"child":[{"type":"Image","props":{"skin":"vip/img_v1_1.png"}},{"type":"Image","props":{"skin":"vip/img_v1_2.png"}},{"type":"Image","props":{"skin":"vip/img_v1_3.png"}}]},{"type":"Box","props":{"x":439},"child":[{"type":"Image","props":{"skin":"vip/img_v2_1.png"}},{"type":"Image","props":{"skin":"vip/img_v2_2.png"}},{"type":"Image","props":{"skin":"vip/img_v2_3.png"}}]},{"type":"Box","props":{"x":658},"child":[{"type":"Image","props":{"skin":"vip/img_v3_1.png"}},{"type":"Image","props":{"skin":"vip/img_v3_2.png"}},{"type":"Image","props":{"skin":"vip/img_v3_3.png"}}]},{"type":"Box","props":{"x":877},"child":[{"type":"Image","props":{"skin":"vip/img_v4_1.png"}},{"type":"Image","props":{"skin":"vip/img_v4_2.png"}},{"type":"Image","props":{"skin":"vip/img_v4_3.png"}}]},{"type":"Box","props":{"x":1097},"child":[{"type":"Image","props":{"skin":"vip/img_v5_1.png"}},{"type":"Image","props":{"skin":"vip/img_v5_2.png"}},{"type":"Image","props":{"skin":"vip/img_v5_3.png"}}]},{"type":"Box","props":{"x":1316},"child":[{"type":"Image","props":{"skin":"vip/img_v6_1.png"}},{"type":"Image","props":{"skin":"vip/img_v6_2.png"}},{"type":"Image","props":{"skin":"vip/img_v6_3.png"}}]},{"type":"Box","props":{"x":1536},"child":[{"type":"Image","props":{"skin":"vip/img_v7_1.png"}},{"type":"Image","props":{"skin":"vip/img_v7_2.png"}},{"type":"Image","props":{"skin":"vip/img_v7_3.png"}}]},{"type":"Box","props":{"x":1755},"child":[{"type":"Image","props":{"skin":"vip/img_v8_1.png"}},{"type":"Image","props":{"skin":"vip/img_v8_2.png"}},{"type":"Image","props":{"skin":"vip/img_v8_3.png"}}]},{"type":"Box","props":{"x":1974},"child":[{"type":"Image","props":{"skin":"vip/img_v9_1.png"}},{"type":"Image","props":{"skin":"vip/img_v9_2.png"}},{"type":"Image","props":{"skin":"vip/img_v9_3.png"}}]},{"type":"Box","props":{"x":2194},"child":[{"type":"Image","props":{"skin":"vip/img_v10_1.png"}},{"type":"Image","props":{"skin":"vip/img_v10_2.png"}},{"type":"Image","props":{"skin":"vip/img_v10_3.png"}}]},{"type":"Box","props":{"x":2413},"child":[{"type":"Image","props":{"skin":"vip/img_v11_1.png"}},{"type":"Image","props":{"skin":"vip/img_v11_2.png"}},{"type":"Image","props":{"skin":"vip/img_v11_3.png"}}]},{"type":"Box","props":{"x":2632},"child":[{"type":"Image","props":{"skin":"vip/img_v12_1.png"}},{"type":"Image","props":{"skin":"vip/img_v12_2.png"}},{"type":"Image","props":{"skin":"vip/img_v12_3.png"}}]},{"type":"Box","props":{"x":2852},"child":[{"type":"Image","props":{"skin":"vip/img_v13_1.png"}},{"type":"Image","props":{"skin":"vip/img_v13_2.png"}},{"type":"Image","props":{"skin":"vip/img_v13_3.png"}}]},{"type":"Box","props":{"x":3071},"child":[{"type":"Image","props":{"skin":"vip/img_v14_1.png"}},{"type":"Image","props":{"skin":"vip/img_v14_2.png"}},{"type":"Image","props":{"skin":"vip/img_v14_3.png"}}]},{"type":"Box","props":{"x":3291},"child":[{"type":"Image","props":{"skin":"vip/img_v15_1.png"}},{"type":"Image","props":{"skin":"vip/img_v15_2.png"}},{"type":"Image","props":{"skin":"vip/img_v15_3.png"}}]},{"type":"Box","props":{"x":3510},"child":[{"type":"Image","props":{"skin":"vip/img_v16_1.png"}},{"type":"Image","props":{"skin":"vip/img_v16_2.png"}},{"type":"Image","props":{"skin":"vip/img_v16_3.png"}}]},{"type":"Box","props":{"x":3729},"child":[{"type":"Image","props":{"skin":"vip/img_v17_1.png"}},{"type":"Image","props":{"skin":"vip/img_v17_2.png"}},{"type":"Image","props":{"skin":"vip/img_v17_3.png"}}]},{"type":"Box","props":{"y":0,"x":3949},"child":[{"type":"Image","props":{"skin":"vip/img_v18_1.png"}},{"type":"Image","props":{"skin":"vip/img_v18_2.png"}},{"type":"Image","props":{"skin":"vip/img_v18_3.png"}}]},{"type":"Box","props":{"y":0,"x":4168},"child":[{"type":"Image","props":{"skin":"vip/img_v19_1.png"}},{"type":"Image","props":{"skin":"vip/img_v19_2.png"}},{"type":"Image","props":{"skin":"vip/img_v19_3.png"}}]},{"type":"Box","props":{"y":0,"x":4434},"child":[{"type":"Image","props":{"skin":"vip/img_v20_1.png"}},{"type":"Image","props":{"skin":"vip/img_v20_2.png"}},{"type":"Image","props":{"skin":"vip/img_v20_3.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.vip.VipBarUI.uiView);

        }

    }
}

module ui.welfare {
    export class WelfareUI extends View {
		public box_mask:Laya.Box;
		public box_body:Laya.Box;
		public img_bg:Laya.Image;
		public btn_close:component.ScaleButton;
		public box_tabs:Laya.Box;
		public btn_tab_0:Laya.Button;
		public btn_tab_1:Laya.Button;
		public btn_tab_2:Laya.Button;
		public box_0:Laya.Box;
		public box_circle:Laya.Box;
		public box_1:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":-160,"var":"box_mask"},"child":[{"type":"Image","props":{"width":1600,"skin":"comp/blank.png","sizeGrid":"3,4,3,3","mouseThrough":false,"mouseEnabled":true,"height":720}}]},{"type":"Box","props":{"y":360,"x":640,"width":1041,"var":"box_body","height":650,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-3,"x":0,"var":"img_bg","skin":"zzzzzzz/外围/board_fuli.png"}},{"type":"ScaleButton","props":{"y":114,"x":891,"var":"btn_close","skin":"common/sbtn_close.png","label":"","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":279,"x":864,"var":"box_tabs"},"child":[{"type":"Button","props":{"stateNum":1,"skin":"welfare/btn_qiandao1.png"}},{"type":"Button","props":{"y":95,"stateNum":1,"skin":"welfare/btn_yueka1.png"}},{"type":"Button","props":{"y":189,"stateNum":1,"skin":"welfare/btn_moneytree1.png"}},{"type":"Button","props":{"var":"btn_tab_0","stateNum":1,"skin":"welfare/btn_qiandao2.png"}},{"type":"Button","props":{"y":95,"var":"btn_tab_1","stateNum":1,"skin":"welfare/btn_yueka2.png"}},{"type":"Button","props":{"y":189,"var":"btn_tab_2","stateNum":1,"skin":"welfare/btn_moneytree2.png"}}]},{"type":"Box","props":{"y":146,"x":165,"var":"box_0"},"child":[{"type":"Box","props":{"width":380,"var":"box_circle","height":380},"child":[{"type":"Box","props":{"y":55,"x":55,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":55,"x":143,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":55,"x":234,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":55,"x":324,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":145,"x":324,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":235,"x":324,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":325,"x":324,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":325,"x":233,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":325,"x":142,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":325,"x":55,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":235,"x":55,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Box","props":{"y":145,"x":55,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"welfare/img_jb.png"}},{"type":"Image","props":{"y":24,"x":22,"skin":"welfare/img_jb1.png"}},{"type":"Text","props":{"y":72,"x":23,"width":62,"text":"1000","height":17,"fontSize":18,"color":"#a2470d","align":"center"}}]},{"type":"Image","props":{"y":52,"x":54,"skin":"welfare/img_buling.png","anchorY":0.5,"anchorX":0.5}},{"type":"ScaleButton","props":{"y":187,"x":189,"skin":"welfare/sbtn_play.png","label":"","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":68,"x":400,"width":268,"skin":"welfare/bg_qiandao.png","height":248,"sizeGrid":"23,19,36,20"}},{"type":"Image","props":{"y":20,"x":436,"skin":"welfare/t_daily.png"}}]},{"type":"Box","props":{"y":192,"x":119,"var":"box_1"},"child":[{"type":"Box","props":{"width":229,"height":288},"child":[{"type":"Image","props":{"y":56,"skin":"welfare/img_box2.png"}},{"type":"Image","props":{"y":86,"x":21,"skin":"welfare/img_baiyin.png"}},{"type":"Image","props":{"x":11,"skin":"welfare/img_box1.png"}},{"type":"Text","props":{"y":206,"x":51,"width":121,"text":"每天可领取","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"Text","props":{"y":235,"x":51,"width":121,"text":"5000~10万","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"Text","props":{"y":157,"x":51,"width":121,"text":"剩余25天","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"ScaleButton","props":{"y":172,"x":114,"width":98,"skin":"common/sbtn_true.png","label":"","height":41,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":8,"x":17,"skin":"welfare/t_buy.png"}}]}]},{"type":"Box","props":{"x":250,"width":229,"height":288},"child":[{"type":"Image","props":{"y":56,"skin":"welfare/img_box2.png"}},{"type":"Image","props":{"y":86,"x":21,"skin":"welfare/img_huangjin.png"}},{"type":"Image","props":{"x":11,"skin":"welfare/img_box1.png"}},{"type":"Text","props":{"y":206,"x":51,"width":121,"text":"每天可领取","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"Text","props":{"y":235,"x":51,"width":121,"text":"5000~10万","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"Text","props":{"y":157,"x":51,"width":121,"text":"剩余25天","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"ScaleButton","props":{"y":172,"x":114,"width":98,"skin":"common/sbtn_true.png","label":"","height":41,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":8,"x":17,"skin":"welfare/t_buy.png"}}]}]},{"type":"Box","props":{"x":499,"width":229,"height":288},"child":[{"type":"Image","props":{"y":56,"skin":"welfare/img_box2.png"}},{"type":"Image","props":{"y":86,"x":21,"skin":"welfare/img_zhizun.png"}},{"type":"Image","props":{"x":11,"skin":"welfare/img_box1.png"}},{"type":"Text","props":{"y":206,"x":51,"width":121,"text":"每天可领取","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"Text","props":{"y":235,"x":51,"width":121,"text":"5000~10万","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"Text","props":{"y":157,"x":51,"width":121,"text":"剩余25天","height":25,"fontSize":20,"color":"#747a85","align":"center"}},{"type":"ScaleButton","props":{"y":172,"x":114,"width":98,"skin":"common/sbtn_true.png","label":"","height":41,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":8,"x":17,"skin":"welfare/t_buy.png"}}]}]},{"type":"ScaleButton","props":{"y":334,"x":366,"width":173,"skin":"common/sbtn_true.png","label":"","height":67,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":23,"skin":"welfare/t_lingqu.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ScaleButton",component.ScaleButton);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.welfare.WelfareUI.uiView);

        }

    }
}

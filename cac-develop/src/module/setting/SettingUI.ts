module setting{
    export class SettingUI extends BaseUI{
        private _currUI:ui.setting.SettingUI;

        constructor(){
            super();
            this._currUI=new ui.setting.SettingUI();
            this.setUI("SettingUI",this._currUI,this);
        }

        /**
         * 每次展示面板时调用
         * @param args 
         */
        public update(...args):void{
            super.update();
        }

        /**添加监听 */
        public addEvent():void{
            this._currUI.btn_close.on(Laya.Event.CLICK,this,this._close);
            this._currUI.hslider_music.on(Laya.Event.CHANGE,this,this._changeMusic);
            this._currUI.hslider_voice.on(Laya.Event.CHANGE,this,this._changeVoice);
        }

        /**移除监听 */
        public removeEvent():void{
            this._currUI.btn_close.off(Laya.Event.CLICK,this,this._close);
            this._currUI.hslider_music.off(Laya.Event.CHANGE,this,this._changeMusic);
            this._currUI.hslider_voice.off(Laya.Event.CHANGE,this,this._changeVoice);
        }

        //设置音乐大小
        private _changeMusic():void{
            this._currUI.progress_music.value=this._currUI.hslider_music.value/100;
        }

        //设置音效大小
        private _changeVoice():void{
            this._currUI.progress_voice.value=this._currUI.hslider_voice.value/100;
        }

        //关闭面板
        private _close():void{
            GUI.removeUI("setting.SettingUI");
        }

        /**
         * 移除面板
         */
        public remove():void{
            super.remove();
        }
    }
}
/**UI管理类 */
class GUI{
    private static _layArr:string[]=["root","bg","scene","mask","gui","sceneTop","guiMask","top","pop","topPop"];
    private static _dicAllUI:Laya.Dictionary;   //所有注册的(实例化的UI)
    private static _dicShowUI:Laya.Dictionary;  //当前显示中的UI=>key:ui名称,value:{instance:ui实例,layName:层级名称}
    private static _dicLays:Laya.Dictionary;    //层级
    private static _protectLayIndexMax:number=3;//最大保护层级(即小于此层级则该层级上的UI不能通过showUI方法的all参数集体移除,必须根据具体名称移除)
    private static _dicUI:Laya.Dictionary;      //存储所有被实例化的UI界面对象引用
    

    /**初始化UI管理 */
    public static init():void{
        GUI._dicAllUI=new Laya.Dictionary();
        GUI._dicShowUI=new Laya.Dictionary();
        GUI._dicLays=new Laya.Dictionary();
        GUI._dicUI=new Laya.Dictionary();
        //设置层级
        for(let i=0;i<GUI._layArr.length;i++){
            var lay:Laya.Sprite=new Laya.Sprite();
            Laya.stage.addChild(lay);
            GUI._dicLays.set(GUI._layArr[i],lay);
        }
    }

    /**注册UI
     * data:{clsType:LoginUI,instance:null}
     * (key:UI名,value:实例BaseUI)
     */
    public static regUI(uName:string,data:any):void{
        var uiInfo:any=GUI._dicAllUI.get(uName);
        if(!uiInfo){
            var Cls:any=data.clsType;
            data.instance=new Cls();
            GUI._dicAllUI.set(uName,data.instance);
        }else{
            MLog.logW("重复注册UI["+uName+"]");
        }
    }

    /**
     * 注销UI
     * @param uName 
     */
    public static unRegUI(uName:string):void{
        var bUI:BaseUI=GUI._dicAllUI.get(uName);
        if(bUI){
            bUI.dispose();
            GUI._dicAllUI.remove(uName);
        }
    }

    /**
     * 展示UI
     * uName
     * layerName
     * removeUI
     * parames 在update时的参数
     * handle 回调函数
     */
    public static showUI(uName:string,layerName:string,removeUI:string[]=null,parames:any=null,handle:Laya.Handler=null):void{
        //1.移除在展示中的要移除的UI
        if(removeUI && removeUI.length>0){
            if(removeUI[0]=="all" || removeUI[0]=="All" || removeUI[0]=="ALL"){
                //集体移除所有显示中的弹窗
                for(let i=0;i<GUI._dicShowUI.values.length;i++){
                    //根据UI所处的层级名称获取UI所处层级下标
                    var layIndex:number=GUI._layArr.indexOf(GUI._dicShowUI.values[i].layName);
                    //移除权限判断(处于底层层级的UI不允许被集体移除)
                    if(layIndex>=GUI._protectLayIndexMax){
                        GUI.removeUI(GUI._dicShowUI.keys[i]);
                    }else{
                        MLog.logW("UI["+GUI._dicShowUI.keys[i]+"]存在于底层层级无权通过showUI方法的all参数集体移除,必须根据具体名称移除");
                    }
                }
            }else{
                for(let i=0;i<removeUI.length;i++){
                    GUI.removeUI(removeUI[i]);
                }
            }
        }
        //2.确定层级
        var lay:Laya.Sprite=GUI._dicLays.get(layerName);
        if(lay){
            //3.添加要展示的UI到对应层级
            var currUI=GUI._dicAllUI.get(uName);
            if(currUI){
                //在指定层上显示UI
                currUI.show(lay);
                currUI.update(parames);
                //将UI存入显示池 key:ui名称,value:{instance:ui实例,layName:层级名称}
                var uiInfo:any={instance:currUI,layName:layerName};
                GUI._dicShowUI.set(uName,uiInfo);
                //4.执行回调
                if(handle){
                    handle.run();
                }
            }else{
                MLog.logE("["+uName+"]还未注册");
            }
        }else{
            MLog.logE("["+uName+"]找不到层级["+layerName+"]安放");
        }
    }


    //通过名称找到层级
    
    public static getLayByName(layName: string): Laya.Sprite {
        var lay:Laya.Sprite=GUI._dicLays.get(layName);
        if(lay){
            return lay;
        }
        else  console.log(`找不到层级名字为${layName}的层级`);
        
    }

        

    /**移除UI */
    public static removeUI(uName:string,handle:Laya.Handler=null):void{
        var rmUI=GUI._dicShowUI.get(uName);
        if(rmUI){
            rmUI.instance.remove();
            //从现实池移除
            GUI._dicShowUI.remove(uName);
            //执行回调
            if(handle){
                handle.run();
            }
        }else{
            MLog.logW("UI["+uName+"]并未展示,不需要移除");
        }
    }


    /**
     * 存储所有UI对象的引用
     * @param key 
     * @param vlue 
     */
    public static setUI(key:string,value:any):void{
        GUI._dicUI.set(key,value);
    }

    /**
     * 根据UI名称获取ui引用
     * @param uName 
     */
    public static getUIByName(uName:string):any{
        var ui:any=GUI._dicUI.get(uName);
        if(!ui){
            MLog.logW("取不到["+uName+"]所对应的UI");
        }
        return ui;
    }
}
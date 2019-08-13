declare module wx {
    function getSetting(any) //获取用户当前的授权处理信息。
    function authorize(any); //提前发起授权获得用户同意
    function getUserInfo(any); //获取玩家账号信息  无需用户授权 该接口只在开放数据域下可用
    function login(any);    //登陆  返回一个code   服务器利用这个code换取OpenID和session_key
    function openSetting(any) //调起设置界面

    function onShareAppMessage(any)//监听用户点击右上角菜单的“转发”按钮时触发的事件
    function showShareMenu(any) //显示当前页面的转发按钮
    function shareAppMessage(any) //主动拉起转发，进入选择通讯录界面。

    function showModal(any); //显示模态对话框
}

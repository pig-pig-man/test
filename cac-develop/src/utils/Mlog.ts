/**调试输出 */
class MLog{
    /**打印信息 */
    public static logI(message?: any, ...optionalParams: any[]):void{
        console.log("I:",message,...optionalParams);
    }

    /**打印错误 */
    public static logE(message?: any, ...optionalParams: any[]):void{
        console.log("E:",message,...optionalParams);
    }

    /**打印警告 */
    public static logW(message?: any, ...optionalParams: any[]):void{
        console.log("W:",message,...optionalParams);
    }

    /**打印调试 */
    public static logD(message?: any, ...optionalParams: any[]):void{
        console.log("D:",message,...optionalParams);
    }
}
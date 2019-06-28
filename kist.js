//自己的一个工具类
function Kist(){
    //获取随机数字的方法
    this.random = function(n,m){
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
}
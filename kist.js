//获取随机数字的方法
Kist.prototype.random = function(n,m){
    return Math.floor(Math.random() * (m - n + 1) + n);
}

/**
 * ajax两种方式的封装
 * 参数：对象形式：type url data callback
 * @param {type} 可选可不选，默认方式为get
 * @param {url} 路径
 * @param {data} 地址栏后的数据，键值对的形式
 * @param {callback} 获取到数据后进行判断后的回调函数
 */
Kist.prototype.ajax = function(options) {
    options = options || {};
    options.type = options.type || 'get';
    options.url = options.url || '';
    options.callback = options.callback || function(res){
        // console.log(res);
    }
    let xhr = new XMLHttpRequest();
    if(options.type === 'get'){
        options.url += '?' + options.data; 
    }
    xhr.open(options.type, options.url);
    if (options.type === 'post') {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(options.data);
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            // console.log(res);
            options.callback(res);
        }
    }
}

//自己的一个工具类
function Kist(){
    
}
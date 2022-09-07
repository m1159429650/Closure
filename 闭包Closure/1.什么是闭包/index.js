// 闭包：就是能够读取其他函数内部变量，的函数。
    function f1(){
        var a = 100;
        function f2(){
            return a;
        }
        return f2();
    }
    // // 把f2()执行的结果当成f1()返回值，返回值是函数执行的结果。
    var res = f1();
    console.log(res);

    function f1(){
        var a = 100;
        function f2(){
            return a;
        }
        // 返回f2本身，返回值是函数
        return f2;
    }
    var res = f1();
    console.log(res());

    // var res = f1(); var res = function f2(){}; var res = f2(); var res = 100
    // 第一个小括号代表调用外层函数f1，第二个小括号代表调用内层函数f2
    var res = f1()();
    console.log(res);

    // 把一个变量设置成null，就是告诉GO此变量不再使用，回收变量。
    // onbeforeunload : 刷新或关闭页面时执行。
    window.onbeforeunload = function(){
        res = null;
        console.log(res);
    }
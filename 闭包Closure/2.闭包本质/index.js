
//基本变量的值一般都是存在栈内存中，而对象类型的变量的值存储在堆内存中
//，栈内存存储对应空间地址。
//基本的数据类型: Number 、Boolean、Undefined、String、Null。 
function outer() {
     var a = '变量1'
     var inner = function () {
     console.info(a)
     }
     return inner // inner 就是一个闭包函数，因为他能够访问到outer函数的作用域
 }

 //！！！ 坑点：

 /*
  坑点1： 引用的变量可能发生变化
       ：用闭包模仿块级作用域
        es6没出来之前，用var定义变量存在变量提升问题
 */
 function outer() {
    var result = [];
    for (var i = 0; i<10; i++){
      result[i] = function () {
          console.info(i)
      }
   }
   return result
}



//坑点2: this指向问题
var object = {
    name: "object",
    getName: function() {
       return function() {
            console.info(this.name)
       }
   }
}
object.getName()()    // undefined
// 因为里面的闭包函数是在window作用域下执行的，也就是说，this指向windows


//坑点3：内存泄露问题
function  showId() {
    var el = document.getElementById("app")
    el.onclick = function(){
      alert(el.id)   // 这样会导致闭包引用外层的el，当执行完showId后，el无法释放
    }
}

// 改成下面
function  showId() {
    var el = document.getElementById("app")
    var id  = el.id
    el.onclick = function(){
      alert(id)   // 这样会导致闭包引用外层的el，当执行完showId后，el无法释放
    }
    el = null    // 主动释放el
}
## 闭包的使用

- 读万卷书，不如行万里路。
根据闭包的这些特点，使得它有了了广泛地应用空间，下面就一个经典的案来深入的了解闭包
```
let btns = document . querySelectorA1l( ' button' );
    for(vari=0;i<5;i++){
     btns[i].onclick = function () {
       console.log(i+1);
}
```
这个案例要达到的效果是点击浏览器中的五个按钮可以在控制台打印对应的序号，
首先我们看这段代码，这并不是一个闭包的形式
## 运行这段代码执行结果是：点击任何一个按钮都只会输出6。为什么呢？
因为内部的匿名函数需要通过点击事件触发执行，
当浏览器运行的时候，for循环立马就会将循环执行完毕,当我们点击触发事件的时候，
内部的函数就需要输出i+1,但是内部没有定义的变量i，所以它就会按照作用域链就近取得外部的全局变量i,
然后我们结果就会都是6.

通过修改上面的代码我们就可以实现想要的效果，这里就使用了闭包。

let btns = document . querySelectorAll( ' buttor
for(vari=0;i<5;i++){
btns[i]. onclick = (function (i) {
return function () {
console.log(i + 1);
)(i)
}


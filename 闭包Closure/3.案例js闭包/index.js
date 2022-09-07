
// 闭包用法：经典案例  事件点击监听

// 学习一样技能，最终是想把它投入运用。我们从JS函数的最基础用法，一直研究到作用域链、闭包，这个过程消耗了我们大量的心血，那么闭包到底能用在哪些场景里面呢？下面将使用逐个枚举的方式给出运用闭包的典型战例。

// 请注意，以下的例子都是应用闭包的典型场景，当然如果你愿意，也可以把它叫做“代码模式”。深入理解，甚至记住这些场景，将会让你的闭包技法如有神助。

// 获取Table中被点击的行

//会只输出最后一个值 ：6；
// let btns = document . querySelectorA1l( ' button' );
    for(vari=0;i<5;i++){
     btns[i].onclick = function () {
       console.log(i+1);
}
}

/*
使用闭包：
 let btns = document . querySelectorAll( ' button')
for(vari=0;i<5;i++){
 btns[i]. onclick = (function(i){
  return function () {
 console.log(i + 1);
}});
*/ 


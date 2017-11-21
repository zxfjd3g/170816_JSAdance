// 使用函数定义模块
function myModule () {
  // 私有的数据
  var data = 'atguigu'

  // 私有的操作数据的行为
  function doSomething() {
    console.log('doSomething()', data)
  }

  function doOtherthing() {
    console.log('doOtherthing()', data)
  }

  // 向外暴露一些行为
  // return doSomething  //一个行为
  return {  // 多个行为
    doSomething,
    doOtherthing
  }
}
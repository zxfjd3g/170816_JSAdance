(function (window) {
  // 私有的数据
  var data = 'xfzhang'

  // 私有的操作数据的行为
  function doSomething() {
    console.log('doSomething()', data)
  }

  function doOtherthing() {
    console.log('doOtherthing()', data)
  }

  // 向外暴露多个行为
  window.module = {
    doSomething,
    doOtherthing
  }
})(window)
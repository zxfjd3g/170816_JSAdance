/*
在分线程执行的js
 */

function fibonacci(number) {
  return number<=2 ? 1 : fibonacci(number-1) + fibonacci(number-2)
}

console.log(this)
// alert('分线程执行了')

var onmessage = function (event) {
  // 1. 分线程接收主线程发送的消息(数据)
  const number = event.data
  console.log('分线程接收主线程发送的消息', number)
  //  2. 处理数据
  const result = fibonacci(number)
  // 3. 分线程向主线程返回消息(数据)
  postMessage(result)
  console.log('分线程向主线程返回消息', result)
}

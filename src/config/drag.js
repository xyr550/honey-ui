// 使用app.directive()定义一个全局指令
// 参数一：指令的名称，定义时指令前面不需要写v-
// 参数二：是一个对象，该对象中有相关的操作函数
// 在调用的时候必须写v-
const drag = (app, options) => {
  app.directive('drag', {
    // 渲染完毕
    mounted(el, binding) {
      // binding.arg
      // binding.value
      // 可视窗口的宽度
      const { clientWidth } = document.documentElement
      // 可视窗口的高度
      const { clientHeight } = document.documentElement
      // 记录坐标
      const domSet = {
        x: clientWidth / 3, // 默认width 50%
        y: (clientHeight * 15) / 100 // 根据 15vh 计算
      }

      // 弹窗的容器
      const domDrag = el.firstElementChild.firstElementChild
      // 重新设置上、左距离
      domDrag.style.marginTop = `${domSet.y}px`
      domDrag.style.marginLeft = `${domSet.x}px`

      // 记录拖拽开始的光标坐标，0 表示没有拖拽
      const start = { x: 0, y: 0 }
      // 移动中记录偏移量
      const move = { x: 0, y: 0 }

      // 鼠标按下，开始拖拽
      domDrag.onmousedown = (e) => {
        // 判断对话框是否重新打开
        if (domDrag.style.marginTop === '15vh') {
          // 重新打开，设置 domSet.y  top
          domSet.y = (clientHeight * 15) / 100
        }
        start.x = e.clientX
        start.y = e.clientY
        domDrag.style.cursor = 'move' // 改变光标形状
      }

      // 鼠标移动，实时跟踪
      domDrag.onmousemove = (e) => {
        if (start.x === 0) { // 不是拖拽状态
          return
        }
        move.x = e.clientX - start.x
        move.y = e.clientY - start.y

        // 初始位置 + 拖拽距离
        domDrag.style.marginLeft = `${domSet.x + move.x}px`
        domDrag.style.marginTop = `${domSet.y + move.y}px`
      }
      // 鼠标抬起，结束拖拽
      domDrag.onmouseup = (e) => {
        move.x = e.clientX - start.x
        move.y = e.clientY - start.y

        // 记录新坐标，作为下次拖拽的初始位置
        domSet.x += move.x
        domSet.y += move.y
        domDrag.style.cursor = '' // 恢复光标形状
        domDrag.style.marginLeft = `${domSet.x}px`
        domDrag.style.marginTop = `${domSet.y}px`
        // 结束拖拽
        start.x = 0
      }
    }
  })
}

export default drag

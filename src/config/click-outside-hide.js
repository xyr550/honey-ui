const clickOutsideHide = (app) => {
  // 点击文本框，目标元素显示变不显示，不显示变显示
  // 点击文本框外部，目标元素变为不显示
  // vm实例上必须有isVisible属性
  app.directive('click-outside-hide', {
    beforeMount(el, binding) {
      // vue3 通过binding访问组件实例
      const vm = binding.instance
      const handler = (e) => {
        if (el.contains(e.target)) {
          // 如果点击的文本框
          vm.isVisible = !vm.isVisible
        } else if (vm.isVisible) {
          vm.isVisible = false
        }
      }
      const ell = el
      ell.handler = handler
      // 将事件处理函数保存到el上，即指令所在DOM上，方便解绑移除事件处理函数
      document.addEventListener('click', handler)
    },
    unmounted(el) {
      document.removeEventListener('click', el.handler)
    }
  })
}
export default clickOutsideHide

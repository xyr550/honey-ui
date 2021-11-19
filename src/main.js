import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/fonts/iconfont.css'
import drag from './config/drag'
import HoButton from './components/button.vue'
import HoDialog from './components/dialog.vue'

const app = createApp(App)

// 全局注册组件, vue3只能在示例上注册
app.component('HoButton', HoButton)
app.component('HoDialog', HoDialog)
// Vue.component(HoButton.name, HoButton)
app.use(drag) // 对话框的拖拽

app.mount('#app')

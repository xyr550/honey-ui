import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/fonts/iconfont.css'
import HoButton from './components/button.vue'
import HoDialog from './components/dialog.vue'
import HoBar from './components/bar.vue'
import HoInput from './components/input.vue'
import pictureViewer from './components/picture-viewer.vue'

const app = createApp(App)

// 全局注册组件, vue3只能在示例上注册
app.component('HoButton', HoButton)
app.component('HoDialog', HoDialog)
app.component('HoBar', HoBar)
app.component('HoInput', HoInput)
app.component('pictureViewer', pictureViewer)
// Vue.component(HoButton.name, HoButton)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/fonts/iconfont.css'
import HoButton from './components/button.vue'
import HoDialog from './components/dialog.vue'
import HoBar from './components/bar.vue'
import HoInput from './components/input.vue'
import HoSwitch from './components/switch.vue'
import HoRadio from './components/radio.vue'
import HoRadioGroup from './components/radio-group.vue'
import HoCheckbox from './components/checkbox.vue'
import HoCheckboxGroup from './components/checkbox-group.vue'
import HoForm from './components/form.vue'
import HoFormItem from './components/form-item.vue';
import HoCalendar from './components/calendar.vue';
import pictureViewer from './components/picture-viewer.vue'
import HoPagingBar from './components/paging-bar.vue'
import HoPagination from './components/pagination.vue'

const app = createApp(App)

// 全局注册组件, vue3只能在示例上注册
app.component('HoButton', HoButton)
app.component('HoDialog', HoDialog)
app.component('HoBar', HoBar)
app.component('HoInput', HoInput)
app.component('HoSwitch', HoSwitch)
app.component('HoRadio', HoRadio)
app.component('HoRadioGroup', HoRadioGroup)
app.component('HoCheckbox', HoCheckbox)
app.component('HoCheckboxGroup', HoCheckboxGroup)
app.component('HoForm', HoForm)
app.component('HoFormItem', HoFormItem)
app.component('HoCalendar', HoCalendar)
app.component('pictureViewer', pictureViewer)
app.component('HoPagingBar', HoPagingBar)
app.component('HoPagination', HoPagination)
// Vue.component(HoButton.name, HoButton)

app.mount('#app')

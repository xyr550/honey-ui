import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/fonts/iconfont.css'
import HoButton from './components/button.vue'
import HoDialog from './components/dialog.vue'
import HoInput from './components/editor/input.vue'
import HoSwitch from './components/selection/switch.vue'
import HoRadio from './components/selection/radio.vue'
import HoRadioGroup from './components/selection/radio-group.vue'
import HoCheckbox from './components/selection/checkbox.vue'
import HoCheckboxGroup from './components/selection/checkbox-group.vue'
import HoForm from './components/form/form.vue'
import HoFormItem from './components/form/form-item.vue';
import HoCalendar from './components/editor/calendar.vue';
import pictureViewer from './components/picture-viewer.vue'
import HoPagingBar from './components/pages/paging-bar.vue'
import HoPagination from './components/pages/pagination.vue'
import HoSelect from './components/editor/select.vue'
import HoTable from './components/table/table.vue'
import HoContainer from './components/base/ho-container.vue'
import HoMain from './components/base/ho-main.vue'
import HoHeader from './components/base/ho-header.vue'
import HoFooter from './components/base/ho-footer.vue'
import HoAside from './components/base/ho-aside.vue'
import EmptyPanel from './components/base/empty-panel.vue'

import clickOutsideHide from './config/click-outside-hide'

const app = createApp(App)
app.use(clickOutsideHide)

// 全局注册组件, vue3只能在示例上注册
app.component('HoButton', HoButton)
app.component('HoDialog', HoDialog)
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
app.component('HoSelect', HoSelect)
app.component('HoTable', HoTable)
app.component('HoContainer', HoContainer)
app.component('HoHeader', HoHeader)
app.component('HoMain', HoMain)
app.component('HoFooter', HoFooter)
app.component('HoAside', HoAside)
app.component('EmptyPanel', EmptyPanel)
// Vue.component(HoButton.name, HoButton)

app.mount('#app')

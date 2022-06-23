<template>
  <div style="margin-top:80px;">
    <label style="color:#4B0082;margin-right:30px">
      editor 示例
    </label>
    <ho-select
      v-model="user"
      :options="options"
      :fileds="{label:'name', value:'value'}" />
    <ho-select
      style="margin-top:10px"
      v-model="user"
      :options="options"
      clearable
      width="200px"
      :fileds="{label:'name', value:'value'}" />
    <ho-select
      style="margin-top:10px"
      placeholder="请选择名称"
      v-model="test2"
      :options="options2"
      clearable
      width="200px" />
    <ho-select
      style="margin-top:10px"
      placeholder="请选择名称"
      v-model="test3"
      :options="options2"
      :multiple="true"
      clearable
      width="200px" />
    <ho-select
      style="margin-top:10px"
      v-model="users"
      :options="options"
      :multiple="true"
      clearable
      width="200px"
      :fileds="{label:'name', value:'value'}" />
  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const options = [
      { name: 'wwww', value: '1' },
      { name: 'rrrr', value: '2' },
      { name: 'lllllllllll', value: '3' },
      { name: '好的斤斤计较斤斤计较急急急斤斤计较斤斤计较那你空间为大家无偿分配', value: '4' },
      { name: 'rrrr', value: '5' },
      { name: 'rrrr', value: '6' },
      { name: 'rrrr', value: '8' }
    ]
    const options2 = [
      'pinggu', 'wwwww', 'sjxci', 'hhhhh', 'anem', 'oobu', 'lllkiy'
    ]
    const user = ref(null)
    const users = ref([])
    const test2 = ref(undefined)
    const test3 = ref(['pinggu'])
    watch(user, (val) => {
      console.log('user-value', val)
    })
    watch(test2, (val) => {
      console.log('test2-value', val)
    })
    watch(test3.value, (val) => {
      console.log('test3-value', val)
    })
    watch(users.value, (val) => {
      console.log('test3-value', val)
    })
    return {
      options,
      user,
      users,
      options2,
      test2,
      test3
    }
  }
});
</script>

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
    const user = ref(null)
    watch(user, (val) => {
      console.log('user-value', val)
    })
    return {
      options,
      user
    }
  }
});
</script>

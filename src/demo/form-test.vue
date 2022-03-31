<template>
  <!-- switch示例 -->
  <div style="margin-top:80px;">
    <div style="width:400px; margin-top:80px">
      <ho-calendar v-model="form.date" />
    </div>
    <div style="color:#4B0082; margin-top:80px"> form 表单示例 </div>
    <div class="form-box">
      <ho-form :model="form" label-width="100px">
        <ho-form-item label="用户名">
          <ho-input v-model="form.userName"
            placeholder="请输入用户名" clearable />
        </ho-form-item>
        <ho-form-item label="昵称">
          <ho-input v-model="form.rename"
            placeholder="请输入昵称" clearable />
        </ho-form-item>
        <ho-form-item label="预约时间">
          <ho-calendar v-model="form.time" />
        </ho-form-item>
        <ho-form-item label="选择">
          <ho-switch v-model="form.active" />
        </ho-form-item>
        <ho-form-item label="喜欢的水果">
          <ho-radio-group  v-model="form.like">
            <ho-radio label="banana"> 香蕉 </ho-radio>
            <ho-radio label="apple"> 苹果 </ho-radio>
            <ho-radio label="grapes"> 葡萄 </ho-radio>
          </ho-radio-group>
        </ho-form-item>
        <ho-form-item label="最轻松">
          <ho-checkbox-group v-model="form.relation">
            <ho-checkbox
              v-for="item in relations"
              :key="item.value"
              :label="item.value">
              {{ item.label }}
            </ho-checkbox>
          </ho-checkbox-group>
        </ho-form-item>
      </ho-form>
    </div>
  </div>
</template>

<script>
import {
  reactive
} from 'vue'

export default {
  setup() {
    const form = reactive({
      userName: '嫌疑人',
      rename: '1234',
      active: false,
      like: undefined,
      date: '',
      relation: [],
      time: ''
    })
    const relations = [
      { value: 'phone', label: '手机' },
      { value: 'friend', label: '朋友' },
      { value: 'animal', label: '宠物' },
      { value: 'someone', label: '路人' },
      { value: 'family', label: '家人' }
    ]
    return { form, relations }
  }
};
</script>

<style lang="less" scoped>
.form-box {
  margin-top:20px;
  width:600px;
  border: 1px solid rgb(235, 218, 218);
  padding: 20px 20px;
}
</style>

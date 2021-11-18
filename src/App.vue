<template>
  <div class="set-button">
    <div>
      <span style="color:#4B0082; margin-right:20px">普通按钮</span>
      <!-- 普通按钮，通过type调整不同的类型 -->
      <ho-button>test</ho-button>
      <ho-button type="primary">primary</ho-button>
      <ho-button type="danger">danger</ho-button>
      <ho-button type="success">success</ho-button>
      <ho-button type="info">info</ho-button>
      <ho-button type="warning">warning</ho-button>
    </div>
    <div style="margin-top:50px;">
      <span style="color:#4B0082; margin-right:20px">朴素按钮</span>
      <!-- 朴素按钮，中间镂空，通过添加plain属性 -->
      <ho-button plain>test</ho-button>
      <ho-button plain type="primary">button1</ho-button>
      <ho-button plain type="danger">button2</ho-button>
      <ho-button plain type="success">button3</ho-button>
      <ho-button plain type="info">button4</ho-button>
      <ho-button plain type="warning">删除</ho-button>
    </div>
    <div style="margin-top:50px;">
      <span style="color:#4B0082; margin-right:20px">圆角按钮</span>
      <!-- 圆角按钮，通过添加round属性 -->
      <ho-button round>test</ho-button>
      <ho-button round type="primary">button1</ho-button>
      <ho-button round type="danger">button2</ho-button>
      <ho-button round plain type="success">成功</ho-button>
      <ho-button round plain type="info">button4</ho-button>
      <ho-button round plain type="warning">删除</ho-button>
    </div>
    <div style="margin-top:50px;">
      <span style="color:#4B0082; margin-right:20px">圆形按钮</span>
      <!-- 圆形按钮，通过添加circle属性 -->
      <ho-button circle>好</ho-button>
      <ho-button circle type="primary">坏</ho-button>
      <ho-button circle type="danger">都</ho-button>
      <ho-button circle plain type="success">是</ho-button>
      <ho-button circle plain type="info">假</ho-button>
      <ho-button circle plain type="warning">的</ho-button>
    </div>
    <div style="margin-top:50px;">
      <span style="color:#4B0082; margin-right:20px">图标按钮</span>
      <!-- 图标按钮，通过添加icon属性 -->
      <ho-button icon="ho-icon-edit" circle />
      <ho-button icon="ho-icon-favorite" circle type="primary"></ho-button>
      <ho-button icon="ho-icon-search" circle type="danger"></ho-button>
      <ho-button icon="ho-icon-smile" circle plain type="success"></ho-button>
      <ho-button icon="ho-icon-add" circle plain type="info"></ho-button>
      <ho-button icon="ho-icon-dianzan" circle plain type="warning"></ho-button>
      <ho-button icon="ho-icon-ashbin" type="warning">danger</ho-button>
      <ho-button icon="ho-icon-edit" type="success">success</ho-button>
    </div>
    <div style="margin-top:50px;">
      <span style="color:#4B0082; margin-right:20px">点击按钮查看</span>
      <!--  @buttonClick  -->
      <ho-button circle :icon="firstIcon" @buttonClick="setIcon" />
      <ho-button :icon="change ? 'ho-icon-favorite' : ''" type="warning"
        @buttonClick="alertMessage">danger
      </ho-button>
      <ho-button icon="ho-icon-edit" @buttonClick="alertMessage">success</ho-button>
    </div>
    <div style="margin-top:50px;">
      <span style="color:#4B0082; margin-right:20px">禁用按钮</span>
      <!--  通过disabled属性禁用按钮  -->
      <ho-button :disabled="!change" type="danger" round @buttonClick="setIcon">禁用中</ho-button>
      <ho-button disabled circle plain type="warning">的</ho-button>
      <ho-button disabled icon="ho-icon-edit" type="success">success</ho-button>
    </div>

    <!-- dialog示例 -->
    <div style="margin-top:80px;">
      <span style="color:#4B0082; margin-right:20px">Dialog弹窗示例</span>
      <ho-button plain type="primary" @buttonClick="showDialog">点出弹窗
        <i :class="['iconfont', 'ho-icon-fabulous']"></i>
      </ho-button>

      <ho-dialog title="传入一个标题">
         <!-- <template v-slot:title>
          <h3>传入一个标题</h3>
        </template> 使用具名插槽可以直接替换掉dialog中的title -->
      </ho-dialog>
    </div>
  </div>
</template>

<script>
import {
  toRefs, computed, reactive
} from 'vue'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      change: false
    })
    const firstIcon = computed(() => (state.change ? 'ho-icon-edit' : 'ho-icon-favorite'))
    const setIcon = () => {
      state.change = !state.change
    }
    const alertMessage = () => {
      alert('哈哈哈哈')
    }
    const showDialog = () => {
      alert('哈哈哈哈')
    }
    return {
      setIcon, ...toRefs(state), firstIcon, alertMessage, showDialog
    }
  }
};
</script>

<style lang="less" scoped>
 .set-button .ho-button {
  margin-left: 16px;
}
</style>

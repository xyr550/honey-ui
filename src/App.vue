<template>
  <div>
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
  </div>
</template>

<script>
import HoButton from './components/button.vue';

export default {
  name: 'App',
  components: {
    HoButton
  }
};
</script>

<style lang="less" scoped>
.ho-button {
  margin: 8px
}
</style>

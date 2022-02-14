<template>
<div class="box">
  <picture-viewer :src="src" />
</div>
</template>

<script>

export default {
  setup() {
    return {
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  height: 500px;
  width: 500px;
  overflow: hidden
}
</style>

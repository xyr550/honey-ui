<template>
  <div style="margin:80px 0;">
    <span style="color:#4B0082;">基础布局元素及空状态</span>
    <div style="height:400px; width:300px; border:1px solid #DBDBDB">
      <empty-panel
        tipText="暂无数据"
        action="更改搜索条件" />
    </div>
    <ho-container class="test-box">
      <ho-header style="background:#ECF5FF">
        header
      </ho-header>
      <ho-main style="background:#F0FFF0">
        <ho-aside width="200px" style="background:#ADD8E6">
          main >>> aside
        </ho-aside>
      </ho-main>
      <ho-footer style="background:#FFF0F5">
        footer
      </ho-footer>
    </ho-container>

    <ho-v-box class="test-box" size="1">
      <ho-header style="background:#ECF5FF">
        header
      </ho-header>
      <ho-h-box size="1">
        <ho-aside width="100px" style="background:#ADD8E6">
          aside
        </ho-aside>
        <ho-v-box size="1" style="background:#F0FFF0">
          <ho-main> main </ho-main>
            <ho-footer style="background:#FFF0F5"> footer </ho-footer>
        </ho-v-box>
      </ho-h-box>
    </ho-v-box>
  </div>
</template>

<script>
export default {
  setup() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
.test-box {
  height:600px;
  width:40%;
  border: 1px solid #DBDBDB;
  margin-top: 10px;
}
</style>

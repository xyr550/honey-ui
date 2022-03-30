<template>
  <!-- bar示例 -->
  <div style="margin:80px 0;">
      <label style="color:#4B0082;"> 分页示例 </label>
      <ho-paging-bar
        :total="500"
        :page-size="60"
        :page="page"
        @pageChange="pageChange"/>
      <ho-pagination
        :total="508"
        :first-page-size="50"
        @pageSizeChange="pageSizeChange"
        @pageChange="pageChange"/>
      <label class="text"> 想使用自定义选项通过options传递，例:options="[30, 55]"</label><br>
      <label class="text"> first-page-size 定义首次页码大小  </label><br>
      <label class="text"> total 传递总数量  </label><br>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const page = ref(2)
    const pageChange = (pagenow) => {
      console.log('newPage', pagenow)
    }
    const pageSizeChange = (val) => {
      console.log('newPageSize', val)
    }
    return {
      page,
      pageChange,
      pageSizeChange
    }
  }
};
</script>

<style lang="less" scoped>
.text {
  color:blue;
  margin-left:50px
}
</style>

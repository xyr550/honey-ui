<template>
  <ho-container style="height:100%; width:100%;">
    <ho-container direction="vertical" class="iconfont empty-panel ho-icon-nodata">
      <div v-show="showSorry" style="font-size: 24px; font-weight: bold">
        抱歉~
      </div>
      <div style="font-size: 16px; font-weight: bold;">
        {{ tipText }}
      </div>
      <div style="font-size: 14px;">
        <slot>
          <span v-if="action">
            <div>
              建议您 : {{ action }}
            </div>
          </span>

          <strong v-if="handleAction" style="font-size: 16px;">
            {{ handleAction }}
          </strong>
        </slot>
      </div>
    </ho-container>
  </ho-container>
</template>
<script>
export default {
  props: {
    tipText: {
      type: String,
      default: '当前暂无数据'
    },
    showSorry: {
      type: Boolean,
      default: true
    },
    action: {
      type: String,
      default() {
        return ''
      }
    },
    handleAction: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.empty-panel {
  padding: 8px 16px;
  font-size: 100px;
  color: rgb(96, 98, 102);
  user-select: none;
  align-items: center;
  justify-content: center;
}
</style>

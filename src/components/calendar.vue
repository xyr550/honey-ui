<template>
  <div class="calendar" v-click-outside>
    <ho-input v-model="formatDate" type="text"
      placeholder="选择日期"
      readonly
      clearable/>
    <span class="input_prefix">
      <i class="iconfont ho-icon-calendar"></i>
    </span>
    <!--日历面板-->
    <div class="calendar_box" v-if="isVisible">
      <span class="triangle"></span> <!--面板上部三角形-->
      <div class="calendar_header">
          <span @click="preYear"> &lt;&lt; </span>
          <span @click="preMonth"> &lt; </span>
          <span class="header_time">
            <span>{{time.year}}年 &nbsp; </span>
            <span>{{time.month + 1}}月</span>
          </span>
          <span @click="nextMonth"> &gt; </span>
          <span @click="nextYear"> &gt;&gt; </span>
      </div>
      <div class="calendar_content">
        <div class="cell_box">
          <span v-for="j in 7" :key="`_${j}`" class="cell">
            {{weekDays[j - 1]}}
          </span>
        </div>
        <div v-for="i in 6" :key="i" class="cell_box">
          <span v-for="j in 7" :key="j" class="cell" :class="[{
            'is-selected': isSelected(visibleDays[(i -1) * 7 + (j -1)]),
            'not-currentMonth': !isCurrentMonth(visibleDays[(i -1) * 7 + (j -1)]),
            'today': isToday(visibleDays[(i -1) * 7 + (j -1)])
            }]"
            @click="chooseDate(visibleDays[(i -1) * 7 + (j -1)])">
            <!--获取到每一天对应的日期date值进行显示-->
            {{visibleDays[(i -1) * 7 + (j -1)].getDate()}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref
} from 'vue'
import utils from '../utils/date'

export default defineComponent({
  name: 'HoCalendar',
  props: {
    modelValue: {
      type: [Date, String],
      default: ''
    }
  },
  setup(props, context) {
    const isVisible = ref(false)
    const time = reactive({
      year: undefined,
      month: undefined
    })
    const weekDays = ['日', '一', '二', '三', '四', '五', '六']

    const visibleDays = computed(() => {
      // 获取当月第一天对应的Date对象
      const firstDayOfMonth = new Date(time.year, time.month, 1)
      // 获取当月第一天对应的是星期几
      const week = firstDayOfMonth.getDay()
      // 获取42天中的第一天对应的Date对象，即每月1号对应的时间减去week天
      const startDay = firstDayOfMonth - week * 60 * 60 * 1000 * 24
      const days = []
      for (let i = 0; i < 42;) { // 循环出42天
        days.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
        i += 1
      }
      return days;
    })
    const formatDate = computed({
      get() {
        return props.modelValue ? utils.formatDate(props.modelValue) : ''
      },
      set(val) {
        if (!val) context.emit('update:modelValue', '')
      }
    })

    const getTime = (date) => {
      const { year, month } = utils.getYearMonthDay(date)
      time.year = year
      time.month = month
    }
    onMounted(() => {
      if (props.modelValue) getTime(props.modelValue)
      else getTime(new Date())
    })
    const focus = () => {
      isVisible.value = true
    }
    const blur = () => {
      isVisible.value = false
    }
    // 判断传递的日期是否属于当月
    const isCurrentMonth = (date) => {
      const { year, month } = utils.getYearMonthDay(date)
      // 与日历面板显示年、月进行比较，如果年月相同，那么是当月时间
      return year === time.year && month === time.month
    }
    // 判断传递的日期是否是今天
    const isToday = (date) => {
      const { year, month, day } = utils.getYearMonthDay(date)
      const { year: y, month: m, day: d } = utils.getYearMonthDay(new Date())
      return year === y && month === m && day === d
    }
    const chooseDate = (date) => {
      getTime(date)
      context.emit('update:modelValue', date)
      setTimeout(() => {
        blur()
      }, 150);
    }
    // 传递面板上的时间，判断是不是用户选择的日期
    const isSelected = (date) => {
      if (!props.modelValue) return false
      const { year, month, day } = utils.getYearMonthDay(date)
      const { year: y, month: m, day: d } = utils.getYearMonthDay(props.modelValue)
      return year === y && month === m && day === d;
    }

    const preYear = () => {
      // 获取当前面板中的任意1天，比如当月1号对应的Date对象
      const someDayOfCurrentYear = new Date(time.year, time.month, 1)
      const currentYear = someDayOfCurrentYear.getFullYear()
      // 将当前面板中的某一天修改为上一个年中的某一天
      someDayOfCurrentYear.setFullYear(currentYear - 1)
      // 修改time对象
      getTime(someDayOfCurrentYear)
    }
    const preMonth = () => {
      const someDayOfCurrentMonth = new Date(time.year, time.month, 1)
      const currentMonth = someDayOfCurrentMonth.getMonth()
      someDayOfCurrentMonth.setMonth(currentMonth - 1)
      getTime(someDayOfCurrentMonth)
    }
    const nextYear = () => {
      const someDayOfCurrentYear = new Date(time.year, time.month, 1)
      const currentYear = someDayOfCurrentYear.getFullYear()
      someDayOfCurrentYear.setFullYear(currentYear + 1)
      getTime(someDayOfCurrentYear)
    }
    const nextMonth = () => {
      const someDayOfCurrentMonth = new Date(time.year, time.month, 1)
      const currentMonth = someDayOfCurrentMonth.getMonth()
      someDayOfCurrentMonth.setMonth(currentMonth + 1)
      getTime(someDayOfCurrentMonth)
    }
    return {
      isVisible,
      time,
      weekDays,
      visibleDays,
      formatDate,
      focus,
      blur,
      isCurrentMonth,
      isToday,
      chooseDate,
      isSelected,
      preYear,
      preMonth,
      nextYear,
      nextMonth
    }
  },
  directives: { // 添加指令对象
    clickOutside: {
      beforeMount(el, binding) {
        // vue3 通过binding访问组件实例
        const vm = binding.instance
        const handler = (e) => {
          if (el.contains(e.target)) {
            // 如果点击的文本框，需要显示日历面板
            if (!vm.isVisible) vm.focus()
          } else if (vm.isVisible) {
            // 如果点击的是文本框的外部, isVisible为true则关闭日历面板
            vm.blur()
          }
        }
        const ell = el
        ell.handler = handler
        // 将事件处理函数保存到el上，即指令所在DOM上，方便解绑移除事件处理函数
        document.addEventListener('click', handler)
      },
      unmounted(el) {
        document.removeEventListener('click', el.handler)
      }
    }
  }
});
</script>

<style lang="less" scoped>
.calendar {
  position: relative;
  width: 100%;
  :deep(.ho-input_inner) {
    padding: 0 30px;
  }
}
.calendar_input:focus {
  border: 1px solid #409eff;
}
.input_prefix {
  height: 100%;
  width: 25px;
  text-align: center;
  position: absolute;
  left: 5px;
  top: 0;
  color: #c0c4cc;
}
.input_prefix i {
  line-height: 40px;
}
.calendar_box {
  position: absolute;
  background-color: white;
  top: 50px;
  width: 100%;/* 暂时使用固定宽度和高度，后面会去除宽度和高度进行内容自适应现实 */
  min-width: 300px;
  height: 255px;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  border-radius: 4px;
  z-index: 5;
  user-select: none;
  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    top: -16px;
    left: 24px;
    border: 8px solid transparent;
    border-bottom: 8px solid #e4e7ed;
  }
  .calendar_content {
    width: 100%;
    line-height: 25px;
  }
  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    top: -14px;
    left: 25px;
    border: 7px solid transparent;
    border-bottom: 7px solid white;
  }
}
.calendar_header {
  display: flex;
  justify-content: space-around;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 100;
  > span {
    user-select: none;
    cursor: pointer;
  }
}
.header_time {
  box-sizing: border-box;
  width: 150px;
  padding: 0 25px;
  height: 30px;
  line-height: 30px;
  color: rgba(39,122,254);
  font-size: 16px;
  font-weight: 500;
  display: flex;
}
.cell_box {
  display: flex;
  width: 100%;
  justify-content: center;
}
.cell {
  display: inline-flex;
  width: 11.3%;
  height: 28px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 100;
  margin: 2px 4px;
  cursor: pointer;
}
.not-currentMonth {
  color: #a8a7a7;
}
.today {
  box-sizing: border-box;
  color:#409eff;
  border-radius: 6px;
  background: #ecf5ff;
}
.is-selected {
  color: white;
  background:  #409eff;
  border-radius: 6px;
  border: 1px solid  rgba(39,122,254);
  box-sizing: border-box;
}
</style>

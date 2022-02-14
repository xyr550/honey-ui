<template>
 <div class="ho-dialog_wapper">
  <div style="height:100%;width:100%;">
    <div ref="imgBox" style="height:50%; width:20%; overflow:hidden;">
      <img
        v-show="src"
        id="pic"
        ref="picture"
        :src="src"
        @mousedown="startDrag">
      <span v-show="showSpan" class="show-title">{{ `${zoomValFixed}%` }}</span>
    </div>
    <div v-show="src" class="bar">
      <i @click="setImgBiger">
        <svg t="1638953004394" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2251" width="20px" height="20px"><path d="M636.8 443.2H519.2V308.8c0-4-3.2-8-8-8h-60c-4.8 0-8 4-8 8v134.4H324.8c-4 0-8 3.2-8 8v60c0 4.8 4 8 8 8h118.4v134.4c0 4.8 3.2 8 8 8h60c4.8 0 8-3.2 8-8V519.2h118.4c4.8 0 8-3.2 8-8v-60c-0.8-4.8-4-8-8.8-8z m284 424L775.2 720.8c122.4-148.8 113.6-369.6-25.6-508.8C600.8 64 360.8 64 212 212 64 360.8 64 600.8 212 748.8c139.2 139.2 360 148 508.8 25.6l145.6 145.6c3.2 3.2 8 3.2 11.2 0l43.2-43.2c3.2-1.6 3.2-6.4 0-9.6zM696 696c-119.2 118.4-311.2 118.4-430.4 0-118.4-119.2-118.4-311.2 0-430.4C384 147.2 576.8 147.2 696 265.6c118.4 119.2 118.4 311.2 0 430.4z" p-id="2252" /></svg>
      </i>
      <i @click="setImgSmiler">
        <svg t="1638953065233" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2642" width="20px" height="20px"><path d="M636.8 443.2h-312c-4 0-8 3.2-8 8v60c0 4.8 4 8 8 8h312c4.8 0 8-3.2 8-8v-60c0-4.8-3.2-8-8-8z m284 424L775.2 720.8c122.4-148.8 113.6-369.6-25.6-508.8C600.8 64 360.8 64 212 212 64 360.8 64 600.8 212 748.8c139.2 139.2 360 148 508.8 25.6l145.6 145.6c3.2 3.2 8 3.2 11.2 0l43.2-43.2c3.2-1.6 3.2-6.4 0-9.6zM696 696c-119.2 118.4-311.2 118.4-430.4 0-118.4-119.2-118.4-311.2 0-430.4C384 147.2 576.8 147.2 696 265.6c118.4 119.2 118.4 311.2 0 430.4z" p-id="2643" /></svg>
      </i>
      <i @click="reSetImg">
        <svg t="1638959165784" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="132634" width="20px" height="20px"><path d="M908.8 209.6l-56 44C776 155.2 656 92 521.6 92c-232 0-419.2 187.2-420 419.2 0 232 188 420.8 420 420.8 181.6 0 336-115.2 394.4-276 1.6-4-0.8-8.8-4.8-10.4l-56.8-19.2c-4-1.6-8.8 0.8-10.4 4.8-1.6 4.8-4 9.6-5.6 15.2-17.6 40.8-42.4 77.6-73.6 109.6-32 31.2-68.8 56-109.6 73.6-42.4 17.6-87.2 27.2-133.6 27.2-46.4 0-91.2-8.8-133.6-27.2-40.8-17.6-77.6-42.4-109.6-73.6-32-32-56.8-68.8-73.6-109.6-17.6-42.4-27.2-87.2-27.2-133.6s8.8-91.2 27.2-133.6c17.6-40.8 42.4-77.6 73.6-109.6 31.2-32 68-56.8 109.6-73.6 42.4-17.6 87.2-27.2 133.6-27.2 46.4 0 91.2 8.8 133.6 27.2 40.8 17.6 77.6 42.4 109.6 73.6 9.6 9.6 19.2 20 28 31.2l-60 47.2c-5.6 4-3.2 12.8 3.2 14.4l175.2 43.2c4.8 1.6 9.6-2.4 9.6-8l0.8-180.8c0-8-7.2-11.2-12.8-7.2z" p-id="132635" /></svg>
      </i>
    </div>
  </div>
</template>

<script>
import Operation from '../utils/number'

const { fixedNumber } = Operation

export default {
  inject: ['context'],
  props: {
    src: {
      type: String,
      default: ''
    }

  },
  data() {
    return {
      zoomVal: 1,
      startx: 0,
      starty: 0,
      draggable: false,
      imgObj: undefined,
      showSpan: false,
      timeout: 0
    }
  },
  computed: {
    zoomValFixed() {
      return fixedNumber(this.zoomVal * 100, 2)
    }

  },
  watch: {

  },
  mounted() {
    this.imgObj = this.$el.querySelector('#pic')
  },
  methods: {
    setImgBiger() {
      if (this.zoomVal < 3) {
        this.zoomVal = fixedNumber(this.zoomVal + 0.1, 2)
        this.imgObj.style.transform = `translate(-50%, 0) scale(${this.zoomVal})`
      }
      this.showZoomVal()
    },
    setImgSmiler() {
      if (this.zoomVal > 0.3) {
        this.zoomVal = fixedNumber(this.zoomVal - 0.1, 2)
        this.imgObj.style.transform = `translate(-50%, 0) scale(${this.zoomVal})`
      }
      this.showZoomVal()
    },
    reSetImg() {
      this.zoomVal = 1
      this.imgObj.style.transform = `translate(-50%, 0) scale(${this.zoomVal})`
      this.imgObj.style.left = '50%'
      this.imgObj.style.top = 0
      this.imgObj.style.transform = 'translate(-50%, 0)'
      this.showZoomVal()
    },
    startDrag(e) {
      // 鼠标左键点击
      if (e.button === 0) {
        // 记录鼠标指针位置
        this.startx = e.clientX
        this.starty = e.clientY
        this.draggable = true
      }
      document.addEventListener('mousemove', this.move)
      document.addEventListener('mouseup', this.stopDrag)
    },
    stopDrag(e) {
      this.draggable = false
      document.removeEventListener('mousemove', this.move)
      document.addEventListener('mouseup', this.stopDrag)
    },
    move(e) {
      e.preventDefault()
      if (this.draggable && this.zoomVal > 1) {
        let diffx = e.clientX - this.startx
        let diffy = e.clientY - this.starty
        const diff = this.judjeImgOut(diffx, diffy)
        diffx = diff.diffx
        diffy = diff.diffy
        const left = this.imgObj.offsetLeft + diffx
        const top = this.imgObj.offsetTop + diffy
        this.imgObj.style.left = `${left}px`
        this.imgObj.style.top = `${top}px`
        this.startx = e.clientX
        this.starty = e.clientY
      }
    },
    judjeImgOut(diffx, diffy) {
      const imgBoxRef = this.$refs.imgBox.getBoundingClientRect()
      const picRef = this.$refs.picture.getBoundingClientRect()
      if ((diffx < 0 && picRef.left + diffx + picRef.width < imgBoxRef.left + 40)
          || (diffx > 0 && picRef.left + diffx + 40 > imgBoxRef.left + imgBoxRef.width)) {
        diffx = 0
        this.stopDrag()
      }
      if ((diffy > 0 && picRef.top + diffy + 40 > imgBoxRef.top + imgBoxRef.height)
          || (diffy < 0 && picRef.top + diffy + picRef.height < imgBoxRef.top + 40)) {
        diffy = 0
        this.stopDrag()
      }
      return { diffx, diffy }
    },
    showZoomVal() {
      this.showSpan = true
      if (!this.timeout) {
        this.timeout = 1
        setTimeout(() => {
          this.timeout = 0
          this.showSpan = false
        }, 1000)
      }
    }
  }
}
</script>
<style scoped>
.ho-dialog_wapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index:2021;
  background-color: rgba(88, 86, 86, 0.452);
}
#pic {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  min-width: 150px;
  max-height: 85%;
  max-width: 100%;
  /* width: 100%;
  height: 100%;
  object-fit: contain; */
}
.bar{
  display: flex;
  height: 35px;
  justify-content: center;
  background: #000000;
  opacity: 0.4;
}
.bar  i:not(:first-child) {
  margin-left: 40px
}
.bar svg {
 fill:#ffffff
}
.show-title{
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 25px;
  color: white;
  background-color: #000000;
  opacity: 0.4;
  text-align: center;
}
</style>

<template>
  <div class="bar-progress">
    <span class="text">{{currentTime | formatTime}}</span>
    <div class="bar" ref="bar" :style="{backgroundImage:backgroundStyle}">
      <span class="icon" ref="icon"></span>
    </div>
    <span class="text">{{duration|formatTime}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["value",'duration','currentTime'],
  data() {
    return {};
  },
  computed: {
      //根据进度修改进度条背景颜色
      backgroundStyle(){
          const a = this.value*100;
          return `linear-gradient(to right,#fc0d58 0%,#fc0d58 ${a}%, #c7bfbf ${a}%,#c7bfbf 100%)`
      }
  },
  filters:{
    formatTime(value){
        // console.log(value);
        //计算分
        let mins = Math.floor(value/60)
        mins=mins>9?mins:('0'+mins)
        //秒
        let second = Math.floor(value%60)
        second=second>9?second:('0'+second)
        // if(mins<10){
        //   mins = '0'+mins
        // }
        // if(second<10){
        //   second = '0'+second;
        // }
        return `${mins}:${second}`
    }
  },
  watch: {
    value: {
      handler() {
        //handler比mounted限制性，所有icon会undefined,所以要$nextTick等dom渲染好在执行
        this.$nextTick(() => {
          //调整起始位置
          this.$refs.icon.style.transform = `translate(${this.maxmove *
            this.value}px,-50%)`;
        });
      },
      immediate: true, //初始化之后就执行一次监听
    },
  },

  methods: {},
  created() {},
  mounted() {
    //mounted时操作dom，添加事件  在这里的数据外部改变这里也要改变就得加监听watch
    const bar = this.$refs.bar;
    const icon = this.$refs.icon;
    //约束范围
    const maxmove = (this.maxmove = bar.offsetWidth - icon.offsetWidth);
    icon.addEventListener("touchstart", (ev) => {
      
      let lastoffsetX = this.maxmove*this.value;//上一次位置
      const startP = ev.touches[0].clientX;//记录起始位置
      const touchmoveCallback = (ev) => {
        //记录偏移位置
        let offsetX = ev.changedTouches[0].clientX - startP;
        offsetX += lastoffsetX; //叠加上一次的位置

        if (offsetX <= 0) {
          offsetX = 0;
        } else if (offsetX >= maxmove) {
          offsetX = maxmove;
        }
        //icon随offsetX  在当前位置挪动

        icon.style.transform = `translate(${offsetX}px,-50%)`;
        let a = offsetX / maxmove;
        // console.log(a);
        this.$emit("input", a);
      };
      const touchendCallback = () => {
      
        document.removeEventListener("touchmove", touchmoveCallback);
        document.removeEventListener("touchend", touchendCallback);
      };
      document.addEventListener("touchmove", touchmoveCallback);
      document.addEventListener("touchend", touchendCallback);
    });
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.bar-progress {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 25px auto;
}
.bar {
  flex: 1;
  height: 4px;
  background: #c7bfbf;
  position: relative;
  border-radius: 2px;
}
.text {
  margin: 0 15px;
  color: #8a8a8a;
  font-size: 12px;
}
.icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fc0d58;
  position: absolute;
  top: 50%;
  /* 相对自身 */
  transform: translate(-50%, -50%);
}
/* 放大进度拖动点 */
.icon::before {
  content: "";
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
}
</style>

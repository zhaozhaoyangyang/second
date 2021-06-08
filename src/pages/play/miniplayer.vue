<template>
  <div class="miniplayer" ref="mini">
    <div class="mini">
      <canvas class="canvas" ref="canvas"></canvas>
      <div class="mini-icon">
        <img :src="currentSong.al.picUrl" :class="{ pause: !playing }" @click="changeAction" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {},
  props: ["progress"],
  data() {
    return {
      context: ""
    };
  },
  computed: {
    ...mapState({
      playing: state => state.count.playing,
      isshowbig: state => state.count.fullScreen
    }),
    ...mapGetters({
      currentSong: "count/currentSong"
    })
  },
  watch: {
    progress() {
      //progress变化要重新绘制
      this.renderCircle(this.context);
    }
    // isshowbig(newval) {

    //   if (newval) {
    //     this.mini.style.opacity = 0;
    //   } else {
    //     this.mini.style.opacity = 1;
    //   }
    // },
  },

  methods: {
    changeAction() {
      this.$store.commit("count/setFullScreen", true);
    },
    renderCircle(context) {
      //每次绘制之前清除上一次的绘制
      context.clearRect(0, 0, 50, 50);
      //绘制圆环作为背景
      context.save();
      context.beginPath();
      //大圆
      context.moveTo(25, 25); //起点
      context.arc(25, 25, 24, 0, 2 * Math.PI * 2, false); //绘制圆圆心15 15 半径14 ,起始点0，弧度360度，方向无所谓
      context.lineTo(25, 25);
      //小圆
      context.moveTo(25, 25);
      context.arc(25, 25, 21, 0, 2 * Math.PI * 2, false);
      context.lineTo(25, 25);
      context.closePath();
      context.fillStyle = "rgba(0,0,0,0.3)";
      context.fill("evenodd"); //填充不重叠的部分
      context.restore();

      //绘制进度圆弧作
      //起始角度-90度
      const startAng = (Math.PI / 180) * -90;
      const endAng = startAng + (Math.PI / 180) * 360 * this.progress;
      context.save();
      context.beginPath();
      //大圆弧
      context.moveTo(25, 25); //起点
      context.arc(25, 25, 24, startAng, endAng, false); //绘制圆圆心15 15 半径14 ,起始点0，弧度360度，方向无所谓
      context.lineTo(25, 25);
      //小圆弧
      context.moveTo(25, 25);
      context.arc(25, 25, 21, startAng, endAng, false);
      context.lineTo(25, 25);
      context.closePath();
      context.fillStyle = "#fc0d58";
      context.fill("evenodd"); //填充不重叠的部分
      context.restore();
    }
  },

  created() {},

  mounted() {
    // this.mini = this.$refs.mini;
    const canvas = this.$refs.canvas;
    canvas.width = 50;
    canvas.height = 50;

    //获取上下文
    const context = canvas.getContext("2d");
    this.context = context;
    this.renderCircle(context);

    this.mini = this.$refs.mini;
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {}
};
</script>
<style scoped>
.mini {
  position: fixed;
  top: 489px;
  left: 30px;
  margin-left: -25px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 800;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .miniplayer{
  transition: all 1.5s;
  opacity: 1;
} */
.canvas {
  position: absolute;
  left: 0;
  right: 0;
}
.mini-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.mini-icon > img {
  width: 100%;
  border-radius: 50%;
  display: block;
  animation: rotate 10s linear infinite;
}
.mini-icon > img.pause {
  animation-play-state: paused;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

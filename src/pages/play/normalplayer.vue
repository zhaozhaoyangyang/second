<template>
  <div :class="{normalplay:true,normalplayup:fullScreen,normalplaydown:!fullScreen}" ref="normalplay">
    <div class="header">
      <i class="icon-down" @click="downfull">
        <img src="../../assets/down.png" alt="" />
      </i>
      <div class="desc">
        <h2>{{ currentSong.al.name }}</h2>
        <p>{{currentSong.ar}}</p>
      </div>
      <i class="icon-meu">
        <img src="../../assets/meu.png" alt="" />
      </i>
    </div>
    <div class="content">
      <div class="pic">
        <img :src="currentSong.al.picUrl" alt="" :class="{ pause: !playing }"/>
      </div>
      <!-- <ul class="geci">
        <li class="geciactive">老鼠爱大米</li>
        <li>老鼠爱吃大米</li>
      </ul> -->
    </div>
    <div class="playcontrol">
        <div class="jindu">
            <bar-progress v-model="a"/>
        </div>
        <div class="control">
            <i class="icon-from"></i>
            <i :class="{'icon-puase':!playing,'icon-play':playing}" @click="changeAction"></i>
            <i class="icon-next"></i>
        </div>
    </div>
    <div class="footer">
      <i class="icon-enjoy"></i>
      <i class="icon-upload"></i>
      <i
        :class="{ 'icon-unlove': !love, 'icon-love': love }"
        @click="love = !love"
      ></i>
      <i class="icon-listxunhuan"></i>
      <i class="icon-songlist"></i>
    </div>
  </div>
</template>

<script>
import BarProgress from './children/bar-progress';
import {mapState, mapGetters} from 'vuex'
export default {
  components: {
    BarProgress,
  },
 props:['progress'],
  data() {
    return {
      love:false,
      a:0,
      al: {
        name: "Your Head Smells Good",
        picUrl:
          "https://p1.music.126.net/uOAROZ8Ia72yvcmfMIg_Uw==/125344325570003.jpg",
      },
    };
  },
  computed: {
    ...mapState({
      playing:(state)=>state.count.playing,
      fullScreen:state=>state.count.fullScreen
    }),
    ...mapGetters({
      currentSong:'count/currentSong'
    }),
    
  },
  watch: {
      progress(){
      this.a = this.progress;
    }
  },

  methods: {
    downfull(){
      this.$store.commit('count/setFullScreen',!this.fullScreen)
    },
      changeAction(){
           this.$store.commit('count/setPlaying',!this.playing);
           console.log(this.a);
           
      }
  },
  created() {},
  mounted() {
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {
    
    
  },
};
</script>
<style scoped>
.normalplay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: #ffffff;
  transition: all 1s;
 
}
.normalplaydown{
  transform: translateY(100%);
}
.normalplayup{
  transform: translateY(0);
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.icon-down {
  width: 25px;
}
.icon-down > img {
  width: 100%;
  display: block;
}
.icon-meu {
  width: 25px;
}
.icon-meu > img {
  width: 100%;
  display: block;
}
.desc {
  text-align: center;
}
.desc > h2 {
  font-size: 16px;
  font-family: "Arial Rounded MT Bold";
  line-height: 25px;
  color: rgb(91, 29, 29);
}
.desc > p {
  font-size: 13px;
  line-height: 20px;
  color: gray;
  font-weight: 500;
}
.pic {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pic > img {
  width: 250px;
  border-radius: 50%;
  box-shadow: 15px 15px 45px #efe0e2, -15px -15px 45px #efe0e2;
  animation: rotate 10s linear infinite;
}
.pic > img.pause {
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
.geci {
  text-align: center;
  margin-top: 30px;
  font-family: "Gill Sans MT";
  font-size: 12px;
  color: #d2cfcf;
}
.geci > li.geciactive {
  color: rgb(252, 13, 88);
  font-size: 13px;
}
.geci > li {
  line-height: 20px;
}
/* .jindu{
    height: 100px;
} */
.control {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icon-from {
  width: 25px;
  height: 25px;
  background: url("../../assets/from.png");
  background-size: 100%;
}
.icon-puase {
  width: 50px;
  height: 50px;
  background: url("../../assets/from.png");
  background-size: 100%;
}
.icon-puase {
  width: 50px;
  height: 50px;
  background: url("../../assets/播放.png");
  background-size: 100%;
}
.icon-play {
  width: 50px;
  height: 50px;
  background: url("../../assets/暂停.png");
  background-size: 100%;
}
.icon-next {
  width: 25px;
  height: 25px;
  background: url("../../assets/next.png");
  background-size: 100%;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 60px;
}
.icon-enjoy {
  width: 25px;
  height: 25px;
  background: url("../../assets/enjoy.png");
  background-size: 100%;
}
.icon-upload {
  width: 25px;
  height: 25px;
  background: url("../../assets/下载.png");
  background-size: 100%;
}
.icon-unlove {
  width: 25px;
  height: 25px;
  background: url("../../assets/unlove.png");
  background-size: 100%;
}
.icon-love {
  width: 25px;
  height: 25px;
  background: url("../../assets/红心.png");
  background-size: 100%;
}
.icon-listxunhuan {
  width: 25px;
  height: 25px;
  background: url("../../assets/listxunhuan.png");
  background-size: 100%;
}
.icon-danxun {
  width: 25px;
  height: 25px;
  background: url("../../assets/danxun.png");
  background-size: 100%;
}
.icon-suiji {
  width: 25px;
  height: 25px;
  background: url("../../assets/随机.png");
  background-size: 100%;
}
.icon-xindong {
  width: 25px;
  height: 25px;
  background: url("../../assets/心跳心动.png");
  background-size: 100%;
}
.icon-songlist {
  width: 25px;
  height: 25px;
  background: url("../../assets/songlist.png");
  background-size: 100%;
}
</style>

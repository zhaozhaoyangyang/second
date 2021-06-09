<template>
  <div class="meiri" @click="time()" id="i">
    <van-icon name="down" class="back" size="30px" @click="bb()" />
    <h2 class="hhh">推荐</h2>
    <h6>{{ time() }}</h6>
    <div class="lunbo">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        loop
        :width="340"
        initial-swipe="5"
        show-indicators
      >
        <van-swipe-item v-for="v in tjgd" :key="v.id" class="tu">
          <div>
            <img :src="v.picUrl" alt="" class="iimg" />
            <div>
              <div class="bofang">
                <van-icon
                  name="play"
                  size="40px"
                  class="play"
                  @click="bo(v.song.artists[0].id)"
                />
              </div>
              <div class="dataa">
                <p>{{ v.name }}</p>
                <h2>{{ v.song.artists[0].name }}</h2>
                <h3>{{ v.song.album.company }}</h3>
                <!-- <p>{{v.song.album.subType}}</p> -->
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <img src="../../assets/剪影.png" alt="" class="dianbo" />
  </div>
</template>

<script>
// import Swiper from "swiper";
// import { reqSong } from "../../api/banner";
import { reqnewsong } from "../../api/banner";

// import { get } from '../../utils/request';
export default {
  components: {},
  data() {
    return {
      tjgd: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    bb() {
      this.$router.back();
    },
    time() {
      const tt = new Date();
      let week = 0;
      if (tt.getDay() == 1) {
        week = "星期一";
      } else if (tt.getDay() == 2) {
        week = "星期叻";
      } else if (tt.getDay() == 3) {
        week = "星期三";
      } else if (tt.getDay() == 4) {
        week = "星期四";
      } else if (tt.getDay() == 5) {
        week = "星期五";
      } else if (tt.getDay() == 6) {
        week = "星期六";
      } else if (tt.getDay() == 7) {
        week = "星期天";
      }
      return (
        tt.getFullYear() +
        "年" +
        (tt.getMonth() * 1 + 1) +
        "月" +
        tt.getDate() +
        "日" +
        "   " +
        week
      );
    },
    async gedan() {
      const res = await reqnewsong();
      // console.log(res);
      this.tjgd = res.data.result;
      // console.log(this.tjgd);
    },
    bo(id) {
      console.log(id);
    },
  },
  created() {
    this.time();
    this.gedan();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}

.back {
  transform: rotateZ(90deg);
  background-color: rgba(240, 248, 255, 0);
  position: absolute;
  top: 10px;
  left: 10px;
  color: rgb(82, 82, 82);
  z-index: 2;
}
.hhh {
  margin-top: 10%;
  font: normal 400 30px/40px "华文行楷";
  text-indent: 10px;
}
h6 {
  font: normal 400 16px/16px "华文行楷";
  color: rgb(107, 107, 107);
  text-indent: 10px;
}
.meiri {
  padding: 2% 0%;
}
.lunbo {
  margin-top: 6px;
  width: 100%;
  height: 500px;
  /* background-color: rgb(255, 255, 255); */
}

.tu {
  position: relative;
  left: 40px;
}
.tu > div > img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 6px rgb(92, 92, 92);
}
/* my-swipe:nth-child(1){
  margin-left: 40px;
} */

.iimg {
  width: 100%;
}
.tu > div > div {
  height: 160px;
  margin: 0 1%;
  margin-top: -100px;
  background-color: rgb(211, 106, 185);
  border-radius: 10px;
  z-index: 5;
  box-shadow: 0 0 6px rgb(80, 80, 80);
  padding-top: 20px;
}
.tu > div {
  padding: 2%;
}
.bofang {
  position: absolute;
  top: 60%;
  right: 6%;
  background-color: rgb(248, 248, 248);
  height: 60px;
  width: 60px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(255, 255, 255);
}
.play {
  color: rgb(128, 86, 86);
  position: absolute;
  top: 17%;
  left: 17%;
}
.dataa {
  width: 260px;
  height: 80px;
  /* background-color: aquamarine; */
  margin-top: 30px;
  margin-left: 10px;
}
.dataa > p {
  font: normal 400 20px/24px "华文行楷";
  text-align: left;
}
.dataa > h2 {
  font: normal 400 26px/30px "华文行楷";
  text-align: left;
}
.dataa > h3 {
  font: normal 400 16px/24px "华文行楷";
  text-align: left;
}
.dianbo {
  width: 100%;
  position: fixed;
  bottom: -30px;
  /* height: 140px; */
}
#i {
  /* background-image: url('../../assets/背景图.jpg'); */
}
</style>
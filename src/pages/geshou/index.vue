<template>
  <div class="">
    <div class="headd">
      <img :src="gs.cover" alt="" class="gsimg" />
      <van-icon name="down" class="back" size="30px" @click="bb()" />
      <!-- <div class="shadd"></div> -->
      <div class="dataa">
        <p class="nnn">{{ gs.name }}</p>
        <div class="xian"></div>
        <p class="desc">{{ gs.briefDesc }}</p>
      </div>
      <van-icon
        name="like"
        size="50px"
        :class="aaa ? 'hearta' : 'heartb'"
        @click="bian()"
      />
    </div>
    <div class="gequs" :style="{ height: num + 'px' }">
      <div class="dian" @click="shangqu()">
        <van-icon name="weapp-nav" class="icon" size="40px" />
      </div>
      <div class="uls">
        <dl v-for="(v, i) in gslist" :key="v.id" class="">
          <dd>
            <img :src="imglist[i]" alt="" class="xxxx" />
          </dd>
          <dt>
            <p>{{ v.name }}</p>
          </dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { reqartist } from "../../api/banner";
// import { reqDynamic } from "../../api/banner";
import { reqartli } from "../../api/banner";
import { reqonesong } from "../../api/banner";
export default {
  components: {},
  data() {
    return {
      id: "",
      gs: "",
      gslist: [],
      imglist: [],
      num: 150,
      flag: true,
      time: null,
      timee: null,
      aaa: false,
    };
  },
  computed: {},
  watch: {},

  methods: {
    bian() {
      this.aaa = !this.aaa;
    },
    huoquid() {
      this.id = this.$route.params.id;
      // console.log(this.id);
    },
    async gsxiangqing(params) {
      const res = await reqartist(params);
      this.gs = res.data.data.artist;
      // console.log(this.gs);
      this.gsgedan({ id: this.id });
    },
    async gsgedan(params) {
      const res = await reqartli(params);
      this.gslist = res.data.songs;
      // console.log(this.gslist);
      this.ddd();
      // console.log(this.gqxx({ ids: 26305527 }));
    },

    // awite return 冲突
    // awite return 冲突
    // awite return 冲突
    // awite return 冲突
    async gqxx(params) {
      const res = await reqonesong(params);
      this.imglist.push(res.data.songs[0].al.picUrl);
      // console.log(this.imglist);
    },

    ddd() {
      this.gslist.forEach((v) => {
        // console.log(v.id);
        this.gqxx({ ids: v.id });
      });
      // console.log(this.imglist);
    },

    bb() {
      this.$router.back();
    },
    shangqu() {
      if (this.flag) {
        this.flag = false;
        clearInterval(this.time);
        clearInterval(this.timee);
        this.time = setInterval(() => {
          let a = Math.ceil((500 - this.num) / 12);
          this.num += a;
          if (a == 0) {
            clearInterval(this.time);
          }
        }, 10);
      } else {
        this.flag = true;
        clearInterval(this.timee);
        clearInterval(this.time);
        this.timee = setInterval(() => {
          let a = Math.ceil((150 - this.num) / 12);
          this.num += a;
          if (a == 0) {
            clearInterval(this.timee);
          }
        }, 10);
      }
    },
  },
  created() {
    this.huoquid();
    this.gsxiangqing({ id: this.id });

    // this.foo({ ids: 26305527 });
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.headd {
  position: relative;
}
.gsimg {
  width: 100%;
}
.back {
  transform: rotateZ(90deg);
  background-color: rgba(240, 248, 255, 0);
  position: absolute;
  top: 10px;
  left: 10px;
  color: aliceblue;
  filter: drop-shadow(0px 0px 2px #222222);
  z-index: 2;
}

.shadd {
  border-radius: 50%;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.565);
  background-image: radial-gradient(rgba(9, 9, 9, 0.45), rgb(0, 0, 0, 0.08));
  height: 80px;
  width: 80px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: -50px;
  left: -30px;
}
.dataa {
  width: 100%;
  height: 200px;
  /* background-color: rgb(211, 229, 230); */
  position: relative;
  top: -50px;
  z-index: 5;
}
.gequs {
  display: flex;
  width: 100%;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  /* height: 260px; */
  overflow: scroll;
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: 0px;
  z-index: 20;
  box-shadow: 0 0 20px rgb(119, 119, 119);
}
dl {
  width: 16%;
  margin: 14px;
}
dl > dd {
  width: 100%;
}
dl > dt {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font: normal 200 14px/20px "华文行楷";
  text-align: center;
}
.uls {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: scroll;
}
.xxxx {
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
}
.dian {
  height: 40px;
  background-color: aliceblue;
  width: 100%;
}
.icon {
  margin-left: 45%;
  color: rgb(67, 67, 67);
}
.hearta {
  position: absolute;
  top: 3%;
  right: 5%;
  z-index: 10;
  background-image: -webkit-linear-gradient(-45deg, #fd993b 20%, #ff5825 40%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 2px 10px #dda591);
}
.heartb {
  position: absolute;
  top: 3%;
  right: 5%;
  z-index: 10;
  background-image: -webkit-linear-gradient(-20deg, #a0d9e2 40%, #9aecd9 20%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 2px 10px #f5d5d5);
}
.nnn {
  font: normal 200 40px/50px "华文行楷";
  color: rgb(35, 59, 70);
  filter: drop-shadow(0px 0px 4px #ffffff);
  /* border: #9aecd9 2px solid; */
  background-color: #c3c8f823;
  text-indent: 10px;
}
.desc {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  font: normal 400 14px/24px "华文行楷";
  text-indent: 20px;
  color: #444764;

  display: -webkit-box;
  -webkit-line-clamp: 8;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
.xian {
  height: 2px;
  background-color: rgb(220, 91, 225);
  position: relative;
  top: -3px;
}
</style>
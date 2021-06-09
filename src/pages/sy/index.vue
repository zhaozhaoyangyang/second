<template>
  <div id="home">
    <!-- 搜索 -->
    <div class="headd">
      <van-icon name="label-o" class="headicl" size="20px" />
      <van-search
        shape="round"
        class="search"
        v-model="value"
        placeholder="请输入搜索关键词"
        use-right-icon-slot
        background="#fff"
      />
      <van-icon name="bullhorn-o" class="headicr" size="20px" />
    </div>
    <!-- 轮播图 -->
    <div class="bannerr">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        loop
        :width="340"
        initial-swipe="5"
        show-indicators
      >
        <van-swipe-item
          v-for="item in lunbo.slice(3)"
          :key="item.encodeId"
          class="tu"
        >
          <img :src="item.imageUrl" alt="12" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 一排icon -->
    <div class="icons">
      <dl @click="ee()">
        <dd>
          <img src="../../assets/icon6.png" alt="" />
          <span>{{ dd }}</span>
        </dd>
        <dt>每日推荐</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon7.png" alt="" />
        </dd>
        <dt>私人FM</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon8.png" alt="" />
        </dd>
        <dt>歌单</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon9.png" alt="" />
        </dd>
        <dt>排行榜</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon1.png" alt="" />
        </dd>
        <dt>直播</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon1.png" alt="" />
        </dd>
        <dt>数字专辑</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon2.png" alt="" />
        </dd>
        <dt>专注冥想</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon3.png" alt="" />
        </dd>
        <dt>歌房</dt>
      </dl>
      <dl>
        <dd>
          <img src="../../assets/icon4.png" alt="" />
        </dd>
        <dt>游戏专区</dt>
      </dl>
    </div>
    <!-- 推荐歌单 -->
    <div class="tuijiangedan">
      <p>推荐歌单</p>
      <button>更多></button>
    </div>
    <div class="tuijian">
      <dl v-for="v in tjgd" :key="v.id">
        <dd class="tuijianimg">
          <img :src="v.picUrl" alt="" />
          <div class="time">
            <p>△{{ (v.playCount / 10000).toFixed(2) }}万</p>
          </div>
        </dd>
        <dt>{{ v.name }}</dt>
      </dl>
    </div>
    <!-- 热么歌手 -->

    <div class="tuijiangedan">
      <p>热门歌手</p>
      <button>更多></button>
    </div>
    <div class="tuijian">
      <dl v-for="v in artists" :key="v.id" @click="geshouye(v.id)">
        <dd class="tuijianimg">
          <img :src="v.img1v1Url" alt="" class="gsimg" />
        </dd>
        <dt>{{ v.name }}</dt>
      </dl>
    </div>
    <!-- 刷新那个 -->
    <div class="updata">
      <div>
        <div v-if="hosts">
          <van-icon name="replay" class="upicon" @click="shuaxin()" /> 聆听{{
            hosts[num]
          }}歌曲
        </div>
        <button><van-icon name="play" size="16px" class="upicon" />播放</button>
      </div>

      <div>
        <dl v-for="v in tjname" :key="v.id" class="ull">
          <dd><img :src="v.picUrl" alt="" class="ddimg" /></dd>
          <dt>{{ v.name }}</dt>
        </dl>
      </div>
    </div>
    <!-- 排行榜 -->

    <!-- <div class="bangdan">
      <div>
        <div v-if="hosts">
          <van-icon name="replay" class="upicon" @click="shuaxin()" /> 查看{{
            hosts[num]
          }}榜单
        </div>
        <button><van-icon name="play" size="16px" class="upicon" />播放</button>
      </div>

      <div>
        <div>
          <select name="" id="sse" v-model="bdid">
            <option :value="v.id" v-for="v in bdlists" :key="v.id">
              {{ v.name }}
            </option>
          </select>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { reqBanner } from "../../api/banner";
import { reqSource } from "../../api/banner";
import { reqHost } from "../../api/banner";
import { reqDynamic } from "../../api/banner";
import { reqonesong } from "../../api/banner";
import { reqtoplist } from "../../api/banner";
import { reqartists } from "../../api/banner";
export default {
  components: {},
  data() {
    return {
      value: "",
      lunbo: [],
      dd: "",
      tjgd: [],
      lingting: "",
      hosts: [],
      hostsid: [],
      num: "",
      song: [],
      playlist: [],
      playlistid: [],
      tjname: [],
      bdlists: [],
      listids: [],
      listnames: [],
      listid: "",
      listname: "",
      bdid: "",
      artists: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    dday() {
      const time = new Date();
      this.dd = time.getDate();
      // console.log(this.dd);
    },
    async lunboimg() {
      const res = await reqBanner();
      // console.log(res);
      this.lunbo = res.data.banners;
      console.log(this.lunbo);
    },

    ee() {
      this.$router.push("/every");
    },
    async gedan() {
      const res = await reqSource({ limit: 30 });
      this.tjgd = res.data.result;
      // console.log(this.tjgd);
    },

    async host() {
      const res = await reqHost();
      // console.log(res);
      const hostss = res.data.tags;
      console.log(hostss);
      this.hosts = [];
      this.hostsid = [];
      hostss.forEach((v) => {
        if (v.id != 2 && v.id != 4099180 && v.id != 9001 && v.id != 2008) {
          // console.log(v);

          this.hosts.push(v.name);
          this.hostsid.push(v.id);
        }
      });
      // console.log(this.hostsid);
      this.suiji();
      this.dynamic(this.num);
    },

    async dynamic(num) {
      // console.log(this.hosts);
      let a = this.hostsid[num];
      // console.log(a);
      const res = await reqDynamic({ id: a });
      const pplaylist = res.data.privileges;
      // console.log(pplaylist);
      this.playlistid = [];
      pplaylist.forEach((v) => {
        this.playlistid.push(v.id);
      });
      this.tjname = [];
      this.playlistid.forEach((v) => {
        this.reqsong(v);
      });
      // console.log(this.tjname);
    },
    async reqsong(idd) {
      let res = await reqonesong({ ids: idd });
      // console.log(res);
      let aa = res.data.songs[0].al;
      // console.log(aa);
      this.tjname.push(aa);
    },

    // 随机数
    suiji() {
      this.num = Math.floor(Math.random() * 6);
      // this.dynamic(this.num)
    },
    shuaxin() {
      this.suiji();
      this.host();
    },

    // 歌手相关
    async getartists() {
      const res = await reqartists();
      this.artists = res.data.artists;
      console.log(this.artists);
    },
    geshouye(id) {
      this.$router.push("/geshou/" + id);
    },

    // 榜单相关
    // 查看所有榜单
    async bangdans() {
      const res = await reqtoplist();
      this.bdlists = res.data.list;
      this.bdlists.forEach((v) => {
        this.listnames.push(v.name);
        this.listids.push(v.id);
      });
      console.log(this.bdlists);
      console.log(this.listnames);
      console.log(this.listids);
    },
  },
  created() {
    this.suiji();
    this.lunboimg();
    this.dday();
    this.gedan();
    this.host();
    this.bangdans();
    this.getartists();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.headd {
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 5;
}
.search {
  width: 70%;
}
.headicl {
  margin-top: 15px;
  margin-right: 20px;
}
.headicr {
  margin-top: 15px;
  margin-left: 16px;
}

.about {
  width: 100%;
  height: 160px;
  margin-top: 60px;
  z-index: 0;
}

.swiper-scrollbar {
  height: 2px;
  background-color: rgb(254, 248, 201);
  top: -5px;
}
.swiper-scrollbar-drag {
  height: 2px;
  background-color: rgb(255, 0, 0);
}
/* .about{
  margin-top: 80px;
} */
/* .swiper-pagination{
  height: 2px;
  background-color: rgb(255, 255, 255);
  /* margin: 0 10px 0 10px; */
/* margin-top: -5px; */
/* }  */
#home .about .swiper-container .swiper-pagination .swiper-pagination-bullet {
  height: 4px;
  width: 6px;
  border-radius: 1px;
}
.icons {
  display: flex;
  /* white-space: nowrap; */
  overflow-x: scroll;
}
.icons::-webkit-scrollbar {
  display: none;
}
.icons > dl {
  width: 80px;
  text-align: center;
  flex-shrink: 0;
}
.icons > dl > dd {
  width: 100%;
  text-align: center;
  position: relative;
}
.icons > dl > dd > span {
  color: rgb(255, 255, 255);
  position: absolute;
  left: 36px;
  top: 13px;
  font: normal 800 10px/20px "微软雅黑";
}
.icons > dl > dt {
  width: 100%;
  text-align: center;
  font: normal 400 10px/16px "华文行楷";
}
.icons > dl img {
  width: 40px;
}
.tuijiangedan {
  display: flex;
  padding: 0 5% 0 3%;
  margin-top: 10px;
  justify-content: space-between;
  font: normal 400 20px/24px "华文行楷";
}
.tuijiangedan > button {
  font: normal 400 16px/20px "华文行楷";
  padding: 0 4px;
  background-color: #fff;
  border-radius: 10px;
  border: rgb(155, 155, 155) 1px solid;
}
.tuijian {
  width: 100%;
  display: flex;
  padding: 2%;
  box-sizing: border-box;
  overflow: scroll;
}
.tuijian::-webkit-scrollbar {
  display: none;
}
.tuijian > dl {
  margin: 6px 8px;
  border-radius: 20px;
  /* overflow: hidden; */
  /* width: 120px; */
}
.tuijian > dl > dt {
  font: normal 400 10px/14px "华文行楷";
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
.tuijian > dl > dd > img {
  width: 100px;
  border-radius: 20px;
}
.tuijianimg {
  position: relative;
}
.time {
  font: normal 100 10px/14px "华文行楷";
  color: #fff;
  padding: 2px 8px;
  background-color: rgba(126, 126, 126, 0.572);
  position: absolute;
  top: 6px;
  right: 6px;
  border-radius: 10px;
}

.bangdan {
  box-sizing: border-box;
  background-color: rgba(229, 232, 235, 0.164);
  padding: 3%;
  border-radius: 10px;
  height: 340px;
  overflow: scroll;
  /* display: flex;
  justify-content: space-between; */
  font: normal 400 16px/20px "华文行楷";
}
.updata {
  box-sizing: border-box;
  background-color: rgba(229, 232, 235, 0.164);
  padding: 3%;
  border-radius: 10px;
  height: 340px;
  /* overflow: scroll; */
  /* display: flex;
  justify-content: space-between; */
  font: normal 400 16px/20px "华文行楷";
}
.updata > div:nth-child(2)::-webkit-scrollbar {
  display: none;
}
.updata > div:nth-child(1) {
  box-sizing: border-box;
  width: 100%;
  /* background-color: rgba(229, 232, 235, 0.164); */
  padding: 3%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  /* font: normal 400 16px/20px "华文行楷"; */
}
.updata > div:nth-child(2) {
  /* background-color: aquamarine; */
  box-sizing: border-box;
  width: 100%;
  height: 240px;
  border-radius: 10px;
  overflow: scroll;
}
.updata > div > button {
  /* font: normal 400 16px/20px "华文行楷"; */
  padding: 0 4px;
  background-color: #fff;
  border-radius: 10px;
  border: rgb(155, 155, 155) 1px solid;
}
.upicon {
  position: relative;
  top: 3px;
}
.ull {
  box-sizing: border-box;
  padding: 2%;
  width: 100%;
  /* height: 40px; */
  display: flex;
}
.ddimg {
  width: 60px;
  border-radius: 10px;
}
.bangdan > div:nth-child(1) {
  box-sizing: border-box;
  width: 100%;
  /* background-color: rgba(229, 232, 235, 0.164); */
  padding: 3%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  /* font: normal 400 16px/20px "华文行楷"; */
}
.bangdan > div > button {
  /* font: normal 400 16px/20px "华文行楷"; */
  padding: 0 4px;
  background-color: #fff;
  border-radius: 10px;
  border: rgb(155, 155, 155) 1px solid;
}
#sse {
  height: 20px;
}
.tuijian > dl > dd > .gsimg {
  border-radius: 50%;
}
.tuijian > dl > dt {
  text-align: center;
  font: normal 200 16px/24px "华文行楷";
}
.bannerr {
  height: 200px;
  overflow: hidden;
}

.my-swipe {
  margin-top: 60px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ffffff;
}
.tu {
  position: relative;
  left: 35px;
}
.tu img {
  width: 95%;
  border-radius: 20px;
}
</style>
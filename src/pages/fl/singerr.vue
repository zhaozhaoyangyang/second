<template>
  <div class="boss" v-if="obj">
    <h2>{{ obj.name }}</h2>
    <!-- 歌手详细信息 -->
    <div class="a">
      <img :src="obj.cover" alt="" />
      <van-tabs v-model="active">
        <van-tab title="热门作品">
          <ul class="list">
            <li v-for="(v,i) in arr" :key="v.id" @click="songAction(i)" >
              {{ v.name }}<van-icon class="icon" name="play-circle-o" />
            </li>
          </ul>
        </van-tab>
        <van-tab title="所有专辑">
          <div class="a">
            <div class="b" v-for="v in zj.slice(0, 4)" :key="v.id">
              <img :src="v.blurPicUrl" alt="" />
              <p>{{ v.name }}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="相关MV">
          <div class="big">
            <div v-for="i in m.slice(0, 4)" :key="i.id" class="small">
              <img :src="i.imgurl" alt="" />
              <p>{{ i.name }}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="艺人简介">
          <div class="c">
            <h4>歌手简介</h4>
            <p>{{ this.ms.briefDesc }}</p>
            <!-- <p>{{this.ms.introduction}}</p> -->
            <div v-for="v in this.ms.introduction" :key="v.id" class="zhuyao">
              <h4 class="p1">{{ v.ti }}</h4>
              <p>{{ v.txt }}</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <Player v-if="showplayer"/>
  </div>
</template>

<script>
import Player from '../play'
import {mapState} from 'vuex'
import {
  reqGetSinger,
  reqHotSings,
  reqGetMv,
  reqZj,
  reqMs,
} from "../../api/fl";
export default {
  components: {Player},
  data() {
    return {
      id: null,
      active: 2,
      obj: null,
      arr: [],
      m: "",
      zj: "",
      ms: "",
    };
  },
  computed: {
    ...mapState({
      showplayer:state=>(state.count.currentIndex>=0)
    })
  },
  watch: {},

  methods: {
    //获取歌手详情
    async getSinger() {
      this.id = this.$route.params.id;
      const result = await reqGetSinger({ id: this.id });
      this.obj = result.data.data.artist;
    },
    //获取  最热门1 歌曲
    async gethotsongs() {
      this.id = this.$route.params.id;
      const result = await reqHotSings({ id: this.id });
      this.arr = [];
      this.arr = result.data.songs.map((item)=>({
        id:item.id,
        name:item.name,
        ar:item.ar.map(v=>v.name).join('/'),
        al:{
          name:item.al.name,
          picUrl:item.al.picUrl
        }
      }));
      // console.log(this.arr);
      // this.$store.commit("count/radioIdList", this.arr.id);
    },
    //获取歌手  MV
    async getMv() {
      this.id = this.$route.params.id;
      // console.log(this.id);
      const result = await reqGetMv({ id: this.id });
      this.m = result.data.mvs;
      // console.log(this.m);
    },
    //获取歌手专辑
    async getzj() {
      this.id = this.$route.params.id;
      const result = await reqZj({ id: this.id });
      this.zj = result.data.hotAlbums;
      // console.log(this.zj);
    },
    //描述
    async getms() {
      this.id = this.$route.params.id;
      const result = await reqMs({ id: this.id });
      this.ms = result.data;
      // console.log(this.ms);
    },
    //点击歌曲时上传当前下标和整个list到vuex
    songAction(index){
      const data ={
        index,
        list:this.arr
      }
      this.$store.commit('count/selectSongByIndex',data)
    }
  },
  created() {
    this.getSinger();
    this.gethotsongs();
    this.getMv();
    this.getzj();
    this.getms();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.boss h2 {
  margin: 20px 35px 0px;
}
.a {
  width: 80%;
  height: 200px;
  /* background-color: skyblue; */
  margin: 10px auto 0;
}
.a img {
  width: 100%;
  height: 80%;
  /* background-color: black; */
}
.list {
  width: 100%;
}
.list li {
  margin: 12px 0;
  width: 240px;
}
.icon {
  position: absolute;
  right: -35px;
}
.big,
.a {
  width: 100%;
  /* background-color: skyblue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.small,
.b {
  width: 45%;
  margin: 5px 7px 0;
}
.small p,
.b p {
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.c {
  width: 100%;
}
.c p {
  line-height: 35px;
  text-indent: 30px;
  margin-top: 10px;
}
.c h4 {
  margin-top: 15px;
}
.zhuyao h4 {
  position: relative;
  left: -15px;
}
</style>

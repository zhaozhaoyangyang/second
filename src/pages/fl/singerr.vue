<template>
  <div class="boss" v-if="obj">
    <h2>{{ obj.name }}</h2>
    <!-- 歌手详细信息 -->
    <div class="a">
      <img :src="obj.cover" alt="" />
      <van-tabs v-model="active">
        <van-tab title="热门作品">
          <ul v-for=" v in arr" :key="v.id" class="list">
            <li>{{v.name}}</li>
          <span><i class="el-icon-video-play"></i></span>
          </ul>
        </van-tab>
        <van-tab title="所有专辑">2</van-tab>
        <van-tab title="相关MV">3</van-tab>
        <van-tab title="艺人简介">4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { reqGetSinger ,reqHotSings} from "../../api/fl";
export default {
  components: {},
  data() {
    return {
      id: null,
      active: 2,
      obj: null,
      arr:''
      // tableData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //   },
      // ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    //获取歌手详情
    async getSinger() {
      this.id = this.$route.params.id;
      console.log(this.id);
      const result = await reqGetSinger({ id: this.id });
      console.log(result);
      this.obj = result.data.data.artist;
    },
    //获取  最热门1 歌曲
    async gethotsongs() {
      this.id = this.$route.params.id;
      const result = await reqHotSings({ id: this.id });
      this.arr = result.data.songs;
      console.log(this.arr);
    },
  },
  created() {
    this.getSinger();
    this.gethotsongs();
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
.list li{
  margin:12px  0;
  width:150px
}
</style>

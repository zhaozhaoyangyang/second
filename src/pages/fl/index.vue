<template>
  <div class="">
    <van-tabs v-model="activeName">
      <van-tab title="歌手" name="a">
        <div class="boss">
          <div class="a">
            <p class="b">推荐</p>
            <ul>
              <li>推荐歌手</li>
              <li>入驻歌手</li>
            </ul>
          </div>
          <div class="a">
            <p>华语</p>
            <ul>
              <li>华语男歌手</li>
              <li>华语女歌手</li>
              <li>华语组合乐队</li>
            </ul>
          </div>
          <div class="a">
            <p>欧美</p>
            <ul>
              <li>欧美男歌手</li>
              <li>欧美女歌手</li>
              <li>欧美组合乐队</li>
            </ul>
          </div>
          <div class="a">
            <p>日本</p>
            <ul>
              <li>日本男歌手</li>
              <li>日本女歌手</li>
              <li>日本组合乐队</li>
            </ul>
          </div>
          <div class="a">
            <p>韩国</p>
            <ul>
              <li>韩国男歌手</li>
              <li>韩国女歌手</li>
              <li>韩国组合乐队</li>
            </ul>
          </div>
          <div class="a sss">
            <p>其他</p>
            <ul>
              <li>其他男歌手</li>
              <li>其他女歌手</li>
              <li>其他组合乐队</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="right-top">
            <span class="s1">入驻歌手</span>
            <span class="s2">更多></span>
          </div>

          <!-- 歌手列表 -->
          <div class="sl">
            <div
              class="singList"
              v-for="item in arr.slice(0, 10)"
              :key="item.id"
            >
              <img :src="item.img1v1Url" alt="" @click="btn(item.id)" />
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="歌单" name="b">
        <h2>全部歌单</h2>
        <div class="big">
          <div class="small" v-for="v in obj.slice(0, 10)" :key="v.id">
            <img :src="v.picUrl" alt="" />
            <p>{{ v.name }}</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="新碟上架" name="c">
        <div class="one">
          <div class="two" v-for="v in diepian.slice(0,10)" :key="v.id">
            <img :src="v.picUrl" alt="" />
            <p>{{ v.name }}</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getSinger, reqGd, reqDd } from "../../api/fl";
export default {
  components: {},
  data() {
    return {
      activeName: "a",
      arr: [],
      obj: "",
      diepian: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    //歌手列表
    async getsing() {
      const result = await getSinger();
      console.log(result);
      this.arr = result.data.artists;
    },
    btn(id) {
      this.$router.push("/singerr/" + id);
    },
      //缓存
//       activated() {
//   if(!this.$route.meta.isUseCache){ //isUseCache 时添加中router中的元信息，判读是否要缓存
//     this.fl = [] //清空原有数据
//     this.onload() // 重新加载
//   }
// }
// ,
// // 列表页面跳转到 详情页时，设置需要缓存
// beforeRouteLeave(to, from, next){
//   if(to.name=='singerr'){
//     from.meta.isUseCache = true
//   }
//   next()
// },


    //歌单
    async getGd() {
      const result = await reqGd();
      // console.log(result);
      this.obj = result.data.result;
      console.log(this.obj);
    },
    //新碟
    async getdd() {
      const result = await reqDd();
      this.diepian = result.data.albums;
    },
  },
  created() {
    this.getsing();
    this.getGd();
    this.getdd();
  },
  
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.boss {
  width: 140px;
  height: 100%;
  border-right: 1px solid #f6f;
  background-color: #f9f9f9;
  float: left;
}
ul {
  margin-top: 5px;
}
.a {
  width: 100px;
  height: 135px;
  margin-top: 20px;
  margin: auto;
  border-bottom: 1px solid #f6f;
}
.a p {
  padding-top: 40px;
  font-size: 20px;
}
.a li {
  color: black;
  font-size: 10px;
  margin: 5px 0;
  line-height: 20px;
  text-align: center;
}
.sss {
  padding-bottom: 60px;
}
.right {
  float: left;
  width: 234px;
  margin-top: 10px;
  text-align: center;
  /* background-color: springgreen; */
}
.right-top {
  width: 200px;
  /* background-color: red; */
  height: 55px;
  margin: auto;
  line-height: 60px;
  border-bottom: 3px solid black;
}
.right-top .s1 {
  float: left;
  font-size: 15px;
}
.right-top .s2 {
  font-size: 10px;
  float: right;
}
.singList img {
  width: 90px;
  height: 90px;
}
.singList p {
  font-size: 5px;
}

.singLisy {
  margin: 10px;
}
.sl {
  width: 200px;
  /* background: skyblue; */
  margin: 0 auto 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.big,
.one {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: skyblue; */
  justify-content: space-around;
  margin: 10px 0;
}
.small,
.two {
  width: 43%;
}
.small p,
.two p {
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 15px 0;
}
.small img,
.two img {
  width: 100%;
}
h2 {
  width: 90%;
  height: 30px;
  line-height: 30px;
  margin: 20px auto 10px;
  border-bottom: 3px solid black;
}
</style>

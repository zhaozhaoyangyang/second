<template>
  <div class="mine">
    <div class="top">
      <img src="../../assets/2.jpg" alt="" style="border-radius: 50%;" />
      <p @click="denglu">点击登录 ></p>
      <van-icon class="saoma" name="scan" color="black" @click="sao()" />
      <p v-show="flag">
        <img src="../../assets/二维码.png" alt="" />
      </p>

      <div class="top1" :key="obj.userId">
        <img :src="obj.avatarUrl" alt="" />
        <span>{{ obj.nickname }}</span>
      </div>
    </div>
    <div class="kaitong">
      <p>开通黑胶VIP</p>
      <p>立享超17项专属特权 ></p>
      <p>限时特惠!黑胶首月仅0.88元!</p>
      <div class="huiyuan"><span>会员中心</span></div>
    </div>
    <div class="xinxi">
      <p @click="btn">
        <van-icon name="envelop-o" /><span>我的消息</span><span>></span>
      </p>
      <p><van-icon name="envelop-o" /><span>云贝中心</span><span>></span></p>
      <p>
        <van-icon name="envelop-o" /><span>创作者中心</span><span>></span>
      </p>
    </div>
    <div class="yinyue">
      <p>音乐服务</p>
      <p><van-icon name="envelop-o" /><span>云村有票</span><span>></span></p>
      <p @click="btnn">
        <van-icon name="envelop-o" /><span>歌手</span><span>></span>
      </p>
      <p><van-icon name="envelop-o" /><span>游戏专区</span><span>></span></p>
      <p><van-icon name="envelop-o" /><span>口袋彩铃</span><span>></span></p>
    </div>
    <div class="qita">
      <p>其他</p>
      <p><van-icon name="envelop-o" /><span>设置</span><span>></span></p>
      <p><van-icon name="envelop-o" /><span>夜间模式</span><span>></span></p>
    </div>
    <div class="qita">
      <p>其他</p>
      <p><van-icon name="envelop-o" /><span>设置</span><span>></span></p>
      <p><van-icon name="envelop-o" /><span>夜间模式</span><span>></span></p>
    </div>
    <div class="qita">
      <p>其他</p>
      <p><van-icon name="envelop-o" /><span>设置</span><span>></span></p>
      <p><van-icon name="envelop-o" /><span>夜间模式</span><span>></span></p>
    </div>
    <button style="margin-bottom: 75px; margin-top:10px" @click="tuichu">
      退出登录
    </button>
  </div>
</template>

<script>
import { reqYonghu } from "../../api/login";
import { removeToken } from "../../utils/auth";
export default {
  components: {},
  data() {
    return {
      flag: false,
      obj: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    sao() {
      this.flag = !this.flag;
    },
    btn() {
      this.$router.push("/xiaoxi");
    },
    btnn() {
      this.$router.push("/geshou");
    },
    denglu() {
      this.$router.push("/login");
    },
    async getUser() {
      const result = await reqYonghu();
      console.log(result);
      this.obj = result.data.profile;
      console.log(this.obj);
    },
    tuichu() {
      removeToken();
      this.$router.push("/login");
    },
  },
  created() {
    this.getUser();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.mine {
  overflow: hidden;
}
.xinxi p,
.yinyue p,
.qita p {
  width: 90%;
  margin: 0 auto;
  border-bottom: solid 1px rgb(182, 186, 187);
}
.qita a {
  margin-right: 50px;
}
.saoma {
  font-size: 30px;
  position: absolute;
  top: 6px;
  right: 15px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: white;
  position: fixed;
  z-index: 1;
}
.top img:nth-child(1) {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 3px;
  left: 20px;
}
.top p:nth-child(4) img {
  width: 260px;
  height: 260px;
  position: absolute;
  top: 200px;
  left: 60px;
}
.top p {
  margin-left: 245px;
}
.top1 {
  position: absolute;
  top: 0;
  left: 0;
}
.top1 img {
  border-radius: 50%;
}
.top1 span {
  margin-left: 68px;
}
.kaitong {
  width: 90%;
  height: 110px;
  background: rgb(162, 163, 163);
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
}
.kaitong p {
  width: 90%;
  margin: 0 auto;
}
.kaitong p:nth-child(1) {
  font-size: 25px;
  color: white;
  font-weight: bolder;
}
.kaitong p:nth-child(2),
.kaitong p:nth-child(3) {
  color: #ccc;
  font-size: 15px;
}
.huiyuan {
  width: 80px;
  height: 30px;
  border: solid 2px white;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  color: white;
  position: absolute;
  top: 15px;
  right: 20px;
}
.yinyue {
  height: 200px;
}
.xinxi,
.qita {
  width: 90%;
  height: 130px;
  background: rgb(237, 241, 241);
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 20px;
}
.yinyue {
  width: 90%;
  height: 160px;
  background: rgb(237, 241, 241);
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 20px;
}
.yinyue p:nth-child(1),
.qita p:nth-child(1) {
  color: rgb(134, 132, 132);
  font-size: 15px;
}
.xinxi,
.yinyue,
.qita {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.xinxi p,
.yinyue p,
.qita p {
  display: flex;
  justify-content: space-between;
}
.xinxi p span:nth-child(2),
.yinyue p span:nth-child(2),
.qita p span:nth-child(2) {
  width: 100px;
  margin-right: 140px;
}
.xinxi p,
.qita p {
  height: 30px;
  line-height: 20px;
  margin-top: 10px;
}
.xinxi p:nth-child(3),
.qita p:nth-child(3) {
  border-bottom: none;
}
.yinyue p {
  height: 24px;
  margin-top: 6px;
}
.yinyue p:nth-child(5) {
  border-bottom: none;
}
button {
  width: 330px;
  height: 50px;
  margin-left: 20px;
  font-size: 20px;
  background: lightblue;
  border-radius: 20px;
  border: none;
}
</style>

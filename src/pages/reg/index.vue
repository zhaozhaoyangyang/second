<template>
  <div class="reg">
    <div class="touxiang"></div>
    <van-uploader :after-read="afterRead" v-if="!imgurl" />
    <img :src="imgurl" alt="" v-else />
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <van-field
        v-model="captcha"
        type="captcha"
        name="captcha"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '验证码' }]"
        style="width:55%"
      />
      <van-field
        v-model="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-model="nickname"
        type="text"
        name="nickname"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <div style="margin: 16px;">
        <p @click="btncaptcha()">获取验证码</p>
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#fa1951"
          style="margin-top:130px; width:40%;margin-left:103px"
          >注册</van-button
        >
        <h6>注册代表用户哈哈<a>《用户协议》</a></h6>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqReg, reqCaptcha } from "../../api/reg";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      phone: "",
      captcha: "",
      password: "",
      nickname: "",
      imgurl: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgurl = file.content;
    },
    //点击获取验证码
    async btncaptcha() {
      const result = await reqCaptcha({ phone: this.phone });
      console.log(result);
    },
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqReg({ ...values });
      //   const result =await reqHasPhone({ ...values});
      console.log(result);
      if (result.status === 200) {
        Toast("注册成功");
        this.$router.push("/login");
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.reg {
  width: 100%;
  height: 667px;
  background: url(../../assets/3.jpg) no-repeat;
  z-index: 1;
  opacity: 0.9;
  position: relative;
}
.van-cell {
  top: 150px;
  z-index: 0;
  width: 80%;
  left: 35px;
  border-radius: 20px;
  margin-bottom: 3px;
  align-content: center;
  justify-content: center;
  /* background-color: #222; */
  /* position: relative; */
}

.reg p {
  width: 90px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  margin-left: 230px;
  background: #fa1951;
  border-radius: 20px;
}
h6 {
  height: 20px;
  color: gainsboro;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
}
a {
  color: #fa1951;
}

.touxiang {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background: rgb(248, 246, 246);
  position: absolute;
  top: 50px;
  left: 132px;
}
.van-uploader {
  position: relative;
  top: 70px;
  left: 150px;
}
img {
  width: 115px;
  height: 115px;
  position: relative;
  top: 50px;
  left: 132px;
  border-radius: 50%;
}
</style>

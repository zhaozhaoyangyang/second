<template>
  <div class="login">
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
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px; margin-top:390px;margin-left:28px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <div class="wangyi">
        <img src="../../assets/7.jpg" alt="" />
        <p>网易云音乐</p>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reqLogin } from "../../api/login";
import { setToken } from "../../utils/auth";
export default {
  components: {},
  data() {
    return {
      phone: "",
      password: "",
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
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqLogin(values);
      console.log(result);
      if (result.status === 200) {
        Toast("登陆成功");
        setToken(result.data.token);
        this.$router.push("/sy");
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
.login {
  overflow: hidden;
  min-height: 666px;
  position: relative;
  background: url(../../assets/1.jpg) no-repeat;
  background-size: 400px;
}
.van-form {
  top: 150px;
  background: url(../../assets/音乐.jpg) no-repeat;
  background-size: 375px;
  height: 400px;
}
.van-uploader {
  position: absolute;
  top: 260px;
  left: 150px;
}
.van-cell {
  top: 375px;
  width: 260px;
  margin: 0 auto;
  background: white;
  border-radius: 30px;
  margin-bottom: 6px;
}
.van-button {
  width: 115px;
  font-size: 18px;
  margin: 0 auto;
  background: #fa1951;
  border: none;
}
.wangyi {
  height: 50px;
}
.wangyi img {
  width: 40px;
  border-radius: 50px;
  position: absolute;
  top: 560px;
  left: 110px;
}
.wangyi p {
  width: 120px;
  height: 30px;
  line-height: 30px;
  margin-left: 165px;
  margin-top: 38px;
  font-size: 22px;
  color: white;
}
</style>

<template>
  <div id="app">
     <Back v-if="$route.meta.backshow"></Back>
    <Head v-if="$route.meta.headerShow"></Head>

    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"></router-view>



    <Foot v-if="$route.meta.footerShow"></Foot>
   
  </div>
</template>

<script>
import Foot from "./components/footer.vue";
import Head from "./components/header.vue";
import Back from './components/back.vue'
export default {
  name: "App",
  components: {
    Head,
    Foot,
    Back
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true, //模块刷新
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style>

</style>

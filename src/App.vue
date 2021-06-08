<template>
  <div id="app">
    <Back v-if="$route.meta.backshow"></Back>
    <Head v-if="$route.meta.headerShow"></Head>
    <Player v-if="showplayer"/>
    <router-view></router-view>
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <Foot v-if="$route.meta.footerShow"></Foot>
  </div>
</template>

<script>
import Foot from "./components/footer.vue";
import Head from "./components/header.vue";
import Back from './components/back.vue'
import Player from './pages/play'
import {mapState} from 'vuex'
export default {
  name: "App",
  components: {
    Head,
    Foot,
    Back,
    Player
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
   computed: {
    ...mapState({
      showplayer:state=>(state.count.currentIndex>=0)
    })
  },
};
</script>

<style></style>

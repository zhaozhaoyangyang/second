<template>
  <div class="">
    <van-tabbar route active-color="#fa1951">
      <van-tabbar-item to="/sy" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/fl" icon="apps-o">分类</van-tabbar-item>
      
      <van-tabbar-item to="/radio" icon="service-o">电台</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script>
// import Player from '../pages/play'

export default {
  components: {
    // Player
  },
  data() {
    return {};
  },
  // computed: {
  //   ...mapState({
  //     showplayer:state=>(state.count.currentIndex>-1)
  //   })
  // },
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped></style>

<template>
  <div class="chuangzuo">
    <img src="../../assets/disc.png" alt="" />
    <img src="../../assets/disc.png" alt="" />
    <img src="../../assets/disc.png" alt="" />
    <img src="../../assets/disc.png" alt="" />
    <img src="../../assets/disc.png" alt="" />
    <img src="../../assets/disc.png" alt="" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
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
<style scoped>
.chuangzuo {
  width: 100%;
  height: 667px;
}
.chuangzuo img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-left: 5px;
  animation: zhuan 2s linear infinite;
}
@keyframes zhuan {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

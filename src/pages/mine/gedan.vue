<template>
  <div class="gedan">
    <div class="top" v-for="v in obj" :key="v.id">
      <img :src="v.picUrl" alt="" />
      <p>{{ v.name }}</p>
    </div>
  </div>
</template>

<script>
import { reqGd } from "../../api/fl";
export default {
  components: {},
  data() {
    return {
      obj: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async Getgedan() {
      const result = await reqGd();
      // console.log(result.data);
      this.obj = result.data.result;
      // console.log(this.obj);
    },
  },
  created() {
    this.Getgedan();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.top {
  float: left;
  text-align: center;
  margin-left: 20px;
  margin-top: 10px;
}
.top img {
  width: 335px;
}
</style>

<template>
  <div class="gexingdt">
    <van-grid>
      <section v-for="item in hotList" :key="item.id">
        <img :src="item.picUrl" alt="" @click="hotprogram(item.id)" />
        <p>{{ item.rcmdtext }}</p>
      </section>
    </van-grid>
  </div>
</template>

<script>
import { reqHot } from "../../api/dt";
export default {
  components: {},
  data() {
    return {
      hotList: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async getdt() {
      const result = await reqHot({ limit: 10 });
      console.log(result.data);
      this.hotList = result.data.djRadios;
    },
  },
  created() {
    this.getdt();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
section {
  float: left;
  padding: 10px;
}
section img {
  width: 100px;
  height: 100px;
  /* padding: 10px; */
}
</style>

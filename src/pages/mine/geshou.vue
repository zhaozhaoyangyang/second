<template>
  <div class="geshou">
    <div class="singList" v-for="item in obj.slice(0, 30)" :key="item.id">
      <img :src="item.img1v1Url" alt="" @click="btn(item.id)" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import { getSinger } from "../../api/fl";
export default {
  components: {},
  data() {
    return {
      activeName: "a",
      obj: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async getGeshou() {
      const result = await getSinger();
      // console.log(result);
      this.obj = result.data.artists;
    },
  },
  created() {
    this.getGeshou();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.singList {
  float: left;
}
.singList img {
  width: 175px;
  padding: 6px;
}
</style>

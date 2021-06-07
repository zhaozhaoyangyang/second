<template>
  <div class="xiaoxi">
    <div class="top" v-for="v in obj.slice(0, 10)" :key="v.id">
      <img :src="v.al.picUrl" alt="" />
      <span>{{ v.name }}</span>
    </div>
  </div>
</template>

<script>
import { reqSixin } from "../../api/login";
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
    async getSixin() {
      const result = await reqSixin();
      console.log(result);
      this.obj = result.data.data.dailySongs;
      console.log(this.obj);
    },
  },
  created() {
    this.getSixin();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.top img {
  width: 200px;
}
.top span {
  font-size: 10px;
}
</style>

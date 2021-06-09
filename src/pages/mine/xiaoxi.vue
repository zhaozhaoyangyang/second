<template>
  <div class="xiaoxi">
    <div class="top" v-for="v in obj.slice(0, 50)" :key="v.id">
      <img :src="v.al.picUrl" alt="" />
      <span>{{ v.name }}</span>
    </div>
  </div>
</template>

<script>
import { reqSong } from "../../api/banner";
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
    async getGedan() {
      const result = await reqSong();
      console.log(result);
      this.obj = result.data.data.dailySongs;
      console.log(this.obj);
    },
  },
  created() {
    this.getGedan();
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
}
.top img {
  width: 180px;
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
}
.top span {
  font-size: 10px;
  margin-left: 5px;
}
</style>

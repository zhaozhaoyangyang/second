<template>
  <div class="geshou">
    gehsou
    <div class="singList" v-for="item in obj.slice(0, 20)" :key="item.id">
      <img :src="item.img1v1Url" alt="" @click="btn(item.id)" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import getGeshou from "../../api/login";
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
      const result = await getGeshou();
      console.log(result);
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
<style scoped></style>

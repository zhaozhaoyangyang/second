<template>
  <div class="">
    <div class="a">
      <slot name="left"><van-icon name="arrow-left"  @click="btn"/></slot>
    </div>
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

  methods: {
      btn(){
          this.$router.back()
      }
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.a {
  width: 100%;
  height: 40px;
  /* background-color: skyblue; */
  line-height: 40px;
}

</style>

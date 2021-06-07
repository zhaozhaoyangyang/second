<template>
  <div class="player">
    <NormarlPlayer v-model="play" :progress='progress'/>
    <MinePlayer v-model="play" :progress='progress' />
  </div>
</template>

<script>
import MinePlayer from "./miniplayer";
import NormarlPlayer from "./normalplayer";
export default {
  components: {
    MinePlayer,
    NormarlPlayer,
  },
  data() {
    return {
      play: false,
      progress:0.4
    };
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
<style scoped></style>

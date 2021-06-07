<template>
  <div class="player">
    <NormarlPlayer v-model="play" :progress='progress'/>
    <MinePlayer v-model="play" :progress='progress' />
    <audio ref="audio" src="http://m7.music.126.net/20210607101953/1c652b65755808858bb0319870776874/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"/>
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

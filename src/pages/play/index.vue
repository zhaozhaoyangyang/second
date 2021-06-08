<template>
  <div class="player">
    <NormarlPlayer :progress='progress'/>
    <MinePlayer :progress='progress'/>
    <audio ref="audio" :src="musicUrl" />
  </div>
</template>

<script>
import MinePlayer from "./miniplayer";
import NormarlPlayer from "./normalplayer";
import { mapGetters, mapState } from "vuex";
import axios from "axios";

export default {
  components: {
    MinePlayer,
    NormarlPlayer,
  },
  data() {
    return {
      play: false,
      musicUrl: "",
      currentTime:0,
      totalTime:0
    };
  },
  computed: {
    ...mapGetters({
      currentSong: "count/currentSong",
    }),
    ...mapState({
      playing: (state) => state.count.playing,
    }),
    id() {
      return this.currentSong.id;
    },
    progress(){
      const result = this.currentTime/this.totalTime;
      return isNaN(result)?0:result
    }
  },
  watch: {
    //监听playing
    playing(newval) {
      this.getMusic();
      this.$nextTick(() => {
        if (newval) {
          //为true播放音乐
          this.audio.play();
        } else {
          this.audio.pause();
        }
      });
    },
    //id变了重新播放
    id(newval, oldval) {
      if (!oldval) {
        return;
      }
      this.$nextTick(() => {
        this.getMusic();
        this.audio.load();
        this.audio.play();
      });
    },
  },

  methods: {
    async getMusic() {
      console.log(this.id);
      const result = await axios.get("http://localhost:3000/song/url", {
        params: {
          id: this.id,
        },
      });
      this.musicUrl = result.data.data[0].url;
    },
  },
  created() {},
  mounted() {
    //渲染完获取audio挂在this上，方便获取
    this.audio = this.$refs.audio;

    this.audio.addEventListener('canplay',()=>{
      // console.log(this.audio.duration);
      this.totalTime = this.audio.duration
    })
    this.audio.addEventListener('timeupdate',()=>{
      // console.log(this.audio.currentTime);
      this.currentTime = this.audio.currentTime
    })
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped></style>

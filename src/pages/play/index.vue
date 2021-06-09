<template>
  <div class="player">
    <NormarlPlayer
      :progress="progress"
      :currentIndex="currentIndex"
      :duration="totalTime"
      :currentTime="currentTime"
    />

    <MinePlayer :progress="progress" v-if="!fullScreen" />
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
    NormarlPlayer
  },
  data() {
    return {
      play: false,
      musicUrl: "",
      currentTime: 0,
      totalTime: 0,
      index: -1
    };
  },
  computed: {
    ...mapGetters({
      currentSong: "count/currentSong"
    }),
    ...mapState({
      playing: state => state.count.playing,
      currentIndex: state => state.count.currentIndex,
      fullScreen: state => state.count.fullScreen
    }),
    id() {
      return this.currentSong.id;
    },
    progress() {
      const result = this.currentTime / this.totalTime;
      return isNaN(result) ? 0 : result;
    }
  },
  watch: {
    //监听playing
    playing: {
      handler: function(newval) {
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
      immediate: true
    },
    //id变了重新播放
    id(newval, oldval) {
      // console.log(111);

      if (!oldval) {
        return;
      }
      this.getMusic();
      this.$nextTick(() => {
        // console.log(this.audio);
        this.audio.load();
        this.audio.play();
      });
    }
  },

  methods: {
    async getMusic() {
      const result = await axios.get("http://192.168.11.45:3000/song/url", {
        params: {
          id: this.id
        }
      });
      this.musicUrl = result.data.data[0].url;
    }
  },
  created() {},
  mounted() {
    //渲染完获取audio挂在this上，方便获取
    this.audio = this.$refs.audio;
    this.audio.addEventListener("canplay", () => {
      // console.log(this.audio.duration);
      this.audio.play();
      this.totalTime = this.audio.duration;
    });
    this.audio.addEventListener("timeupdate", () => {
      // console.log(this.audio.currentTime);
      this.currentTime = this.audio.currentTime;
      if (this.audio.currentTime == this.audio.duration) {
        this.index = this.currentIndex;
        this.index++;
        this.$store.commit("count/setCurrentIndex", this.index);
      }
    });
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {}
};
</script>
<style scoped></style>

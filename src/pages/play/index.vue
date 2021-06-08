<template>
  <div class="player">
    <NormarlPlayer  :value='playing' />
    <MinePlayer  />
    <audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id= ${id}.mp3`" />
  </div>
</template>

<script>
import MinePlayer from "./miniplayer";
import NormarlPlayer from "./normalplayer";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    MinePlayer,
    NormarlPlayer
  },
  data() {
    return {
      play: false,
      progress: 0.4
    };
  },
  computed: {


  },
  watch: {},

    ...mapGetters({
      currentSong: "count/currentSong",
      
    }),
    ...mapState({
      playing: state => state.count.playing
    }),
    id() {
      return this.currentSong.id;
    }
  },

  watch: {
    //监听playing
    playing(oldval, newval) {
      this.$nextTick(() => {
        if (!oldval) {
          return;
        }
        this.$nextTick();
        if (newval) {
          //为true播放音乐
          this.audio.play();
        } else {
          this.audio.pause();
        }
      });
    },
    //id变了重新播放
    id(){
      this.$nextTick(()=>{
        this.audio.load();
        this.audio.play();
      })
        
    }
  },


  methods: {
    
  },
  created() {},
  mounted() {
    //渲染完获取audio挂在this上，方便获取
    this.audio = this.$refs.audio;
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {}
};
</script>
<style scoped></style>

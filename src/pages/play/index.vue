<template>
  <div class="player">
    <NormarlPlayer  />
    <MinePlayer />
    <audio ref="audio" :src="musicUrl"/>
  </div>
</template>

<script>
import MinePlayer from "./miniplayer";
import NormarlPlayer from "./normalplayer";
import { mapGetters, mapState } from "vuex";
import axios from 'axios';

export default {
  components: {
    MinePlayer,
    NormarlPlayer,
  },
  data() {
    return {
      play: false,
      progress: 0.4,
      musicUrl:'',
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
  },
  watch: {
    //监听playing
    playing( newval,oldval) {
      console.log(oldval,newval);
      console.log(this.playing);
      
      this.$nextTick(() => {
         this.getMusic()
        if (newval) {
          //为true播放音乐
          this.audio.play();
        } else {
          this.audio.pause();
        }
      });
    },
    //id变了重新播放
    id() {

      this.$nextTick(() => {
        this.getMusic()
        this.audio.load();
        this.audio.play();
      });
    },
  },

  methods: {
    async getMusic(){
       console.log(this.id);
      const result = await axios.get('http://localhost:3000/song/url',{
        params:{
          id:this.id
        }
      })
      this.musicUrl=result.data.data[0].url;
    }
  },
  created() {
   
  },
  mounted() {
    //渲染完获取audio挂在this上，方便获取
    this.audio = this.$refs.audio;
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped></style>

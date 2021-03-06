export default {
    radioIdList(state, id) {
      state.radioId = id;
    },
  //点击歌曲时要做的
  selectSongByIndex(state, payload) {
    /* 
         payload为
         index当前点击歌曲下标
         list当前歌单歌曲列表
         list格式同state中的currentSong
      */
    console.log(payload);
    state.currentIndex = payload.index;
    state.sequencePlayList = [...payload.list];
    state.playing = true;
  },

  setPlaying(state, payload) {
    state.playing = payload;
  },
  setFullScreen(state, payload) {
    state.fullScreen = payload;
  },
  setCurrentIndex(state, payload) {
    state.currentIndex = payload
  }
};

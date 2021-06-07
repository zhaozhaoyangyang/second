const playMode = {
  //播放模式
  sequence: 0, //顺序
  loop: 1, //单循
  random: 2, //随机
};
export default {
  radioId: [],

  // play组件共享数据
  fullScreen: false, //是否显示大播放器
  playing: false, //是否正在播放
  playList: [], //播放列表,
  sequencePlayList: [], //顺序歌曲列表
  mode: playMode.sequence,
  currentIndex: -1, //当前播放音乐在歌曲列表的下标
  currentSong: {}, //当前歌曲信息
};

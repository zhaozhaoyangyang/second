const playMode = {
  //播放模式
  sequence: 0, //顺序
  loop: 1, //单循
  random: 2, //随机
  radioIdList:[]
};
export default {
  radioId: [],

  // play组件共享数据
  fullScreen: false, //是否显示大播放器
  playing: false, //是否播放   点击歌曲时设置为true
  playList: [], //播放列表,
  sequencePlayList: [], //顺序歌曲列表
  mode: playMode.sequence,
  currentIndex: -1, //当前播放音乐在歌曲列表的下标
  currentSong: {}, //当前歌曲信息
};
/*  需要上传 currentSong  currentIndex sequencePlayList
 currentSong 格式
{
  al:{
  name,//歌曲名
  picUrl,//歌曲图片
  },
  ar,作者
  id,歌曲id
}

过滤
xxx.map(item=>{
  id:item.id,
  name:item.name,
  ar:item.ar.map(v=>v.name).join('/),
  al:{
    name:item.al.name,
    picUrl:item.al.picUrl
  }
})

*/

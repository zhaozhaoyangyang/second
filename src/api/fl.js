import { post } from '../utils/request'
//歌手列表
export const getSinger = () => post('/top/artists')
//获取歌手热门50歌曲
export const reqHotSings = (id) =>post('/artist/top/song',id)
//获取歌手详情
export const reqGetSinger = (id) =>post('/artist/detail',id)
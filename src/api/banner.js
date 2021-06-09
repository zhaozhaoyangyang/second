import {get} from '../utils/request'
//轮播图
export const reqBanner = () =>get('/banner')
//每日推荐歌曲
export const reqSong = () =>get('/recommend/songs')
//每日推荐歌单
export const reqSource = (params) =>get('/personalized',params)
//每日推荐歌单
export const reqnewsong = (params) =>get('/personalized/newsong',params)
//热门核弹分类
export const reqHost = () =>get('/playlist/hot')
//榜单内容摘要
export const reqDetail = () =>get('/toplist/detail')
//歌手帮
export const reqSinger = () =>get('/toplist/artist')
//根据歌单id 获取歌单详情
export const reqDynamic = (params) =>get('/playlist/detail',params)
//根据歌曲id 获取歌曲详情
export const reqonesong = (params) =>get('/song/detail',params)
//获取热门歌手列表
export const reqartists = (params) =>get('/top/artists',params)
//获取热门歌手列表
export const reqartli = (params) =>get('/artist/songs',params)
//获取歌手详情
export const reqartist = (params) =>get('/artist/detail',params)
//获取所有榜单
export const reqtoplist = () =>get('/toplist')

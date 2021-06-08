import { post } from "../utils/request";
//歌手列表
export const getSinger = () => post("/top/artists");
//获取歌手歌曲
// export const reqsings = (id) => post("/artist/songs?id=" + id);

// export const getSinger = () => post("/top/artists");
//获取歌手热门50歌曲
// export const reqHotSings = (id) => post("/artist/top/song", id);
//获取歌手详情
export const reqGetSinger = (id) => post("/artist/detail", id);
//获取歌手的mv
export const reqGetMv = (id) => post("/artist/mv", id);
//获取歌手专辑
export const reqZj = (id) => post("/artist/album", id);
//歌手描述
export const reqMs = (id) => post("/artist/desc", id);
//歌单
export const reqGd = (data) => post("/personalized", data);

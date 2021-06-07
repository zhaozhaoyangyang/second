import { get } from "../utils/request";
//手机登录
export const reqLogin = (data) => get("/login/cellphone", data);
//邮箱登录
export const reqEmailLogin = (data) => get("/login", data);
//歌单
export const reqSixin = (data) => get("/recommend/songs", data);
//歌手列表

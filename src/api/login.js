import { get } from "../utils/request";
//手机登录
export const reqLogin = (data) => get("/login/cellphone", data);
//邮箱登录
export const reqEmailLogin = (data) => get("/login", data);
//每日歌单
// export const reqSixin = (data) => get("/recommend/songs", data);
// //用户详情
export const reqYonghu = (data) => get("/user/account", data);
//检测手机号是否已经注册
export const reqZhuce = (data) => get("/cellphone/existence/check", data);

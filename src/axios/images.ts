import axios from './intercept';

// 获取 banner 图
export const getBannerImgs = (type: string) => axios.get(`api/images/banner/${type}`);

// 获取图片链接地址
export const getImgs = (type: string) => axios.get(`api/images/${type}`);
import axios from './intercept';


// 按类型获取新闻
export const getNewsList = (type: string) => axios.get(`api/news/${type}`);


// 获取所有新闻
export const getNewsAll = () => axios.get(`api/news`);
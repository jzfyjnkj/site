import axios from './intercept';

// 获取
export const getRecruit = () => axios.get(`api/recruit`);


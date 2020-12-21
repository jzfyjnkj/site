import axios from './intercept';

// 获取列表
export const getSystemList = () => axios.get(`api/system`);

// 获取内容
export const getSystemContent = (str: string | number) => axios.get(`md/system/${str}.md`);
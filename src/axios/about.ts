import axios from './intercept';

/**
 * 获取公司简介
 */
export const getIntroduce = () => axios.get(`api/introduce`);

/**
 * 获取联系信息
 */
export const getCancact = () => axios.get(`api/cancact`);
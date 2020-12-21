import axios from './intercept';

/**
 * 获取文章
 */
export const getArticle = (id: string) => axios.get(`api/article/${id}`);
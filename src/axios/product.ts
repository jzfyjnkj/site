import axios from './intercept';

/**
 * 获取所有产品
 */
export const getProductAll = () => axios.get(`api/product`);

/**
 * 获取所有产品
 */
export const getProductType = () => axios.get(`api/product/type`);

/**
 * 按类型查询产品
 */
export const getProduct = (type: any) => axios.get(`api/product/form`, {
    params: {
        type,
    }
});
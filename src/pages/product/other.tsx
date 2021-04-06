import { getProduct, getProductType } from '../../axios/product';
import { ProductBtn } from '../../Components/product/productBtn';
import { ProductList } from '../../Components/product/productList';
import Head from 'next/head';

const Product = ({list}: any) => {

    const params2 = {
        list,
    }
    return (<div className="product-unit">
      <Head>
        <title>产品中心_瓦斯发电机余热回收_气体余热回收</title>
        <meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"/>
      </Head>
    <ProductBtn />
    
    <ProductList {...params2}/>
  </div>)
}

export default Product;

export async function getServerSideProps () {
    const list = await getProduct('其他');

    return {
		props: {
        list: list.data,
		}
	}
}
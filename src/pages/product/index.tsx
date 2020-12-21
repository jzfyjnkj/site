import { getProduct, getProductType } from '../../axios/product';
import { ProductBtn } from '../../Components/product/productBtn';
import { ProductList } from '../../Components/product/productList';
import Head from 'next/head';
import { hm } from '../../baiduHM';
import { useEffect, useState } from 'react';

const Product = ({ list }: any) => {

    const params = {
        list,
    }

    const [cha, setCha] = useState('')
    useEffect(() => {
        setCha(hm)
    })
    return (<div className="product-unit">
      <Head>
        <title>产品中心_电磁热水炉</title>
        <meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"/>
        <meta name="description" content="晋中釜源科技主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司"/>
        <script dangerouslySetInnerHTML={{__html: cha}}></script>
      </Head>
      <ProductBtn />
      
      <ProductList {...params}/>
  </div>)
}

export default Product;

export async function getServerSideProps () {
    const list = await getProduct('电磁热水炉');

    return {
		props: {
            list: list.data,
		}
	}
}
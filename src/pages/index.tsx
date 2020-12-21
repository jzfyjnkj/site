import Head from 'next/head';
import { LoopReplaceImg } from '../Components/loopReplaceImg';
import { HomeNews } from '../Components/home/homeNews';
import { HomeProduct } from '../Components/home/homeProduct';
import { HomeContact } from '../Components/home/homeContact';
import { HomeAbout } from '../Components/home/homeAbout';
import { HomeLink } from '../Components/home/homeLink';
import { getBannerImgs } from '../axios/images';
import { getNewsAll } from '../axios/newsList';
import { getProductAll } from '../axios/product';
import { getCancact, getIntroduce } from '../axios/about';
import { useEffect, useState } from 'react';
import { hm } from '../baiduHM';

const Home = ({ homeImgs, product, news, cancact, introduce }: any) => {
    // console.log(news, cancact, introduce)
    let params1 = {
        loopTime: 4000,
        imgs: homeImgs
    }
    let params2 = {
        product,
    }
    let params3 = {
        phone: cancact.telephone
    }
    let params4 = {
        news,
    }

    const [cha, setCha] = useState('')
    useEffect(() => {
        setCha(hm)
    })
    return (<div>
        <Head>
            <title>电磁锅炉_电锅炉供暖_晋中釜源节能科技有限公司</title>
            <meta name="keywords" content="山西电锅炉,电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"></meta>
            <meta name="description" content="主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司"></meta>
            <script dangerouslySetInnerHTML={{__html: cha}}></script>
        </Head>
        <LoopReplaceImg {...params1} />
        <HomeProduct {...params2} />
        <HomeContact {...params3} />
        <HomeAbout />
        <HomeLink />
        <HomeNews {...params4} />
    </div>)
}
export default Home;

// 该函数只在服务端运行，运行在组件渲染之前
export async function getStaticProps () {
    const homeImgs = await getBannerImgs('home');
    const news = await getNewsAll();
    const cancact = await getCancact();
    const introduce = await getIntroduce();
    const product = await getProductAll();
    return {
        props: {
            homeImgs: homeImgs.data,
            news: news.data,
            cancact: cancact.data[0],
            introduce: introduce.data,
            product: product.data,
        }
    }
}

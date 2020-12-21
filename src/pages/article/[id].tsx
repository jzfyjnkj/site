import Head from 'next/head';
import { getNewsAll } from '../../axios/newsList';
import { getArticle } from '../../axios/article';
import { getProductAll } from '../../axios/product';
import { interpretMd } from '../../util/mdExplain';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useRouter from 'next/router';


const Article = ({ list, text, title }: any) => {
    const router: any = useRouter.router;
    const [index, setIndex] = useState()
    
    useEffect(() => {
        const {id} = router.query;
        setIndex(id);
    })
    
    return (<div>
        <Head>
			<title>{title}</title>
			<meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"/>
			<meta name="description" content="晋中釜源科技主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司"/>
		</Head>
        <div className='leayer' style={{maxWidth: '1200px', marginTop: '20px'}}
            dangerouslySetInnerHTML={{__html: text}}
        ></div>

    </div>)
}
export default Article;

// 该函数只在服务端运行，运行在组件渲染之前
export async function getStaticProps ({ params }: any) {
    const text: any = await getArticle(params.id);
    return {
        props: {
            text: interpretMd(text),
            title: text.match(/#\s.{0,100}?(\n|\r\n)/)[0].slice(2, -1),
        }
    }
}

export async function getStaticPaths () {
    const { data: data1 } = await getNewsAll();
    const { data: data2 } = await getProductAll();

    const paths = data1.map((val: any) => ({
        params: {id: String(val.time)}
    }))
    data2.forEach((val: any) => {
        paths.push({params: {id: val.link}})
    })
    // console.log(paths)
    return {
        paths,
        fallback: false
    }
}
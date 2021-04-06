import Head from 'next/head';
import { NewsBtn } from '../../Components/news/newsBtn';
import { NewsList } from '../../Components/news/newsList';
import { LoopReplaceImg } from '../../Components/loopReplaceImg';
import { getBannerImgs } from '../../axios/images';
import { getNewsList } from '../../axios/newsList';
import { hm } from '../../baiduHM';
import { useEffect, useState } from 'react';

const News = ({list, bannerImgs}: any) => {

	const params = {
        imgs: bannerImgs
	}
	
	const [cha, setCha] = useState('')
    useEffect(() => {
        setCha(hm)
    })
	return (<div>
		<Head>
			<title>晋中釜源节能科技有限公司_新闻资讯</title>
			<script dangerouslySetInnerHTML={{__html: cha}}></script>
		</Head>

		<LoopReplaceImg {...params} />

		<div className='leayer'>
			<NewsBtn />
			<NewsList {...list}/>
		</div>
	</div>)
}
export default News;

export async function getServerSideProps () {
	const list = await getNewsList('industry');
	const bannerImgs = await getBannerImgs('news');
    return {
		props: {
			list,
			bannerImgs: bannerImgs.data
		}
	}
}
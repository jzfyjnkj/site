import Head from 'next/head';
import { NewsBtn } from '../../Components/news/newsBtn';
import { NewsList } from '../../Components/news/newsList';
import { LoopReplaceImg } from '../../Components/loopReplaceImg';
import { getBannerImgs } from '../../axios/images';
import { getNewsList } from '../../axios/newsList';

const News = ({list, bannerImgs}: any) => {

	const params = {
        imgs: bannerImgs
    }
	return (<div>
		<Head>
			<title>晋中釜源节能科技有限公司_公司新闻</title>
			<meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"/>
			<meta name="description" content="晋中釜源科技主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司"/>
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
	const list = await getNewsList('problem');
	const bannerImgs = await getBannerImgs('news');
    return {
		props: {
			list,
			bannerImgs: bannerImgs.data
		}
	}
}


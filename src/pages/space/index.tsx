import style from './space.module.scss';
import { getImgs, getBannerImgs } from '../../axios/images';
import { LoopReplaceImg } from '../../Components/loopReplaceImg';
import Head from 'next/head';

const Space = ({imgs, bannerImgs}: any) => {

    const params = {
        imgs: bannerImgs
    }
    // console.log(imgs)
    return (<div className={style.space}>
        <Head>
			<title>晋中釜源节能科技有限公司_公司环境</title>
			<meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"/>
			<meta name="description" content="晋中釜源科技主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司"/>
		</Head>

        <LoopReplaceImg {...params} />

        <div className={[style.wrap, 'leayer'].join(' ')}>
            <ul className="clearfix">
                {imgs.map((val: any, index: number) => <li key={index}>
                    <span>
                        <img src={val} alt=""/>
                    </span>
                </li>)}
            </ul>
        </div>
    </div>)
} 

export default Space;

export async function getStaticProps () {
    const bannerImgs = await getBannerImgs('space');
    const imgs = await getImgs('space');
    return {
        props: {
            imgs: imgs.data,
            bannerImgs: bannerImgs.data
        }
    }
}
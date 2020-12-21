import style from './about.module.scss';
import { getIntroduce, getCancact } from '../../axios/about';
import { getBannerImgs } from '../../axios/images';
import { LoopReplaceImg } from '../../Components/loopReplaceImg';
import Head from 'next/head';

const About = ({introduce, cancact, bannerImgs}: any) => {

    const params = {
        imgs: bannerImgs
    }
    const trim = (text: string) => text.replace(/\s*/g, '');

    return (<div>
        <Head>
            <title>晋中釜源节能科技有限公司_公司简介</title>
            <meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收" />
            <meta name="description" content="晋中釜源科技主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司" />
        </Head>

        <LoopReplaceImg {...params} />

        <div className={[style.about, 'leayer'].join(' ')}>
            <h2 id="1">公司简介</h2>
            <div className={style.text}>
                {introduce.map((val: any) => <p key={val.id}>{val.text}</p>)}
            </div>
            <h2 id="2">联系我们</h2>
            <div>
                <p><span>联系电话：</span> <a href={`tal:${trim(cancact.phone)}`}>{cancact.phone}</a></p>
                <p><span>联系人：</span>{cancact.name}</p>
                <p><span>公司地址：</span> {cancact.address}</p>
            </div>
            <div className={style.map}>
                <iframe width="100%" height="500px" src="https://www.amap.com/place/B0FFL10IKY" frameBorder="0"></iframe>
            </div>
        </div>
    </div>)
}

export async function getStaticProps () {
    const bannerImgs = await getBannerImgs('about');
    const introduce = await getIntroduce();
    const cancact = await getCancact();
    return {
        props: {
            introduce: introduce.data,
            cancact: cancact.data[0],
            bannerImgs: bannerImgs.data,
        }
    }
}


export default About;
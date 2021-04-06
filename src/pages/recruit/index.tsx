import style from './recruit.module.scss';
import { getRecruit } from '../../axios/recruit';
import { getBannerImgs } from '../../axios/images';
import { LoopReplaceImg } from '../../Components/loopReplaceImg';
import Head from 'next/head';

const Recruit = ({list, bannerImgs}: any) => {
    
    const split = (text: string) => text.split('\n');

    const params = {
        imgs: bannerImgs
    }

    return (<div>
        <Head>
			<title>晋中釜源节能科技有限公司_人才招聘</title>
		</Head>

        <LoopReplaceImg {...params} />
        <div className={[style.recruit, 'leayer'].join(' ')}>
            <ul className="title clearfix">
                <li>岗位招聘</li>
                <li>招聘人数</li>
                <li>招聘要求</li>
                <li>薪资待遇</li>
            </ul>
            {list.map((val: any) => <ul className='clearfix' key={val.id}>
                <li>{val.post}</li>
                <li>{val.num}</li>
                <li>{split(val.ask).map((item: any, i: number) => <p key={i}>{item}</p>)}</li>
                <li>{val.money}</li>
            </ul>)}
        </div>
    </div>)
}

export async function getStaticProps () {
    const bannerImgs = await getBannerImgs('recruit');
    const list = await getRecruit();
    return {
        props: {
            list: list.data,
            bannerImgs: bannerImgs.data
        }
    }
}

export default Recruit;
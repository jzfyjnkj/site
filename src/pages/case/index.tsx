import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { getImgs, getBannerImgs } from '../../axios/images';
import { LoopReplaceImg } from '../../Components/loopReplaceImg';
import { waterfall } from '../../util/waterfall';

const Case = ({list, bannerImgs}: any) => {

	const params = {
        imgs: bannerImgs
    }
	
    useEffect(() => {
        waterfall(list);
	})
	
	return (<div className="wrapper" style={{position: 'relative'}}>
    
		<Head>
			<title>晋中釜源节能科技有限公司_客户案例</title>
			<meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"/>
			<meta name="description" content="晋中釜源科技主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司"/>
		</Head>

		<LoopReplaceImg {...params} />

		<div className='leayer'>
			<strong>经典案例</strong>

			<div id='waterfall-root' style={{position: 'relative'}}></div>

		</div>

		<style jsx>{`
			strong {
				display: inline-block;
				border-left: 6px solid;
				padding-left: 10px;
				font-size: 24px;
				color: #0890e1;
				margin: 12px 0;
			}
		`}</style>
  </div>)
}
export default Case;

export async function getServerSideProps () {
	const bannerImgs = await getBannerImgs('case');
	const list = await getImgs('case');
    return {
		props: {
			list: list.data,
			bannerImgs: bannerImgs.data
		}
	}
}
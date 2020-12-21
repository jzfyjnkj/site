import Head from 'next/head';
import useRouter from 'next/router';
import { useEffect, useLayoutEffect, lazy } from 'react';


const System = ({ list, text }: any) => {
    const router: any = useRouter.router;
    
    useEffect(() => {
        if (router.pathname === "/system") {
            router.replace('/system/1')
        }
    })
    return (<Head>
        <title>晋中釜源节能科技有限公司_集控系统</title>
        <meta name="keywords" content="电磁锅炉,电锅炉,电磁热风炉,蒸汽发生器,空压机余热回收"/>
        <meta name="description" content="晋中釜源科技主要从事变频电磁锅炉，电磁热风炉，电蒸汽发生器，空压机余热回收，矿井令凝水余热回收的研发、生产、销售及售后为一体的节能环保公司"/>
    </Head>)
}
export default System;

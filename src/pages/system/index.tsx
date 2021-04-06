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
    </Head>)
}
export default System;

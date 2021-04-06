import Head from 'next/head';
import { getSystemList, getSystemContent } from '../../axios/system';
import { interpretMd } from '../../util/mdExplain';
import Link from 'next/link';
import style from './system.module.scss';
import './md.module.scss';
import { useState, useEffect } from 'react';
import useRouter from 'next/router';


const System = ({ list, text, title }: any) => {
    const router: any = useRouter.router;
    const [index, setIndex] = useState();
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        const {id} = router.query;
        setIndex(id);
    })
    
    return (<div className={[style.system_wrap, 'leayer', 'clearfix'].join(' ')}>

        <Head>
			<title>{title}_釜源节能科技</title>
		</Head>

        <div className={[style.list, show ? style.active : '', 'fl'].join(' ')}>
            <ul>
                {list.map((val: any) => (
                    <li key={val.id} className={index == val.id ? style.active : ''}>
                        <Link href={`/system/${val.id}`}><a onClick={() => {
                            setShow(false)
                        }}>{val.title}</a></Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className={style.show_list} onClick={() => {
            setShow(!show);
        }}></div>

        <div className={[style.content, 'fl'].join(' ')}
            dangerouslySetInnerHTML={{__html: text}}
        ></div>

    </div>)
}
export default System;

// 该函数只在服务端运行，运行在组件渲染之前
export async function getStaticProps ({ params }: any) {
    const list = await getSystemList();
    const text: any = await getSystemContent(params.id);
    return {
        props: {
            list: list.data,
            text: interpretMd(text),
            title: text.match(/#\s.{0,100}?(\n|\r\n)/)[0].slice(2, -1),
        }
    }
}

export async function getStaticPaths () {
    const {data} = await getSystemList();
    const paths = data.map((val: any) => ({
        params: {id: val.id + ''}
    }))

    return {
        paths,
        fallback: false
    }
}
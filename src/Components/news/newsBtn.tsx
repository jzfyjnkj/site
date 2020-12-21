import Link from 'next/link';
import useRouter from 'next/router';
import { useEffect, useLayoutEffect, useState } from 'react';
import style from './newsBtn.module.scss';

export function NewsBtn () {
    const list = [
        { link: '/news', text: '行业新闻' },
        { link: '/news/company', text: '公司新闻' },
        { link: '/news/answer', text: '疑难解答' },
    ]
    const [ active, setActive ] = useState()
    const router: any = useRouter.router;
    
    useEffect(() => {
        let pathname = router.asPath;
        setActive(pathname)
    })
    
    return (<ul className={[style.wrap, 'clearfix'].join(' ')}>
        {list.map((val, index) => <li key={index}>
            <Link href={val.link} >
                <a className={active === val.link ? style.active : ''}>{val.text}</a>
            </Link>
        </li>)}
    </ul>)
}
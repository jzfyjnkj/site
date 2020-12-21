import style from './productList.module.scss';
import Link from 'next/link';
import useRouter from 'next/router';
import { useEffect, useState } from 'react';

export function ProductBtn () {
    const router = useRouter.router;

    const list = [
        {link: '/product', type: '电磁热水炉'},
        {link: '/product/zhengqi', type: '电蒸汽发生器'},
        {link: '/product/refeng', type: '电磁热风炉'},
        {link: '/product/kongyaji', type: '空压机余热回收'},
        {link: '/product/other', type: '其他'},
    ]

    const [active, setActive] = useState('');

    useEffect(() => {
        const { asPath }: any = router;
        setActive(asPath)
    })
    return (<div className="btns leayer">
        {list.map((val: any, index: number) => <Link key={index} href={val.link}>
            <a className={active === val.link ? 'active' : ''}>{val.type}</a>
        </Link>)}

        <style jsx>{`
            a{
                display: inline-block;
                margin: 12px;
                color: black;
            }
            a.active{
                color: #4385e8;
            }
        `}
        </style>
    </div>)
}
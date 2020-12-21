import Link from 'next/link';
import useRouter from 'next/router';
import { useState, useEffect } from 'react';
import style from './navigation.module.scss'

export function Navigation () {
    const router: any = useRouter.router;   // 路由信息
    const [ asPath, setAsPath] = useState('');  // 匹配路由地址
    const [ show, setShow ] = useState(false);  // 是否显示遮罩

    // 动态路由
    const [ navList, setNavList ] = useState([
        {name: '网站首页', link: '/'},
        {name: '产品中心', link: '/product', children: [
            {name: '产品中心', link: '/product'},
            {name: '集控系统', link: '/system'},
        ]},
        {name: '新闻资讯', link: '/news'},
        {name: '客户案例', link: '/case'},
        {name: '环境展示', link: '/space'},
        {name: '人才招聘', link: '/recruit'},
        {name: '关于我们', link: '/about'},
    ]);
    useEffect(() => {
        // 拿到 pathname 地址
        let pathname = router.asPath;
        const reg = pathname.match(/\?|\#|[^,]\//);
        if (reg) {
            pathname = pathname.slice(0, reg.index + 1);
        }
        setAsPath(pathname);
    })

    // 初始化 PC 端导航栏
    function initNav1 (array: any[]) {
        const arr: any[] = [];
        array.forEach((val, index) => {
            arr.push(<li key={index} className={asPath === val.link ? style.active : ''} >
                <Link href={val.link}><a>{val.name}</a></Link>
                {val.children ? 
                    <ul>{initNav1(val.children)}</ul>
                : null}
            </li>)
        })
        return arr;
    }

    // 初始化移动端端导航栏
    function initNav2 () {
        const arr1: any[] = [], arr2: any[] = [];
        navList.filter((val, index) => {
            if (val.children) {
                val.children.forEach(val2 => {
                    arr1.push(val2);
                })
            } else {
                arr1.push(val);
            }
        });
        // console.log(arr1);
        arr1.forEach((val, index) => {
            arr2.push(<li key={index} className={asPath === val.link ? style.active : ''} >
                <Link href={val.link}><a onClick={() => setShow(false)} >{val.name}</a></Link>
            </li>);
        })
        return arr2;
    }

    return (<>
        <div className={style.navigation_bar}>
            <nav className={[style.wrap, 'leayer'].join(' ')}>
                <div className={[style.logo, 'fl'].join(' ')}>
                    <Link href='/'><img src="/img/logo2.png" alt="晋中釜源科技logo" /></Link>
                </div>
                <ul className={[style.nav, 'fr'].join(' ')}>
                    {initNav1(navList)}
                </ul>
                <i className={[style.close, 'iconfont'].join(' ')} onClick={() => {
                    setShow(true)
                }}></i>
            </nav>
            <ul className={[style.mask, show ? style.active : ''].join(' ')}>
                {initNav2()}
                <i className={[style.close, 'iconfont'].join(' ')} onClick={() => {
                    setShow(false)
                }}></i>
            </ul>
        </div>
    </>)
}
import style from './homeProduct.module.scss';
import Link from 'next/link';

export function HomeProduct({product}: any) {

    return (<div className={[style.home_product, 'leayer'].join(' ')}>
        <strong>产品中心
            <Link href="/product" ><a className="fr">查看全部 <i className="iconfont"></i></a></Link>
        </strong>
        <hr />
        <ul className={[style.product_list, 'clearfix'].join(' ')}>
            {product.map((val: any) => <li key={val.id}>
                <span>
                    <img src={val.src} />
                    <div className={style.mask}>
                        <Link href={`/article/${val.link}`}><a>{val.name} {val.kw}</a></Link>
                    </div>
                </span>
            </li>)}

        </ul>
    </div>)
}
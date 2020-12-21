import style from './productList.module.scss';

export function ProductList({ list }: any) {

    return (<ul className={style.product_list}>
        {list.map((val: any) => <li key={val.id}>
            <div className='clearfix leayer'>
                <div className={[style.wrap, 'clearfix'].join(' ')}>
                    <div className={style.img}>
                        <img src={val.src} />
                    </div>
                    <div className={style.content}>
                        <h2>{val.name}</h2>
                        <h4>{val.trait}</h4>
                        <p className="kw">{val.kw}</p>
                        <p>{val.capacity}</p>
                        <a href={`/article/${val.link}`}>了解详情 <i className="iconfont"></i></a>
                        <p className={style.text}>{val.text}</p>
                    </div>
                </div>
            </div>
        </li>)}
    </ul>)
}
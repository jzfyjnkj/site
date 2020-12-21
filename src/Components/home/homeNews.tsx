import style from './homeNews.module.scss';
import Link from 'next/link';

export function HomeNews ({ news }: any) {

    const list = news.slice(0, 3);

    return (<div className={style.home_news}>
        <div className={[style.wrap, 'leayer'].join(' ')}>
            <strong><Link href="/news"><a>新闻动态</a></Link></strong>
            <hr />
            <ul className={[style.news_list, 'clearfix'].join(' ')}>
                {list.map((val: any) => <li key={val.id}>
                    <h2><Link href={`/article/${val.time}`}><a>{val.title}</a></Link></h2>
                    <p>{val.content}</p>
                    <p className={style.timer}><i className="iconfont"></i>{val.time}</p>
                </li>)}
            </ul>
        </div>
    </div>) 
}

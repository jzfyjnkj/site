import Link from 'next/link';
import style from './newsList.module.scss';

export function NewsList({ data }: any) {

    return (<div className="news-content">
        <ul className="list">
            {data.map((val: any) => <li key={val.id}>
                <p className="time">{val.time}</p>
                <div className="box">
                    <h2><Link href={`/article/${val.time}`}><a>{val.title}</a></Link></h2>
                    <p>{val.content}</p>
                </div>
            </li>)}
        </ul>
    </div>)
}
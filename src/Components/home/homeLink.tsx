import style from './homeLink.module.scss';

export function HomeLink () {
    return (<div className={style.home_link}>
        <div className="wrap leayer">
        <strong>友情链接:
            <a href="https://shop3479q79995898.1688.com/" target="block">阿里店铺</a>
        </strong>
        </div>
    </div>)
}
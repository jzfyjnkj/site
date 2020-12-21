import style from './homeContact.module.scss';

export function HomeContact ({phone}: any) {
    
    return (<div className={style.home_contact}>
        <div className={style.mask}></div>
        <div className={[style.wrap, 'leayer', 'clearfix'].join(' ')}>
            <div className={[style.img, 'fr'].join(' ')}>
                <img src="/img/space2.jpg" alt="旗帜" />
            </div>
            <div className={style.box}>
                <strong className={style.title}>选择釜源，与你成为最好的伙伴！</strong>
                <hr />
                <p className={style.text}><i className="iconfont"></i> 服务热线：
                    <strong><a href={`tel:${phone}`}>{phone}</a></strong>
                </p>
            </div>
        </div>
    </div>)
}
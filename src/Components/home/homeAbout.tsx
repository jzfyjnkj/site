import style from './homeAbout.module.scss';

export function HomeAbout () {

    return (<div className={[style.home_about, 'leayer'].join(' ')} >
        <strong>企业简介</strong>
        <hr />
        <div className={[style.wrap, 'clearfix'].join(' ')}>
            <div className={[style.left, 'fl'].join(' ')}>
                <span></span>
                <img src="/img/space1.jpg" alt="山西综改示范区晋中开发汇通智能制造产业园" />
            </div>
            <div className={[style.right, 'fr'].join(' ')}>
                <div className={style.content}>
                    <h2>晋中釜源节能科技</h2>
                    <p>晋中釜源节能科技有限公司，是一家从事环保节能设备研发、设计、制造、销售、服务为一体的高新技术企业。我公司坐落于山西示范区晋中开发区汇通产业园区。本公司不断吸纳新思维，加大科研创新，旨在为企业提供先进的技术、优质的产品和更佳的节能解决方案，帮助企业节约成本，提高用户企业能源利用率，降低污染排放，努力为企业及社会创造更多的价值。针对目前国家“煤、气改电”共造蓝天工程，我公司自主研发模块式变频：电磁采暖炉、电磁热风炉、电磁洗浴热水炉、电磁蒸汽发生器...</p>
                </div>
            </div>
        </div>
    </div>)
}
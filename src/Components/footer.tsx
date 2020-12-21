import { getImgs } from '../axios/images';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Footer (prop: any) {
    return (<footer className="footer">
        <ul className="wrap leayer clearfix">
            <li>
                <span className="title">关于我们</span>
                <ul>
                    <li><Link href="/about#1"><a>企业简介</a></Link></li>
                    <li><Link href="/space"><a>环境展示</a></Link></li>
                    <li><Link href="/case"><a>客户案例</a></Link></li>
                    <li><Link href="/about#2"><a>联系我们</a></Link></li>
                </ul>
            </li>
            <li>
                <span className="title">快捷通道</span>
                <ul>
                    <li><Link href="/recruit"><a>人才招聘</a></Link></li>
                    <li><Link href="/news"><a>媒体报道</a></Link></li>
                    <li><a href="https://shop3479q79995898.1688.com/" target="block">1688店铺</a></li>
                </ul>
            </li>
            <li>
                <span className="title">产品分类</span>
                <ul>
                    <li><Link href="/article/reshuilu1"><a>变频电磁采暖炉</a></Link></li>
                    <li><Link href="/article/zhengqi1"><a>电蒸汽发生器</a></Link></li>
                    <li><Link href="/article/kongyaji1"><a>空压机余热回收</a></Link></li>
                    <li><Link href="/article/refenglu1"><a>变频电磁热风炉</a></Link></li>
                </ul>
            </li>
            <li>
                <div className="consult">
                    <h3><i className="iconfont"></i> <span>联系电话：</span><a href="tel:13834860003">138 3486 0003</a></h3>
                    <h3><i className="iconfont"></i> <span>服务热线：</span><a href="tel:03543070303">0354-3070303</a></h3>
                    <p><i className="iconfont"></i> <span>邮箱：</span>fuyuankeji888@163.com</p>
                    <p><i className="iconfont"></i> <span>公司地址：</span>山西综改示范区晋中开发区汇通产业园</p>
                    <p><i className="iconfont"></i> <span>公众号：</span>
                        <img src="/img/qr.jpg" alt="釜源锅炉_公众号二维码" />
                    </p>
                </div>
            </li>
            <li className="copyright">
                <p><span>备案号：</span>晋ICP备17008872号</p>
                <p><span>版权所有：</span>晋中釜源节能科技有限公司</p>
                <p><span>技术支持：</span>晋中釜源节能科技</p>
            </li>
        </ul>
    </footer>)
}




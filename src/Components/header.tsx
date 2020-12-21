import Link from 'next/link';

export function Header() {
    return (<header>
        <div className="wrap leayer clearfix">
            <div className="fl">
                <span>您好，欢迎访问</span><h1><Link href="/"><a>晋中釜源节能科技有限公司</a></Link></h1>
            </div>
            <div className="fr">
                <span>联系电话：</span><a href="tel:13834860003">138 3486 0003</a>
            </div>
        </div>
    </header>)
}

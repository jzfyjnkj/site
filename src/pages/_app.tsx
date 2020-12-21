// 页面模板

import '../scss/reset.scss';
import '../scss/common.scss';
import '../scss/header.scss';
import '../scss/footer.scss';
import '../scss/myMarkdown.scss';

import { Header } from '../Components/header';
import { Navigation } from '../Components/navigation';
import { Footer } from '../Components/footer';

const App = ({Component, pageProps}: any) => {
    
    return (<>
        <Header />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
    </>)
}
export default App;

export function getServerSideProps () {
    console.log(1234567)
}

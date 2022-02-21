import Head from 'next/head'

import siteConfig from '../config/site.json'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default function Home() {
  return (
    <div className="dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>{siteConfig.title}</title>
        <script dangerouslySetInnerHTML={{__html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?043ea612e2b606b4071e35f85bc057ca";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `}}/>
      </Head>

      <main className="bg-gray-50 dark:bg-gray-800 flex flex-col flex-1 w-full">
        <Navbar />
        <div className="w-full max-w-4xl p-4 mx-auto">
          <Breadcrumb />
          <FileListing />
        </div>
      </main>

      <Footer />
    </div>
  )
}

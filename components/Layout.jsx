import Head from 'next/head'
import Navbar from './Navbar';

function Layout({title, description, children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} /> 
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Navbar />
            <div className="layout">{children}</div>
        </> 
    );
}

export default Layout;
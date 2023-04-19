import Head from 'next/head'
import Navbar from './Navbar';
import styled from 'styled-components';

const Container = styled.div`
    width: 1280px;
    margin: 0 auto;
    padding:120px 0;
    overflow: hidden;   

    @media (max-width: 1290px){

        width: 990px;
        margin: 0 auto;
        padding:120px 0;
        overflow: hidden;
    }    

    @media (max-width: 992px){
        width: 760px;
        margin: 0 auto;
        padding:90px 0;
        overflow: hidden;
    }

    @media (max-width: 768px){
        width: 460px;
        margin: 0 auto;
        padding:90px 0;
        overflow: hidden;
    }    

    @media (max-width: 480px){
        width: 340px;
        margin: 0 auto;
        padding:90px 0;
        overflow: hidden;
    }    
}

`;

function Layout({title, description, children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} /> 
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Navbar />
            <Container>{children}</Container>
        </> 
    );
}

export default Layout;
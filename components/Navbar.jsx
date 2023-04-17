import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Context } from '@/pages/_app';
import styled from 'styled-components';

const NavbarBox = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    height: 90px;
    padding: 0 5%;
    background-color:rgba(255,255,255,0.1);
    position: fixed;
    z-index: 100;

    @media (max-width: 992px) {
        height: 60px;
    }
`;

const NavLogo = styled.span`
    font-size:3.2rem;
    font-family: 'Sedgwick Ave Display';

    &:hover{
        text-shadow: 0px 0px 30px #fff;
    }

    a{
        color: #f9d922;
    }

    @media (max-width: 992px) {
        font-size: 2.4rem;
        font-family: "Sedgwick Ave Display";
        color: #f9d922;
    }
`;

const NavButton = styled.span`
    background-color:#f9d922;
    padding:8px 10px;
    border-radius: 8px;
    opacity: .9;

    &:hover{
        opacity: 1;
    }

    a{
        color: #222;
    }
`;

function Navbar() {
    const {games} = useContext(Context);
    const {query} = useRouter();

    return ( 
        <NavbarBox>
            <NavLogo>
                <Link href={'/'} className="logo">SoftGaming</Link>
            </NavLogo>         
            {query.id &&
                <NavButton>
                    <Link href={games[query.id - 1].href} className="link">Скачать</Link>
                </NavButton>
            }       
        </NavbarBox>
    );
}

export default Navbar;
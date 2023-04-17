import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Context } from '@/pages/_app';

function Navbar() {
    const {games} = useContext(Context);
    const {query} = useRouter();

    return ( 
        <div className="navbar">
            <Link href={'/'} className="logo">SoftGaming</Link>
            {query.id &&
                <Link href={games[query.id - 1].href} className="link">Скачать</Link>
            }       
        </div>
    );
}

export default Navbar;
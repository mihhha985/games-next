import Link from 'next/link';
import Image from "next/image";
import LogoBox from '@/components/LogoBox';

function GameList({game}) {
    return ( 
        <div className="games-catalog">
            {game.map((i,k) =>
                <Link href={`/game/${i.id}`} className="games-catalog-item" key={k}>
                    <div className="game-image-box">
                        <Image 
                        style={{objectFit: "cover"}}
                        src={i.poster} 
                        alt={i.name} 
                        priority={k === 0 ? true : false}
                        sizes="(max-width: 992px) 100vw,
                        (max-width: 1290px) 50vw,
                        33vw" 
                        fill />
                    </div>
                    <div className="game-description-box">
                        <LogoBox logos={i.platform} />
                        <div className="game-name">{i.name}</div>
                        <div className="game-character">
                        <span>Рейтинг: {i.rating}</span>
                        <span>Дата: {i.date}</span>
                        </div>
                    </div>
                </Link>  
            )}
        </div> 
     );
}

export default GameList;
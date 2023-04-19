import Link from 'next/link';
import Image from "next/image";
import LogoBox from '@/components/LogoBox';
import styled from 'styled-components';

const Catalog = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:20px;

    @media (max-width: 992px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }    
`;

const GameItem = styled.div`
    width: 600px;
    border-radius: 20px;
    border: 1px solid #222;
    overflow: hidden;
    cursor: pointer;

    &:hover > .hover{
        background-color: rgba(255,255,255,0.2); 
    }

    @media (max-width: 1290px){
        width: 460px;
        border-radius: 20px;
        border: 1px solid #222;
        overflow: hidden;
        cursor: pointer;
    }
    
    @media (max-width: 992px){
        width: 460px;
        border-radius: 20px;
        border: 1px solid #222;
        overflow: hidden;
        cursor: pointer;
    }
    
    @media (max-width: 480px){
        width: 340px;
        border-radius: 20px;
        border: 1px solid #222;
        overflow: hidden;
        cursor: pointer;
    }    
`;

const GameImageBox = styled.div`
    width: 600px;
    height:400px;
    position: relative;
    overflow: hidden;

    @media (max-width: 1290px){
        width: 460px;
        height: 380px;
        position: relative;
        overflow: hidden;
    } 
    
    @media (max-width: 992px){
        width: 460px;
        height: 380px;
        position: relative;
        overflow: hidden;
    }

    @media (max-width: 480px){
        width: 340px;
        height: 280px;
        position: relative;
        overflow: hidden;
    }
`;

const GameDescriptionBox = styled.div`
    background-color: rgba(255,255,255,0.1);
    transition: background-color .4s;
    padding:10px 20px;

    @media (max-width: 1290px){
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
        overflow: hidden;
    }

    @media (max-width: 992px){
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
        overflow: hidden;
    }

    @media (max-width: 480px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 125px;
        overflow: hidden;
    }
`;

const GameName = styled.div`
    font-weight: 700;
    font-size: 1.8rem;

    @madia (max-width: 1290px){
        font-weight: 700;
        font-size: 1.6rem;
    }

    @media (max-width: 992px){
        font-weight: 700;
        font-size: 1.6rem;
    }

    @media (max-width: 480px){
        font-weight: 700;
        font-size: 1.4rem;
    }
`;

const GameCharacter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: .9rem;
    color: #f9d922;
`;

function GameList({game}) {
    return ( 
        <Catalog>
            {game.map((i,k) =>
                <Link href={`/game/${i.id}`} className="games-catalog-item" key={k}>
                <GameItem>  
                    <GameImageBox>
                        <Image 
                        style={{objectFit: "cover"}}
                        src={i.poster} 
                        alt={i.name} 
                        priority={k === 0 ? true : false}
                        sizes="(max-width: 992px) 90vw, 40vw" 
                        fill />
                    </GameImageBox>
                    <GameDescriptionBox className='hover'>
                        <LogoBox logos={i.platform} />
                        <GameName>{i.name}</GameName>
                        <GameCharacter>
                            <span>Рейтинг: {i.rating}</span>
                            <span>Дата: {i.date}</span>
                        </GameCharacter>
                    </GameDescriptionBox>
                </GameItem>    
                </Link>  
            )}
        </Catalog> 
     );
}

export default GameList;
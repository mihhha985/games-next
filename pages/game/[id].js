import Layout from '@/components/Layout';
import {games} from "@/file";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LogoBox from '@/components/LogoBox';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 992px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;

const SliderBox = styled.div`
    width: 50%;

    @media (max-width: 992px){
        width: 100%;
    }
`;

const GameBox = styled.div`
    padding: 20px 0;

    & > h3{
        font-weight: 700;
        font-size: 1.8rem;
    }

    & > p{
        margin-top: 40px;
        font-size:1.2rem;
        letter-spacing: 1px;
    }

    @media (max-width: 480px){
        & > h3{
            font-weight: 700;
            font-size: 1.6rem;
        }
    
        & > p{
            margin-top: 20px;
            font-size:1.2rem;
            letter-spacing: 1px;
        }
    }
`;

const Character = styled.div`
    font-size: .9rem;
    color: #f9d922;
`;

const Date = styled(Character)`
    margin: 5px 0;
`;

const Raite = styled(Character)`
    margin-bottom: 15px;
`;

function Game({game}) {
    
    return ( 
        <Layout 
        title="Большая база компютерных игр | GaminSoft" 
        description="Большая база компютерных игр | GaminSoft"
        >
            <Container>
                <SliderBox>
                    <Carousel 
                        dynamicHeight={false} 
                        showIndicators={false}
                        showStatus={false}
                    >
                        {game.images.map((i,k) => 
                            <div key={k}>
                                <img src={i} />
                            </div>
                        )}    
                    </Carousel>
                </SliderBox>
                <GameBox>
                    <h3>{game?.name}</h3>
                    <p>{game?.description}</p>
                    <Date>Дата: {game.date}</Date>
                    <Raite>Рейтинг: {game.rating}</Raite>
                    <LogoBox logos={game.platform} />
                </GameBox>
            </Container>
        </Layout>
    );
}

export async function getServerSideProps(context) {

    const id = context.query.id;
    const game = games[id-1];
   
    return { props: { game } }
}

export default Game;
import Layout from '@/components/Layout';
import {games} from "@/file";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LogoBox from '@/components/LogoBox';

function Game({game}) {
    
    return ( 
        <Layout 
        title="Большая база компютерных игр | GaminSoft" 
        description="Большая база компютерных игр | GaminSoft"
        >
            <div className="game-item-container">
                <div className="game-item-slider">
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
                </div>
                <div className="game-item-description">
                    <h3>{game?.name}</h3>
                    <p>{game?.description}</p>
                    <div className="date">Дата: {game.date}</div>
                    <div className="rating">Рейтинг: {game.rating}</div>
                    <LogoBox logos={game.platform} />
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {

    const id = context.query.id;
    const game = games[id-1];
   
    return { props: { game } }
}

export default Game;
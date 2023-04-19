import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import {games} from "@/file";
import SortPanel from '@/components/SortPanel';
import GameList from '@/components/GameList';
import Loading from '@/components/Loading';
let globalState = true;

export default function Home({game}) {

  const [gameList, setGameList] = useState(game);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', scrollHeandler);

    return function(){
      document.removeEventListener('scroll', scrollHeandler);
    }
  }, []);

  const scrollHeandler = (e) => {
    if((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10 && globalState)){
      setIsLoading(true);
      setTimeout(() => {
          setGameList([...gameList, ...games]);
          setIsLoading(false);
          globalState = false;
      },600)
    }
  };

  const clear = () => {
    setGameList(game);
  }

  const sortPlatform = (platform) => {
    let sortGameList = gameList.filter(item => item.platform.includes(platform));
    setGameList(sortGameList);
  }

  const searchGame = (value) => {
    let searchGameList = gameList.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    setGameList(searchGameList);
  }

  const sortRatingFn = (mode) => {
    if(mode){
      setGameList([...gameList].sort((a,b) => b.rating - a.rating));
    }else{
      setGameList([...gameList].sort((a,b) => a.rating - b.rating));
    }  
    
  }

  const sortDateFn = (mode) => {
    if(mode){
      setGameList([...gameList].sort((a,b) => new Date(b.date) - new Date(a.date)));
    }else{
      setGameList([...gameList].sort((a,b) => new Date(a.date) - new Date(b.date)));
    }    
  }

  return (
    <>
      <Layout 
        title="Большая база компютерных игр | GaminSoft" 
        description="Большая база компютерных игр | GaminSoft"
      >
        <SortPanel 
          clear={clear}
          sortPlatform={sortPlatform}  
          searchGame={searchGame}
          sortRatingFn={sortRatingFn}
          sortDateFn={sortDateFn}
        />
        {gameList && gameList.length > 0
          ?
          <GameList game={gameList} />
          :
          <h3>По вашему запросу ничего не найденно!!!</h3>
        }  
      </Layout>
      {isLoading && <Loading />}
    </>
  )
}

export async function getServerSideProps() {
  const game = games; 
  return { props: { game } }
}

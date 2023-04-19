import { useRef, useState } from 'react';
import SelectBox from './UI/SelectBox';
import PlatformBox from './UI/PlatformBox';
import SearchBox from './UI/SearchBox';
import styled from 'styled-components';

const SortPanelStyled = styled.div`
    height: 90px;
    align-items: center;
    column-gap: 10px;
    display: grid;
    grid-template-columns: 200px 200px 200px 1fr;

    @media (max-width: 1290px){
        grid-template-columns: 180px 180px 180px 1fr;
    }

    @media (max-width: 992px){
        height:auto;
        gap: 10px;
        grid-template-areas: "date raite platform"  
                   "search search search"; 
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
        margin-bottom:40px;
    }
    
    @media (max-width: 768px){
        grid-template-areas: "date raite"
                    "platform platform"  
                    "search search"; 
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
    }

    @media (max-width: 480px){
        grid-template-areas: "date" "raite" "platform"  "search"; 
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
    }        
`;

function SortPanel({clear, sortPlatform, searchGame, sortRatingFn, sortDateFn}) {

    const [platformVisibitity, setPlatformVisibility] = useState(false);
    const [platformChecked, setPlatformChecked] = useState(false);
    const platformBox = useRef(null);

    const [sortDate, setSortDate] = useState(true);
    const [sortOrder, setSortOrder] = useState(true);
    
    const platformHendler = (e) => {
        let value = '';
        setPlatformVisibility(prev => !prev);
        console.log(e.target, platformVisibitity);
        
        if(e.target.nodeName === 'P'){        
           value = e.target.textContent;
           platformBox.current.textContent = value;
            if(value !== 'Платформы'){
                setPlatformChecked(true);
                sortPlatform(value);
            }    
        }
        
    }

    const clearPlatformHeandler = (e) => {
        e.stopPropagation();
        setPlatformChecked(false);
        setPlatformVisibility(prev => !prev);
        platformBox.current.textContent = 'Платформы';
        clear();
    }

    const sortRatingHeandler = (e) => {
        e.stopPropagation(); 
        sortRatingFn(sortOrder);
        setSortOrder(prev => !prev);
    }

    const sortDateHeandler = (e) => {
        e.stopPropagation(); 
        sortDateFn(sortDate);
        setSortDate(prev => !prev);
    }

    return ( 
        <SortPanelStyled>
            <SelectBox 
                name={'По дате'} 
                heandler={sortDateHeandler} 
                status={sortDate}
                isDate={true} 
            />
            <SelectBox 
                name={'По рейтингу'} 
                heandler={sortRatingHeandler} 
                status={sortOrder}
                isDate={false} 
            />
            <PlatformBox
                ref={platformBox}
                heandler={platformHendler} 
                clear={clearPlatformHeandler} 
                checked={platformChecked} 
                visible={platformVisibitity} 
            />
            <SearchBox searchGame={searchGame} clear={clear}/>
        </SortPanelStyled>
    );
}

export default SortPanel;
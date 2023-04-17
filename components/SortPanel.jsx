import { useRef, useState } from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import {FaListUl} from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';
import {BiX} from 'react-icons/bi';

function SortPanel({clear, sortPlatform, searchGame, sortRatingFn, sortDateFn}) {

    const [background, setBackground] = useState(false);
    const [search, setSearch] = useState('');

    const [platformVisibitity, setPlatformVisibility] = useState(false);
    const [platformChecked, setPlatformChecked] = useState(false);
    const platformBox = useRef(null);
    const platformRef = useRef(null);

    const [sortDate, setSortDate] = useState(true);
    const [sortOrder, setSortOrder] = useState(true);
    
    const platformHendler = (e) => {
        let value = '';
        setPlatformVisibility(prev => !prev);
        console.log(e.target.value);

        if(e.target.nodeName === 'P'){        
           value = e.target.textContent;
            platformBox.current.textContent = value;
            if(value !== 'Платформы'){
                setPlatformChecked(true);
                sortPlatform(value);
            }    
        }

        if(value === ''){
            platformRef.current.classList.remove('active')
        }else{
            platformRef.current.classList.add('active');
        }    
    }

    const clearPlatformHeandler = (e) => {
        e.stopPropagation();
        setPlatformChecked(false);
        setPlatformVisibility(prev => !prev);
        platformRef.current.classList.remove('active');
        platformBox.current.textContent = 'Платформы';
        clear();
    }

    const serchGameHandler = (e) => {
        e.preventDefault();
        searchGame(search);
    }
    
    const setSearchValue = (value) => {
        if(value === '')
            clear();

        setSearch(value);    
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
        <div className="sort-panel">
            <div className="date" onClick={e =>  sortDateHeandler(e)}>
                <span className="text">По дате</span>
                <span className="icon">
                    {sortDate
                        ?
                        <IoIosArrowUp size={16} color='#ffffff' />
                        :
                        <IoIosArrowDown size={16} color='#ffffff' />
                    }    
                </span>
            </div>
            <div className="raite" onClick={e => sortRatingHeandler(e)}>
                <span className="text">По рейтингу</span>
                <span className="icon">
                    {sortOrder
                        ?
                        <IoIosArrowUp size={16} color='#ffffff' />
                        :
                        <IoIosArrowDown size={16} color='#ffffff' />
                    }    
                </span>    
            </div>
            <div ref={platformRef} className="platform">
                <span className="icon">
                    <FaListUl size={16} color={platformChecked ? '#222222' : '#ffffff'} />
                </span> 
                <div
                    onClick={e => platformHendler(e)} 
                    className="platform-items-box"
                >
                    <p ref={platformBox}>Платформы</p>
                    <div
                        style={{display: platformVisibitity ? 'block' : 'none'}} 
                        className="platform-items-list"
                    >
                        {platformChecked &&
                            <h4 className='platform-clear' onClick={e => clearPlatformHeandler(e)}>
                                Очистить <BiX size={24} color={'#222'}/>
                            </h4>
                        }    
                        <p>PC</p>
                        <p>PlayStation 5</p>
                        <p>Xbox One</p>
                        <p>Linux</p>
                        <p>macOS</p> 
                        <p>Nintendo Switch</p>       
                    </div>
                </div>       
            </div>
            <div className="search" style={{background: background ? '#ffffff': ''}}>
                <span className="icon">
                    <ImSearch size={16} color={background ? '#222': ''}/>
                </span> 
                <form onSubmit={e => serchGameHandler(e)}>
                    <input 
                        onChange={e => setSearchValue(e.target.value)}
                        onFocus={() => setBackground(true)}
                        onBlur={() => setBackground(false)}
                        style={{color: background ? '#222' : ''}}
                        type="text" 
                        className="text" 
                        placeholder="Поиск" 
                        value={search}
                    />  
                </form> 
                {search.length > 0
                    ?
                    <label
                        className='remove' 
                        onClick={() => {setSearch(''); clear()}}
                    >
                        <BiX size={24} color={'#222'}/>
                    </label>
                    :
                    <label className="press">Enter</label>
                }
            </div>
        </div>
    );
}

export default SortPanel;
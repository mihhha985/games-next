import { useState } from "react";
import {ImSearch} from 'react-icons/im';
import {BiX} from 'react-icons/bi';
import styled from "styled-components";

const Search = styled.div`
    position: relative;
    flex-grow: 1;
    transition: all .5s ease-in-out;
    border-radius: 15px;
    padding:10px 20px;
    background-color: ${props => props.background ? '#fff' : 'rgba(255,255,255,0.1)'};
    color: aliceblue;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover{
        background-color:rgba(255,255,255,1);
        color: #222222;
    }

    &:hover > .icon{
        color: #222222;    
    }

    &:hover > form > input::placeholder{
        color: #222222;
    }

    &:hover > form > input{
        color: #222222;
    }

    @media (max-width: 992px){
        grid-area: search;
    }
`;

const Icon = styled.span`
    position: relative;
    top:2px;
    left: -5px;
`;

const Input = styled.input`
    position:absolute;
    bottom:0;
    left: 40px;
    width:90%;
    height:100%;
    border: none;
    background: transparent;
    outline: none;
    color: ${props => props.background ? '#222' : '#fff'};
    font-size:1.2rem;

    &::placeholder{
        color: #fff;
    }
`;

const Label = styled.label`
    position:absolute;
    bottom: 6px;
    right:15px;
`;

const Clear = styled(Label)`
    bottom: 5px;
    cursor: pointer;
`;

const Enter = styled(Label)`
    font-size:.9rem;
    padding:5px 10px;
    color: rgba(255,255,255,0.2);
    border-radius: 3px;
    border: 1px solid rgba(255,255,255,0.2);
`;

function SearchBox({searchGame, clear}) {
    const [background, setBackground] = useState(false);
    const [search, setSearch] = useState('');

    const serchGameHandler = (e) => {
        e.preventDefault();
        searchGame(search);
    }
    
    const setSearchValue = (value) => {
        if(value === '')
            clear();

        setSearch(value);    
    }

    return ( 
        <Search background={background}>
            <Icon>
                <ImSearch size={16} color={background ? '#222': ''}/>
            </Icon> 
            <form onSubmit={e => serchGameHandler(e)}>
                <Input 
                    background={background}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setBackground(true)}
                    onBlur={() => setBackground(false)}
                    type="text" 
                    placeholder="Поиск" 
                    value={search}
                />  
            </form> 
            {search.length > 0
                ?
                <Clear onClick={() => {setSearch(''); clear()}}>
                    <BiX size={24} color={'#222'}/>
                </Clear>
                :
                <Enter>Enter</Enter>
            }
        </Search>
    );
}

export default SearchBox;
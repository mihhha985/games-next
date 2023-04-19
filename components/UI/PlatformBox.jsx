import React from 'react';
import {FaListUl} from 'react-icons/fa';
import {BiX} from 'react-icons/bi';
import styled from 'styled-components';

const Platform = styled.div`
    flex-basis: 180px;
    border-radius: 15px;
    padding:10px 20px;
    background-color: ${props => props.isActive ? '#fff' : 'rgba(255,255,255,0.1)'};
    color: ${props => props.isActive ? '#222' : ''};
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    position:relative;

    @media (max-width: 992px){
        grid-area: platform;
    }
`;

const Icon = styled.span`
    position: relative;
    top:1px;
    left: -5px;
`;

const PlatformItemsBox = styled.div`
    width: 100%;

    & > p{
        font-size:1rem;
        position: relative;
        top:2px;
        left:10px;
    }
`;

const PlatformItemList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    color:#222;
    position: absolute;
    border-radius: 8px;
    overflow: hidden;
    z-index: 100;
    left: 0;
    top: 0;

    & > p{
        padding: 5px 10px;
        font-size: .9rem;
        cursor: pointer;
        transition: background 0.5s ease-in-out;
                    
        &:hover{
            background: rgba(0,0,0,0.1);
        }
    }
`;

const Clear = styled.div`
    padding: 5px 10px;
    font-size: .9rem;
    cursor: pointer;
    transition: background 0.5s ease-in-out;
    border-bottom: 1px solid #222;
    display: flex;
    align-items: center;
    justify-content:space-between;

    &:hover{
        background: rgba(0,0,0,0.1);
    }
`;

const PlatformBox =  React.forwardRef(({heandler, clear, checked, visible}, ref) => {
    return ( 
        <Platform isActive={checked}>
            <Icon>
                <FaListUl size={16} color={checked ? '#222222' : '#ffffff'} />
            </Icon> 
            <PlatformItemsBox onClick={e => heandler(e)}>
                <p ref={ref}>Платформы</p>
                <PlatformItemList style={{display: visible ? 'block' : 'none'}}>
                    {checked &&
                        <Clear onClick={e => clear(e)}>
                            Очистить <BiX size={24} color={'#222'}/>
                        </Clear>
                    }    
                    <p>PC</p>
                    <p>PlayStation 5</p>
                    <p>Xbox One</p>
                    <p>Linux</p>
                    <p>macOS</p> 
                    <p>Nintendo Switch</p>       
                </PlatformItemList>
            </PlatformItemsBox>       
        </Platform>
    );
});

export default PlatformBox;
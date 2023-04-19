import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import styled from 'styled-components';

const Select = styled.div`
    position: relative;
    border-radius: 15px;
    padding:10px 20px;
    background-color: rgba(255,255,255,0.1);
    color: aliceblue;
    font-size: 1.2rem;
    cursor: pointer; 
    
    & > span{
        pointer-events: none;
    }

    @media (max-width: 992px){
        grid-area: ${props => props.isDate ? 'date' : 'raite'};
    }
`; 

const Icon = styled.span`
    position: relative;
    top:2px;
    left: 5px;
`;


function SelectBox({name, heandler, status, isDate}) {
    return ( 
        <Select onClick={e =>  heandler(e)} isDate={isDate}>
            <span>{name}</span>
            <Icon>
                {status
                    ?
                    <IoIosArrowUp size={16} color='#ffffff' />
                    :
                    <IoIosArrowDown size={16} color='#ffffff' />
                }    
            </Icon>
        </Select>
    );
}

export default SelectBox;
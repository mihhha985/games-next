import {FiLoader} from 'react-icons/fi';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Box = styled.div`
    position: fixed;
    bottom: 2vh;
    left: calc(50% - 32px);
    z-index: 1000;
    animation: ${rotate} 2s linear infinite;
`;

function Loading() {
    return ( 
        <Box>
            <FiLoader size={64} color={'#ffffff'} />
        </Box>
    );
}

export default Loading;
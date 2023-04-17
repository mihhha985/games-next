import {FiLoader} from 'react-icons/fi';

function Loading() {
    return ( 
        <div className="loading-box">
            <FiLoader size={64} color={'#ffffff'} />
        </div>
    );
}

export default Loading;
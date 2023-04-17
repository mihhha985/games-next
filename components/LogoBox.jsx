import { AiFillWindows } from "react-icons/ai";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import {BsApple} from 'react-icons/bs';
import {VscTerminalLinux} from 'react-icons/vsc';
import {SiNintendo} from 'react-icons/si';

const platform = [
    {name: "PC", icon:  <AiFillWindows size={18} color={'#ffffff'} />}, 
    {name: "PlayStation 5", icon: <FaPlaystation size={18} color={'#ffffff'} />}, 
    {name: "Nintendo Switch", icon:  <SiNintendo size={18} color={'#ffffff'} />}, 
    {name: "Xbox One", icon: <FaXbox size={18} color={'#ffffff'} />}, 
    {name: "Linux", icon: <VscTerminalLinux size={18} color={'#ffffff'} />}, 
    {name: "macOS", icon: <BsApple size={18} color={'#ffffff'} />}
];

function LogoBox({logos}) {

    return ( 
        <div className="logo-box">
            {platform.map((item,key) => {
                if(logos.includes(item.name))
                    return <span key={key}>{item.icon}</span>;
            })}
        </div>
    );
}

export default LogoBox;
import logo from'../img/insight-05 1.png'
import {MdSearch} from 'react-icons/md'
import { FaEnvelope , FaBell,FaUser  } from 'react-icons/fa';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Trang chủ",
            icon:<HomeIcon/>
        },
        {
            path:"/quanlive",
            name:"Quản lí vé",
            icon:<ConfirmationNumberIcon/>
        },
        {
            path:"/doisoatve",
            name:"Đổi soát vé",
            icon:<DescriptionIcon/>
        },
        {
            path:"/caidat",
            name:"Cài đặt",
            icon:<BrightnessLowIcon/>
        },
    ]
    return (
        <div className="container">
           <div  className="sidebar">
               <div className="top_section">
               <img src={logo}/>
               <div className='search'>
                    
                    <MdSearch className='iconsearch'/>
                    <input className='search2' type='text'  placeholder="Search"></input>
                   </div>
                   <FaEnvelope className='iconmail' size={30}/>
                   <FaBell  className='iconbell' size={30} />
                   <FaUser className='iconuser' size={30}/>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
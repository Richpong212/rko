import React, { useContext } from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
       <div className='wrapper'>
          <div className='search'>
              <input type='text' placeholder='Search...' />
              <SearchIcon />
          </div>
          <div className='items'>
              <div className='item'>
                  <LanguageIcon  className='icon'/> English
              </div>
              <div className='item'>
                  <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:'TOGGLE'})} />
              </div>
              <div className='item'>
                  <FullscreenOutlinedIcon className='icon'/>
              </div>
              <div className='item'>
                  <NotificationsActiveOutlinedIcon className='icon'/>
                  <div className='counter'>1</div>
              </div>
              <div className='item'>
                  <ChatBubbleOutlineOutlinedIcon className='icon'/>
                  <div className='counter'>2</div>
              </div>
              <div className='item'>
                  <ListOutlinedIcon className='icon'/>
              </div>
              <div className='item'>
                  <img 
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80' 
                    alt='profile' 
                    className='avatar'/>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar
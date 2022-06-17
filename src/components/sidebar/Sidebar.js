import React, { useContext } from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className='top'>
          <Link to='/' style={{textDecoration: 'none'}}>
             <span className='logo'>Rkoadmin</span>
          </Link>
        </div>
        <hr/>
        <div className='center'>
          <ul>
            <p className='title'>MAIN</p>
            <Link to='/' style={{textDecoration: 'none'}}>
              <li>
                <DashboardIcon className='icon' />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className='title'>LISTS</p>
            <Link to='/users' style={{textDecoration: 'none'}}>
              <li>
                <PersonIcon className='icon'/>
                <span>Users</span>
              </li> 
            </Link>
            <Link to='/products' style={{textDecoration: 'none'}}>
              <li>
                <CategoryOutlinedIcon className='icon' />
                <span>Product</span>
              </li> 
            </Link>
            <li>
              <CreditCardIcon className='icon' />
              <span>Orders</span>
            </li> 
            <li>
              <DeliveryDiningIcon className='icon' />
              <span>Delivery</span>
            </li> 
            <li>
              <NotificationsActiveIcon className='icon' />
              <span>Notification</span>
            </li> 
            <li>
              <BarChartIcon className='icon' />
              <span>Stats</span>
            </li> 
            <p className='title'>SERVICE</p>
            <li>
              <MonitorHeartIcon className='icon' />
              <span>System Health</span>
            </li> 
            <li>
              <PsychologyIcon className='icon' />
              <span>Logs</span>
            </li> 
            <li>
              <SettingsIcon className='icon' />
              <span>Settings</span>
            </li> 
            <p className='title'>USER</p>
            <li>
              <AccountCircleIcon className='icon' />
              <span>Profile</span>
            </li> 
            <li>
              <LogoutIcon className='icon' />
              <span>Logout</span>
            </li> 
          </ul>
        </div>
        {/* DarkMode Color Change*/}
        <div className='bottom'>
          <div 
            className='colorOption' 
            onClick={()=>dispatch({type:'LIGHT'})}
          ></div>
          <div 
            className='colorOption' 
            onClick={()=>dispatch({type:'DARK'})}
          ></div>
        </div>
    </div>
  )
}

export default Sidebar
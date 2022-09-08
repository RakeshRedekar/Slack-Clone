import React from 'react'
import './Header.css';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {

  return (
    <div className='header'>
        <div className='headerLeft'>
            <AccessTimeIcon />
        </div>
        <div className='headerSearch'>
            <SearchIcon />
            <input type="text" placeholder='Search here' />
        </div>
        <div className='headerRight'>
            <HelpOutlineIcon />
            <Avatar alt="Rakesh" src=""/>
        </div>
    </div>
  )
}

export default Header
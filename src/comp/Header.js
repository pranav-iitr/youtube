import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Recomended from './Recomended';
export default function Header() {
 
  return (
    <>
            < div className="header">
        < div className="header_left">

          <MenuIcon />
          <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png" />
        </div>
        <div className="header_input">
          <input id="search" placeholder="search" type="text" />
        <button > <SearchIcon className="hinb"/></button>
        </div><div className="header_icons">
          <VideoCallIcon className="heade_icon"/>
          <AppsIcon className="heade_icon"/>
          <NotificationsIcon className="heade_icon"/>
        </div>
      </div>
     
    </>
  )
}

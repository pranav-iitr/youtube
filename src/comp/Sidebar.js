import React from 'react'
import "./sidebar.css"
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar(props) {
    
    return (
        <div className="sidebar">
           
           <button className="home" onClick={props.onhome} ><SidebarRow  Icon={HomeIcon} title="Home        "/></button>
            <SidebarRow Icon={ExploreIcon} title="Explore"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistorySharpIcon} title="History"/>
            <SidebarRow Icon={PlayCircleFilledIcon} title="Your Videos"/>
            <SidebarRow Icon={AccessTimeTwoToneIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"/>
          <SidebarRow className="logout" Icon={ExitToAppIcon} title="log-out"/>
           
            
            
        </div>
    )
}

export default Sidebar

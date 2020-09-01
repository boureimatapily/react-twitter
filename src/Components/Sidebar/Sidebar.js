import React from 'react'
import SidebarItem from "./SidebarItem"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <TwitterIcon/>
                < SidebarItem Icon={HomeIcon} text="Home" />
                < SidebarItem Icon={SearchIcon} text="Explore" />
                < SidebarItem Icon={NotificationsNoneIcon} text="Notifcations" />
                < SidebarItem Icon={MailOutlineIcon} text="Messages" />
                < SidebarItem Icon={BookmarkBorderIcon} text="Bookmarks" />
                < SidebarItem Icon={ListAltIcon} text="Lists" />
                < SidebarItem Icon={PermIdentityIcon} text="Profile" />
                < SidebarItem Icon={MoreHorizIcon} text="More" />
                
                
            </div>
        </div>
    )
}

export default Sidebar

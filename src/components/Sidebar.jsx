import React from "react";
import SidebarItem from "./SidebarItem";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarItem Icon={HomeIcon} text="Home" />
      <SidebarItem Icon={SearchIcon} text="Search" />
      <SidebarItem Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarItem Icon={MailOutlineIcon} text="Message" />
      <SidebarItem Icon={BookmarkBorderIcon} text="BookMarks" />
      <SidebarItem Icon={ListAltIcon} text="Lists" />
      <SidebarItem Icon={PermIdentityIcon} text="Profile" />
      <SidebarItem Icon={MoreHorizIcon} text="More" />
      <button className='sidebar__tweet' variant="outlined">Tweet</button>
    </div>
  );
};

export default Sidebar;

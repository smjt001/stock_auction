import React from "react";
import {IoIosNotificationsOutline} from "react-icons/io"
import {RiAccountCircleLine} from "react-icons/ri"
import "./header.css"

const Header = ()=>{
    return(
        <div className="header-container">
          <div>
            <h1>StockUp</h1>
          </div>
          <div>
            <RiAccountCircleLine style={{fontSize: "28px",color : "white",marginRight:"10px"}}/>
            <IoIosNotificationsOutline style={{fontSize: "28px",color : "white"}}/>
          </div>
        </div>
    );
}

export default Header;
import React from 'react';
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import "./footer.css"

const Footer = ()=>{
  return(
    <div className='footer-container'>
        <p><AiOutlineCopyrightCircle/> StockUp. All rights reserved</p>
    </div>
  );
}

export default Footer
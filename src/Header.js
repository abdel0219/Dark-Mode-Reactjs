import React from 'react';
import './assets/css/header.css'
import Switch from './Switch';

function Header () {
    
        return  <div className="header">
                    <div className="wrapper">
                <div className="header-grid">
                    <div>
                        <h1>Social Media Dashboard</h1>
                        <p className="header-total">Total Followers:23,004</p>
                    </div>
                </div>
                <Switch/>
            </div>
       </div>
           
    
}
export default Header;
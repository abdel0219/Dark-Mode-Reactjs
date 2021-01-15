import React from 'react';
import  './assets/css/cardsmall.css';

function CardsSmall ({PageView,number,porcentage}) {
   
        return ( 
            <article className="card-small">
            <p className="card-small-view">{PageView} </p>
            <p className="card-small-icon">
                <img src="facebook.jpeg" alt=""/>
            </p>
            <p className="card-small-number"> {number} </p>

            <p className="card-small-porcentage">
                <span>
                   {porcentage} 
                </span> 
           </p>
               
           </article>
        )
    
}
export default CardsSmall;
import React  from 'react';
import './assets/css/card.css'



function Card ({username,icon,followers,todayfollowers,name}) {
    const cardclas=`card ${name}`
      return (

            <article className={cardclas}> 
                <p className="card-title"> 
                    <img src={icon} alt=""/>
                      {username}
                </p>
                <p className="card-followers"> 
                    <span className="card-followers-number"> {followers} </span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="img/icon-up.png" alt=""/>
                   {todayfollowers}
                </p>
            </article>
        )
}

export default Card;
import React from 'react';
import CardsSmall from './CardsSmall';
import  './assets/css/overview.css';

function OverView (){
    const cardsmallist = [
        {
            PageView:'Page View',
            id:"1",
            number:"87",
            icon:'img/facebook.svg',
            porcentage:"2%",
    
        },
        {
            PageView:'Likes',
            id:"2",
            number:"700",
            icon:'imges/facebook.svg',
            porcentage:"40%",
    
        },
        {
            PageView:'Retwitter ',
            id:"3",
            number:"127",
            icon:'img/twitter.svg',
            porcentage:"22%",
    
        },
        {
            PageView:'Likes',
            id:"4",
            number:"80",
            icon:'img/twitter.svg',
            porcentage:"2%",
    
        },
        {
            PageView:'Profile View',
            id:"5",
            number:"300",
            icon:'img/instagram.svg',
            porcentage:"22%",
    
        },
        {
            PageView:'Likes',
            id:"6",
            number:"140",
            icon:'img/instagram.svg',
            porcentage:"56%",
    
        },
        {
            PageView:'Total View',
            id:"7",
            number:"1987",
            icon:'img/youtube.svg',
            porcentage:"70%",
    
        }
    ,
    {
        PageView:'Likes',
        id:"8",
        number:"1200",
        icon:'img/youtube.svg',
        porcentage:"38%",

    }
    ]
    return(
        <section className="overview"> 
        <div className="wrapper">
            <h2>OverView-Today</h2>
            <div className="grid">

                {cardsmallist.map(({id,icon,PageView,porcentage,number})=> 
                (
                <CardsSmall 
                key={id} 
                icon={icon}
                number={number}
                PageView={PageView}
                porcentage={porcentage}
                />
                ))}
             </div>

          </div>

    </section>
    )
}
export default OverView;
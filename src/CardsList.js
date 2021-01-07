import React from 'react';
import Card from './Card';
import  './assets/css/cardlist.css';



const cardlist= [
    {
    username:'@abdel',
    id:"1",
    followers:"1463",
    icon:'img/facebook.svg',
    todayfollowers:"50",
    name:'facebook'
    },
      {
         username:"@abdel",
         id:"2",
         followers:"700",
         icon:'img/twitter.svg',
         todayfollowers:"22",
         name:'twitter'
      },
      {
        username:"@abdel",
        id:"3",
        followers:"400",
        icon:'img/instagram.svg',
        todayfollowers:"12",
        name:'instagram'
      },
      {
        username:"@abdel ",
        id:"4",
        followers:"90",
        icon:'img/youtube.svg',
        todayfollowers:"7",
        name:'youtube'
      },        
]
function CardsList (){
    return(
        <section className="top-card">
         <div className="wrapper">
           <div className="grid">

            {cardlist.map((data)=> <Card  key={data.id} {...data} />)}
               
            
            {/* <article className="card twitter"> 
                <p className="card-title"> 
                    <img src="../assets/img/twitter.svg" alt=""/>
                      @abdel_new
                </p>
                <p className="card-followers"> 
                    <span className="card-followers-number"> 2000 </span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="./img/icon-up.png" alt=""/>
                    12 today
                </p>
            
            </article>
            <article className="card instagram"> 
                <p className="card-title"> 
                    <img src="./img/instagram.svg" alt=""/>
                      @abdel_new
                </p>
                <p className="card-followers"> 
                    <span className="card-followers-number"> 1600 </span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="./img/icon-up.png" alt=""/>
                    12 today
                </p>
            
            </article>
            <article className="card youtube"> 
                <p className="card-title"> 
                    <img src="./img/youtube.svg" alt=""/>
                      @abdel_new
                </p>
                <p className="card-followers"> 
                    <span className="card-followers-number"> 2850 </span>
                    <span className="card-followers-title">Followers</span>
                </p>
                <p className="card-today">
                    <img src="./img/icon-up.png" alt=""/>
                    12 today
                </p>
            
            </article> */}
          </div>
        </div>
 
    </section>
    

    )
}
export default CardsList;
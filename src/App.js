import React  from 'react';
import '../src/assets/css/global.css';
import Header from './Header';
import CardsList from './CardsList';
import OverView from './OverView';


/*
const checkbox = document.querySelector('#checkbox')
if (window.matchMedia('(prefers-color-scheme: dark)').matches){
   checkbox.setAttribute('checked',true)
}

checkbox.addEventListener('change', function(e){
  document.body.classList.toggle('is-dark-mode')

   
})*/
function App  () {

  return (
       <>
        <Header>
          <h1> hola mundo!</h1>
        </Header>
        <CardsList/>
        <OverView />

       </>
     )
 
}

export default App;

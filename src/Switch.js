import React,{useRef,useEffect, useState} from 'react';
import './assets/css/switch.css'

function Switch() {

   const [checked, setChecked]= useState(false)
   const ref=useRef(null);
  
   function HandleChange() {
      console.log(ref.current.checked)
      setChecked(ref.current.checked)
      if(ref.current.checked){
         document.body.classList.add('is-dark-mode')
         document.body.classList.remove('is-ligth-mode')
      }else {
         document.body.classList.remove('is-dark-mode')
         document.body.classList.add('is-ligth-mode')
      }
      
   }

   function changeMedia(mediaquery) {

      if (mediaquery.matches){
         setChecked(true)
      
   }
}

   
   useEffect(()=> {
      const mediaquery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaquery.addListener(changeMedia)
      if (mediaquery.matches){
         setChecked(true)
         
      }
   },[])

   

   return (
 <div className="dark-mode">
    <p className="dark-mode-title"> Dark Mode </p>
    <input 
    type="checkbox"
    className="checkbox"
     id="checkbox"
     ref={ref}
     checked={checked}
     onChange={HandleChange}/>
    <label className="switch" htmlFor="checkbox">
    </label>
</div>
   )
}
export default Switch;
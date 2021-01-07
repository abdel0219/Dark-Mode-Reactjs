import React,{useRef} from 'react';
import './assets/css/switch.css'

function Switch() {

   const ref=useRef(null);
  
   function HandleChange() {
      console.log(ref.current.checked)
      if(ref.current.checked){
         document.body.classList.add('is-dark-mode')
      }else {
         document.body.classList.remove('is-dark-mode')
      }
      
   }
   return (
 <div className="dark-mode">
    <p className="dark-mode-title"> Dark Mode </p>
    <input 
    type="checkbox"
    className="checkbox"
     id="checkbox"
     ref={ref}
     onChange={HandleChange}/>
    <label className="switch" htmlFor="checkbox">
    </label>
</div>
   )
}
export default Switch;
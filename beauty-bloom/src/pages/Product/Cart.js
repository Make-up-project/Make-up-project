import React from 'react'
import { useState } from 'react'
import "./Cart.css"
import product0001 from "./images/product0001.jpg"
import note from "./images/note.png"
import promo from "./images/promo.png" 
const Cart = () => {
const [num,setNum] = useState(1)

function incButton(){
  setNum(num+1)
}
function decButton(){
  if(num!==0){
    setNum(num-1)
  }
}

  return (
    <>
    <div className='containerCart'>

      <div className='CartSection1'>

      <div className='s1MyCart'>
        <p>My cart</p>
        <p style={{color:"#96AC73"}}>continue shopping</p>
      </div>
      <hr/>

       <div className='s1MyCartInfo'>
        
        <div className='CartProductInfo'>
        <img src={product0001} alt=''/>
        <div className='CartProductInfoText'>
        <p>Luxury Matte Lipstick</p>
        <p>$37.00</p>
        <p>Shades: Lily</p>
        </div>
        
        </div>


        <div className='productCartQuantityC'>
        
        <div className='productCartQuantity'>
            <button onClick={()=>decButton()} style={{width:"2rem"}}>-</button>
             <input value={num} style={{width:"2rem"}} type='number'/>
            <button onClick={()=>incButton()} style={{width:"2rem"}}>+</button>
        </div>

        <p>$37.00</p>
        <button style={{width:"2rem"}}>X</button>

        </div>


       </div>
         <hr/>

     
     <div className='promeNoteC'>
    
    <div className='promeNote'>
        <img src={promo} alt=''/>
        <p style={{color:"#96AC73"}}> Enter a promo code</p>
    </div>
    <div className='promeNote'>
        <img src={note} alt=''/>
        <p style={{color:"#96AC73"}}> Add a note</p>
    </div>
     

     </div>



      </div>

      <div className='CartSection2'>

        <p>Order summary</p>
        <hr/>

       <div className='CartSection2Price'>
          <p>subtotal</p>
          <p>$37.00</p>
       </div> 


       <p>Estimate Shipping</p>

         <hr/>


         <div className='CartSection2Price'>
            <p>total</p>
            <p>$37.00</p>
         </div> 

        <div className='paymentButtons'>
          <button className='checkoutButton'>checkout</button>
          <button className='paypalButton'><span style={{color:"#003087"}}>pay</span><span style={{color:"#009CDE"}}>pal</span>  checkout</button>
        </div>  


        <div className='secureCheckout'>
           <img/>
           <p>secure checkout </p>
        </div>

      </div>

    


    </div>
    
    
    
    </>
    
  )
}

export default Cart
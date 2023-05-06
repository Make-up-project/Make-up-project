import React from 'react'
import "./Cart.css"
import product0001 from "./images/product0001.jpg"
const Cart = () => {
  return (
    <>
    <div className='containerCart'>

      <div className='CartSection1'>

      <div className='s1MyCart'>
        <p>My cart</p>
        <p>continue shopping</p>
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
            <button style={{width:"2rem"}}>-</button>
             <input style={{width:"2rem"}} type='number'/>
            <button style={{width:"2rem"}}>+</button>
        </div>

        <p>$37.00</p>
        <button style={{width:"2rem"}}>X</button>

        </div>


       </div>
         <hr/>

     
     <div className='promeNoteC'>
    
    <div className='promeNote'>
        <img/>
        <p> Enter a promo code</p>
    </div>
    <div className='promeNote'>
        <img/>
        <p> Add a note</p>
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
          <button className='paypalButton'>paypal   checkout</button>
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
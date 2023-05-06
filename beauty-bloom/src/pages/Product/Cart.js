import React from 'react'
import { useState } from 'react'
import "./Cart.css"
import note from "./images/note.png"
import promo from "./images/promo.png" 


const Cart = () => {
const product_Api = JSON.parse(localStorage.getItem("product_Api"));
const Quantity0 = JSON.parse(localStorage.getItem("Quantity"));
const [Quantity,setQuantity] = useState(Number(Quantity0))
const Price = product_Api.price
const [num,setNum] = useState(Quantity)
const image = JSON.parse(localStorage.getItem("image"));
const [price,setprice] = useState(Price)

function incButton(){

  setNum(num+1)
  setQuantity(num+1)
}
function decButton(){
  if(num!=0){

    setNum(num-1)
    setQuantity(num-1)
  }
    
  
  
}

  return (
    <>
    <div className='containerCart'>

      <div className='CartSection1'>

      <div className='s1MyCart'>
        <p>My cart</p>
        <p style={{color:"#96AC73" , textAlign:"end"}}>continue shopping</p>
      </div>
      <hr/>

       <div className='s1MyCartInfo'>
        
        <div className='CartProductInfo'>
        <img src={image} alt=''/>
        <div className='CartProductInfoText'>
        <p>Luxury Matte Lipstick</p>
        <p>$<span>{price}</span>.00</p>
        <p>Shades: Lily</p>
        </div>
        
        </div>


        <div className='productCartQuantityC'>
        
        <div className='productCartQuantity'>
            <button onClick={()=>decButton()} style={{width:"2rem"}}>-</button>
             <input value={num} style={{width:"2rem"}} type='number'/>
            <button onClick={()=>incButton()} style={{width:"2rem"}}>+</button>
        </div>

      <div className='priceCancel'>

      <p>$<span>{price*Quantity}</span>.00</p>
      <button>X</button>

      </div>
       

        </div>


       </div>
         <hr/>

     
     <div className='promeNoteC'>
    
    <div className='promeNote'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-tags" viewBox="0 0 16 16">
  <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
</svg>
 


        <p style={{color:"#96AC73"}}> Enter a promo code</p>
    </div>
    <div className='promeNote'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>
        <p style={{color:"#96AC73"}}> Add a note</p>
    </div>
     

     </div>



      </div>

      <div className='CartSection2'>

        <p>Order summary</p>
        <hr/>

       <div className='CartSection2Price'>
          <p>subtotal</p>
          <p>$<span>{price*Quantity}</span>.00</p>
       </div> 


       <p>Estimate Shipping</p>

         <hr/>


         <div className='CartSection2Price'>
            <p>total</p>
            <p><span>{price*Quantity}</span>.00</p>
         </div> 

        <div className='paymentButtons'>
          <button className='checkoutButton'>checkout</button>
          <button className='paypalButton'><span style={{color:"#003087"}}>pay</span><span style={{color:"#009CDE"}}>pal</span>  checkout</button>
        </div>  


        <div className='secureCheckout'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
        </svg>
           <p style={{textAlign:"center",maxWidth:"10rem"}}>secure checkout</p>
        </div>

      </div>

    


    </div>
    
    
    
    </>
    
  )
}

export default Cart
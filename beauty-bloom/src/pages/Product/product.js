import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import product0001 from '../Product/images/product0001.jpg'
import product0002 from '../Product/images/product0002.jpg'
import product0003 from '../Product/images/product0003.jpg'
import product0004 from '../Product/images/product0004.jpg'
import product0005 from '../Product/images/product0005.jpg'
import product0006 from '../Product/images/product0006.jpg'
import product0007 from '../Product/images/product0007.jpg'
import product0008 from '../Product/images/product0008.jpg'
import "./product.css"
const Product = () => {
  const [imgButton, setimgButton] = useState(product0001);
  const [colorButton, setcolorButton] = useState("none");
  const  [buttonId ,setButtonId] =useState();

 

let images0=[product0001,product0002,product0003,product0004,product0005,product0006,product0007,product0008]
let colors0= ["#A05353","#D99483","#DD4848","#C88C8C","#EF9D85","#985D5D","#773225","#A60E25"]
function abyss(e,i){
  setButtonId(i)
  setimgButton(images0[i])
  setcolorButton("black")
}


console.log(colorButton)
  return (
    <>
    <div className='productContainer'>

 <div className='productSection1 productBox'>
 <img  src={imgButton}  alt=''/>

  <div className='productButtons1'>
    

  {
    
 images0.map((e,i)=>{
  return <button style={{background:buttonId===i ? "black" : "none"}} onClick={()=>abyss(e,i)}  >  </button>
 })
  }

  </div>

   <p>Net Wt. 0.12 oz</p>
   <p>FREE OF PARABENS OR FRAGRANCE. FORMULATED WITHOUT ALCOHOL,
      BARLEY, CORN, OATS, RYE, SOY, SPELT, OR WHEAT. SELECT SHADES ARE
       VEGAN.
       </p>
       {/* <Link to='/about'>Go to Aboutpage</Link>  */}
 </div>



 <div className='productSection2 productBox'>

  <p className='productNeme'>Luxury Matte Lipstick</p>
  <p className='productPrice'>$37.00</p>

 <div className='producShades'>
 <p>Shades</p>
    <div className='productButtons2'>

    {
    colors0.map((e,i)=> {

    return <button style={{backgroundColor:colors0[i]}} onClick={()=>abyss(e,i)}  >  </button>


    })
    
    }
      
    </div>
  </div>
  

  <p>Quantity</p>
  <input style={{textAlign:"center"}} type='number'/>
 
 <button className='addToCartButton'>Add to Cart</button>


    <p className='prodeuctDescription'>Description</p>
 
      <p>24 hr Hydra Technology provides long-lasting,
         intense hydration. Suspended Pigments create a soft
        cushion, comfort, and long-lasting wear. Sodium
        Hyaluronate keeps lips soft, smooth, and hydrated.</p>


 </div>
 </div>
    
    
    
    
    </>
  )
}

export default Product
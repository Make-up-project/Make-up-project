import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import product0001 from '../Product/images/product0001.jpg'
import product0002 from '../Product/images/product0002.jpg'
import product0003 from '../Product/images/product0003.jpg'
import product0004 from '../Product/images/product0004.jpg'
import product0005 from '../Product/images/product0005.jpg'
import product0006 from '../Product/images/product0006.jpg'
import product0007 from '../Product/images/product0007.jpg'
import product0008 from '../Product/images/product0008.jpg'
import "./product.css"

import { useContext } from 'react'
import { UserContext } from './ProductContext';





const Product = () => {


  const { product_Api,updateValueProduct_Api } = useContext(UserContext)

 





  const { Quantity,updateValueQuantity } = useContext(UserContext)
  const { imgButton,updateValueImgButton } = useContext(UserContext)

  const [colorButton, setcolorButton] = useState("none");
  const  [buttonId ,setButtonId] =useState();
 

let images0=[product0001,product0002,product0003,product0004,product0005,product0006,product0007,product0008]



 


function abyss(i){
  setButtonId(i)

  updateValueImgButton(images0[i])
  setcolorButton("black")
}

function handleChange(event){
  updateValueQuantity(event.target.value)
}


  return (
    <>
    <div className='productContainer'>

 <div className='productSection1 productBox'>
 <img  src={imgButton}  alt=''/>

  <div className='productButtons1'>
    

  {
    
      product_Api.product_colors.map((e,i)=>{
        return <button style={{background:buttonId===i ? "black" : "none"}} onClick={()=>abyss(i)}  >  </button>
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
  <p className='productPrice'>$<span>{product_Api.price}</span></p>

 <div className='producShades'>
 <p>Shades</p>
    <div className='productButtons2'>

    {
  

    product_Api.product_colors.map((e,i)=> {
      return <button style={{backgroundColor:product_Api.product_colors[i].hex_value}} onClick={()=>abyss(i)}></button>
      })
    
    }
      
    </div>
  </div>
  

  <p>Quantity</p>
  <input type='number' onChange={handleChange} value={Quantity} style={{textAlign:"center"}} />
 
 <Link to="/Cart"><button className='addToCartButton'>Add to Cart</button></Link>


    <p className='prodeuctDescription'>Description</p>
 
      <p className='prodeuctDescriptionp' >{product_Api.description}</p>


 </div>
 </div>
    
    
    
    <Outlet/>
    </>
  )
}

export default Product
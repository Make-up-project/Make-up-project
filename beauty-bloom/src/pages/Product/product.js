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
const Product = () => {
  const [imgButton, setimgButton] = useState(product0001);
  const [colorButton, setcolorButton] = useState("none");
  const  [buttonId ,setButtonId] =useState();
  const  [Quantity ,setQuantity] =useState(1);
  const  [Price ,setPrice] =useState(37);
 localStorage.setItem("image",JSON.stringify(imgButton))
 localStorage.setItem("Price",JSON.stringify(Price))
 localStorage.setItem("Quantity",JSON.stringify(Quantity))
let images0=[product0001,product0002,product0003,product0004,product0005,product0006,product0007,product0008]
// let colors0= ["#A05353","#D99483","#DD4848","#C88C8C","#EF9D85","#985D5D","#773225","#A60E25"]



 const product_Api= {
  "id": 1035,
  "brand": "rejuva minerals",
  "name": "Multi Purpose Powder - Blush & Eye",
  "price": "35.0",
  "price_sign": "$",
  "currency": "USD",
  "image_link": "https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg",
  "product_link": "https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-blush-eye/",
  "website_link": "https://purpicks.com/",
  "description": "Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED&#x2122; and rated 'CLEAN'in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.",
  "rating": null,
  "category": "powder",
  "product_type": "blush",
  "tag_list": [
    "purpicks",
    "EWG Verified",
    "Hypoallergenic",
    "No Talc"
  ],
  "created_at": "2018-06-30T19:19:31.909Z",
  "updated_at": "2018-09-02T22:52:06.855Z",
  "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/1035.json",
  "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383",
  "product_colors_img":[product0001,product0002,product0003],
  
  "product_colors": [
    {
      "hex_value": "#A05353",
      "colour_name": "Pink Parfait"
    },
    {
      "hex_value": "#D99483",
      "colour_name": "Papaya"
    },
    {
      "hex_value": "#DD4848",
      "colour_name": "Acai Berry"
    }
  ]
}

localStorage.setItem("product_Api",JSON.stringify(product_Api))


function abyss(i){
  setButtonId(i)
  setimgButton(images0[i])
  setcolorButton("black")
}

function handleChange(event){
  setQuantity(event.target.value)
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
          // console.log(xx[0].product_colors[0].hex_value)

    // colors0.map((e,i)=> {
    // return <button style={{backgroundColor:colors0[i]}} onClick={()=>abyss(e,i)}></button>
    // })

    product_Api.product_colors.map((e,i)=> {
      return <button style={{backgroundColor:product_Api.product_colors[i].hex_value}} onClick={()=>abyss(i)}></button>
      })
    
    }
      
    </div>
  </div>
  

  <p>Quantity</p>
  <input onChange={handleChange} value={Quantity} style={{textAlign:"center"}} />
 
 <Link to="/Cart"><button className='addToCartButton'>Add to Cart</button></Link>


    <p className='prodeuctDescription'>Description</p>
 
      <p>24 hr Hydra Technology provides long-lasting,
         intense hydration. Suspended Pigments create a soft
        cushion, comfort, and long-lasting wear. Sodium
        Hyaluronate keeps lips soft, smooth, and hydrated.</p>


 </div>
 </div>
    
    
    
    <Outlet/>
    </>
  )
}

export default Product
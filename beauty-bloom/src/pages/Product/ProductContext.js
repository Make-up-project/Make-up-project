import React from "react";
import { Children, createContext, useState } from "react";

import product0001 from "../Product/images/product0001.jpg";
import product0002 from "../Product/images/product0002.jpg";
import product0003 from "../Product/images/product0003.jpg";
import product0004 from "../Product/images/product0004.jpg";
import product0005 from "../Product/images/product0005.jpg";
import product0006 from "../Product/images/product0006.jpg";
import product0007 from "../Product/images/product0007.jpg";
import product0008 from "../Product/images/product0008.jpg";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const pApi = {
    id: 1035,
    brand: "rejuva minerals",
    name: "Multi Purpose Powder - Blush & Eye",
    price: "35.0",
    price_sign: "$",
    currency: "USD",
    image_link:
      "https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg",
    product_link:
      "https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-blush-eye/",
    website_link: "https://purpicks.com/",
    description:
      "Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED&#x2122; and rated 'CLEAN'in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.",
    rating: null,
    category: "powder",
    product_type: "blush",
    tag_list: ["purpicks", "EWG Verified", "Hypoallergenic", "No Talc"],
    created_at: "2018-06-30T19:19:31.909Z",
    updated_at: "2018-09-02T22:52:06.855Z",
    product_api_url:
      "http://makeup-api.herokuapp.com/api/v1/products/1035.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383",
    product_colors_img: [product0001, product0002, product0003],

    product_colors: [
      {
        hex_value: "#A05353",
        colour_name: "Pink Parfait",
      },
      {
        hex_value: "#D99483",
        colour_name: "Papaya",
      },
      {
        hex_value: "#DD4848",
        colour_name: "Acai Berry",
      },
    ],
  };

  const [users, setUsers] = useState("BLUE");
  const [users0, setUsers0] = useState("RED");

  const [product_Api, setproduct_Api] = useState(pApi);
  const [imgButton, setimgButton] = useState(product0001);
  const [Price, setPrice] = useState(37);
  const [Quantity, setQuantity] = useState(1);

  const updateApi = (newValue) => {
    console.log(newValue);
    setproduct_Api(newValue);
    console.log(product_Api);
  };

  const updateValue = (newValue) => {
    setUsers0(newValue);
  };

  const updateValueProduct_Api = (newValue) => {
    setproduct_Api(newValue);
  };

  const updateValueImgButton = (newValue) => {
    setimgButton(newValue);
  };

  const updateValuePrice = (newValue) => {
    setPrice(newValue);
  };

  const updateValueQuantity = (newValue) => {
    setQuantity(newValue);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          product_Api,
          updateValueProduct_Api,
          imgButton,
          updateValueImgButton,
          Price,
          updateValuePrice,
          Quantity,
          updateValueQuantity,
          updateApi,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;

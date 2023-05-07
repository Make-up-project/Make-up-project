import { useState } from "react";
import StoreCard from "../../components/StoreCard";

import useFetchData from "../../hooks/useFetchData";

const baseEndpoint = "http://makeup-api.herokuapp.com/api/v1/products.json?";

const Store = () => {
  const [apiModifiers, setApiModifiers] = useState("?");
  const { data, isLoading, error } = useFetchData(baseEndpoint + apiModifiers);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.price.value === ">20")
      setApiModifiers(baseEndpoint + "&price_greater_than=20");
    else if (event.target.price.value === "<20")
      setApiModifiers(baseEndpoint + "&price_less_than=20");

    if (event.target.product_type.value !== "null")
      setApiModifiers(
        (prevState) =>
          prevState + `&product_type=${event.target.product_type.value}`
      );
  };

  return (
    <div className="min-h-screen bg-primary-color flex flex-col gap-3 py-12 px-6">
      <span className="font-semibold text-xl">Sort By:</span>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-6 "
      >
        <select className="select select-bordered w-full max-w-xs" id="price">
          <option disabled selected value="null">
            Price
          </option>
          <option value=">20">Price greater than $20</option>
          <option value="<20">Price less than $20</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          id="product_type"
        >
          <option disabled selected value="null">
            Product type
          </option>
          <option value="blush">Blush</option>
          <option value="bronzer">Bronzer</option>
          <option value="eyebrow">Eyebrow</option>
          <option value="eyeliner">Eyeliner</option>
          <option value="eyeshadow">Eyeshadow</option>
          <option value="foundation">Foundation</option>
          <option value="lip-liner">Lip liner</option>
          <option value="lipstick">Lipstick</option>
          <option value="mascara">Mascara</option>
          <option value="nail-polish">Nail polish</option>
        </select>

        <button className="btn bg-white text-gray-800 border border-gray-400 hover:bg-white hover:border-gray-400 w-24">
          Apply
        </button>
      </form>
      <div className=" grid grid-cols-1 max-w sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3">
        {error && <div>{error}</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((element) => {
            return (
              <StoreCard
                key={element.id}
                imageURL={element.api_featured_image}
                name={element.name}
                brand={element.brand}
                category={element.category}
                price={element.price}
                description={element.description}
                availableColors={element.product_colors}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Store;

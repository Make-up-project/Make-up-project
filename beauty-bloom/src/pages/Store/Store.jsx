import StoreCard from "../../components/StoreCard";

const Store = () => {
  return (
    <div className="min-h-screen bg-primary-color flex flex-col gap-3 py-12 px-6">
      <span className="font-semibold text-xl">Sort By:</span>
      <form action="" className="flex flex-col lg:flex-row gap-6 ">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Price greater than $20</option>
          <option>Price less than $20</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Product type
          </option>
          <option>Blush</option>
          <option>Bronzer</option>
          <option>Eyebrow</option>
          <option>Eyeliner</option>
          <option>Eyeshadow</option>
          <option>Foundation</option>
          <option>Lip liner</option>
          <option>Lipstick</option>
          <option>Mascara</option>
          <option>Nail polish</option>
        </select>
        {/* <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select> */}
        <button className="btn bg-white text-gray-800 border border-gray-400 hover:bg-white hover:border-gray-400 w-24">
          Apply
        </button>
      </form>
      <div className=" grid grid-cols-1 max-w sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </div>
  );
};

export default Store;

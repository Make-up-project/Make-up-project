const StoreCard = () => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-md border border-gray-300 relative">
      <img
        src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/011/original/open-uri20180630-4-ojcehy?1530390366"
        alt="lippie pencil"
        className="w-full rounded-t-md"
      />
      <div className="w-full flex flex-col px-3 pb-6">
        <span className="text-xl font-semibold">lippie pencil</span>
        <span className="font-thin">colorpop</span>
        <span className="mb-6 font-thin text-gray-500">category: pencil</span>

        <span className="text-xl">
          Price: <span className="font-bold">$20.00 </span>
        </span>
        <span className="mt-3 flex gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-gray-200"></div>
          <div className="w-4 h-4 rounded-full bg-pink-300"></div>
          <div className="w-4 h-4 rounded-full bg-brown-500"></div>
          <div className="w-4 h-4 rounded-full bg-amber-300"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
          <div className="w-4 h-4 rounded-full bg-orange-300"></div>
          <div className="w-4 h-4 rounded-full bg-red-300"></div>
        </span>
      </div>
      <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-pink-100 cursor-pointer flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default StoreCard;

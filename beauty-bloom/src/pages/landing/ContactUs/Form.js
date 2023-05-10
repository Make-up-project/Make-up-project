import React, { useState } from "react";


const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl text-center">Thank you!</div>
        <div className="text-md text-center mb-8">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="bg-[#e7a2b3] py-5">
    <form
      
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="mx-5 bg-[#e7a2b3]"
    >
        <h1 className="text-4xl mb-5 text-center text-white">keep in touch with us</h1>
      <div className="flex flex-col px-8">
        <div className="mb-5 pt-0 w-full me-3 ">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-pink-500 text-pink-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full drop-shadow"
            required
          />
        </div>
        <div className="mb-5 w-full pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-pink-500 text-pink-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full drop-shadow"
            required
          />
        </div>
      </div>
      <div className="mb-3 pt-0 px-8 ">
        <textarea
          placeholder="Your message"
          name="message"
          className="drop-shadow px-3 py-3 placeholder-pink-500 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 px-8">
        <button
          className="bg-[#bc8885] w-full text-white active:bg-[#d498ca] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-[#d498ca] hover:shadow-lg  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
};

export default Form;

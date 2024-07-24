"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "@/app/contexter/contexter";
import Link from "next/link";

const Slug = ({ data }) => {
  const [img, setimg] = data == null ? "" : useState(data.img[0]);
  const [respon, setRespon] = useState("");
  const { getCode } = useGlobalContext();

  const runNow = async () => {
    const responsing = await getCode();
    setRespon(responsing);
  };

  useEffect(() => {
    runNow();
  }, []);

  const [pinCodes, setpinCodes] = useState("");

  const checkPin = async () => {
    const piM = await respon.Data.map((elems) => {
      return elems.Pcode;
    });
    if (piM.includes(pinCodes)) {
      toast.success(`🦄 Hurrah! This city is in our Reach`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-[12px] font-thin",
      });
    } else {
      toast.error(`🦄 This City is out of Reach`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-[12px] font-thin",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {data !== null ? (
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col mx-auto border-blue-700">
            <div className="h-auto flex-wrap flex lg:flex-col items-center justify-center lg:justify-normal lg:items-end ml-4 md:ml-0">
              <div
                className={`mt-2 mr-4 flex object-cover object-top h-[86px] w-[4rem] border border-indigo-400 md:w-[70px] md:h-[112px] rounded-lg cursor-pointer`}
              >
                <img
                  onClick={(e) => {
                    setimg(e.target.src);
                  }}
                  alt="ecommerce"
                  className="object-cover mx-auto object-top rounded-lg"
                  src={data.img[0]}
                />
              </div>
              <div
                className={`mt-2 mr-4 flex object-cover object-top h-[86px] w-[4rem] border border-indigo-400 md:w-[70px] md:h-[112px] rounded-lg cursor-pointer`}
              >
                <img
                  onClick={(e) => {
                    setimg(e.target.src);
                  }}
                  alt="ecommerce"
                  className="object-cover mx-auto object-top rounded-lg"
                  src={data.img[1]}
                />
              </div>
              <div
                className={`mt-2 mr-4 flex object-cover object-top h-[86px] w-[4rem] border border-indigo-400 md:w-[70px] md:h-[112px] rounded-lg cursor-pointer`}
              >
                <img
                  onClick={(e) => {
                    setimg(e.target.src);
                  }}
                  alt="ecommerce"
                  className="object-cover mx-auto object-center rounded-lg"
                  src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/eat-sleep-code-repeat-coding-hoodie-black/2.webp"
                />
              </div>
              <div
                className={`mt-2 mr-4 flex object-cover object-top h-[86px] w-[4rem] border border-indigo-400 md:w-[70px] md:h-[112px] rounded-lg cursor-pointer`}
              >
                <img
                  onClick={(e) => {
                    setimg(e.target.src);
                  }}
                  alt="ecommerce"
                  className="object-cover mx-auto object-top rounded-lg"
                  src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/eat-sleep-code-repeat-coding-hoodie-black/3.webp"
                />
              </div>
              <div
                className={`mt-2 mr-4 flex object-cover object-top h-[86px] w-[4rem] border border-indigo-400 md:w-[70px] md:h-[112px] rounded-lg cursor-pointer`}
              >
                <img
                  onClick={(e) => {
                    setimg(e.target.src);
                  }}
                  alt="ecommerce"
                  className="object-cover mx-auto object-top rounded-lg"
                  src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/hoodies/eat-sleep-code-repeat-coding-hoodie-black/4.webp"
                />
              </div>
            </div>
          </div>
          <div className="h-[44vh] lg:w-[40%] mt-6 md:mt-2 p-2 mainImage mx-4 md:mx-0 flex cursor-crosshair">
            <div className="relative">
              <img
                alt="Image"
                src={img}
                className="w-[349px] h-[523px] hidden lg:block"
              />
            </div>
            <img
              className="object-contain rounded-lg mx-auto lg:hidden"
              alt="Ecommerce"
              src={img}
            />
          </div>
          <div className="lg:w-2/3 mx-8 mt-6 lg:mt-0">
            <span className="text-base tracking-widest text-gray-400">
              Tailstore
            </span>
            <h1
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-2"
              title={data.slug}
            >
              {data.slug}
            </h1>
            <div className="mb-4 hidden md:block">
              <h2 className="text-gray-600 font-bold mb-1 dark:text-gray-400">
                Product Description:
              </h2>
              <div className="product-description">
                <div className="product-description">
                  <p>{data.desc}</p>
                </div>
              </div>
              <div></div>
            </div>
            <p className="text-gray-600 font-bold mb-1 mr-1 capitalize dark:text-gray-400">
              Chose: Color
            </p>
            <div className="justify-start mb-4 mt-2 gap-2 flex flex-wrap flex-row items-center md:w-[50%]">
              {data.varient.map((elem, index) => {
                return (
                  <Link
                    href={`${data.slug} ${elem}`}
                    key={index}
                    title={elem}
                    style={{ background: elem.trim() }}
                    className="p-3 focus:ring-2 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 border border-gray-600 rounded-full"
                  ></Link>
                );
              })}
            </div>
            <div className="client">
              <div className="flex flex-wrap items-center my-2">
                <label className="block m-2 text-sm font-medium">Size: </label>
                {data.size.map((elem, index) => {
                  return (
                    <div key={index}>
                      <button className="mx-2 focus:ring-2 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 border-black dark:border-white rounded-lg border px-2">
                        {elem}
                      </button>
                    </div>
                  );
                })}
              </div>
              <hr className="mb-4 border border-gray-400" />
              <div className="mb-4 flex items-center">
                <span className="text-3xl text-gray-700 dark:text-gray-100 font-bold">
                  ₨ {data.price}
                </span>
                <span className="text-gray-600 font-normal text-sm ml-2 dark:text-gray-400">
                  (Free Shipping)
                </span>
              </div>
              <div className="pin flex-wrap items-center md:justify-normal justify-center flex my-6 gap-2 text-sm">
                <input
                  value={pinCodes}
                  onChange={(e) => {
                    setpinCodes(e.target.value);
                  }}
                  className="px-2 text-black placeholder:text-black py-2 border-2 outline-indigo-500 border-gray-400 rounded-md"
                  placeholder="Enter your Pincode"
                  type="text"
                />
                <button
                  onClick={checkPin}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-2"
                >
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 left-0 h-[90%] w-full flex items-center justify-center flex-col">
          <h1 className="text-indigo-600 text-3xl items-center">
            This Product is out of stock
          </h1>
        </div>
      )}
    </div>
  );
};

export default Slug;

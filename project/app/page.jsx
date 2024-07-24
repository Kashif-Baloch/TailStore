"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [myProducts, setMyProducts] = useState("");

  const getItems = async () => {
    const data = await fetch(
      `http://localhost:3000/apis/products?&limit=6&page=1`,
      {
        method: "GET",
      }
    );
    const dataJson = await data.json();
    dataJson ? setMyProducts(dataJson) : setMyProducts("");
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="lg:mt-[5rem]">
        <div>
          <figure>
            <img src="/banner.jpg" alt="Banner Image" />
          </figure>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-center text-indigo-600 font-bold text-4xl my-[5rem]">
              Our Products
            </h1>
            <div className="flex flex-wrap gap-8 -m-4 items-center justify-center">
              {myProducts ? (
                myProducts.Data.length > 0 ? (
                  myProducts.Data.map((elem, indexm) => {
                    return (
                      <div key={indexm} className="w-[85%] md:w-[16rem]">
                        <div className="md:h-[32rem] cardc relative rounded-lg shadow-lg hover:shadow-xl cursor-pointer overflow-hidden m-2 dark:bg-gray-700">
                          <Link href={`/slugs/${elem.uslug}`}>
                            <div className="relative">
                              <div className="absolute object-contain flex justify-center bottom-0 h-96 md:h-80 z-10 opacity-100 transition-opacity duration-700 hover:opacity-0 w-full bg-white overflow-hidden">
                                <img
                                  className="h-96 w-full md:h-80 max-w-none"
                                  src={elem.img[0]}
                                  alt="Product"
                                />
                              </div>
                              <div className="flex justify-center opacity-100 object-contain h-96 md:h-80 bottom-0 transition-opacity duration-700 hover:opacity-100 overflow-hidden w-full ">
                                <img
                                  className="h-96 w-full md:h-80 max-w-none"
                                  src={elem.img[1]}
                                  alt="Product"
                                />
                              </div>
                            </div>
                            <div className="px-2 md:px-6 py-4">
                              <div className="text-gray-400 font-bold text-xs mb-2">
                                {elem.category}
                              </div>
                              <div
                                title={elem.slug}
                                className="font-bold mb-2 flex"
                              >
                                {elem.slug.slice(0, 15)}...
                              </div>
                              <div className="flex flex-row justify-between items-center mb-2">
                                <div className="flex justify-start flex-wrap">
                                  {elem.varient.map((elemv, index) => {
                                    return (
                                      <div
                                        key={index}
                                        title={elemv}
                                        style={{ background: elemv.trim() }}
                                        className={`w-3 h-3 border shadow-inner rounded-full`}
                                      ></div>
                                    );
                                  })}
                                </div>
                                <div className="text-sm font-semibold">
                                  ₨ {elem.price}
                                </div>
                              </div>
                              <div className="flex gap-1">
                                {elem.size.map((elems, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="inline-block box-border border-2 p-2 text-sm"
                                    >
                                      {elems}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1 className="font-bold text-3xl text-center">
                    Products Out Of Stock
                  </h1>
                )
              ) : (
                <h1 className="font-bold text-3xl text-center">
                  Products Out Of Stock
                </h1>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

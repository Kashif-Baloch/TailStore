import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const getItems = async (l, p) => {
  const data = await fetch(
    `http://localhost:3000/apis/products?category=Shoes&mode=cwise&limit=${l}&page=${p}`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-store",
      },
      cache: "no-store",
    }
  );
  return data.json();
};

const Page = async ({ searchParams }) => {
  const limit = 2;
  const page = Number(searchParams.page) || 1;
  const myProducts = await getItems(limit, page);
  const pages = Math.ceil(myProducts.TotalItem / limit);

  return (
    <div>
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap gap-8 -m-4 items-center justify-center">
            {myProducts.Data.length !== 0 ? (
              myProducts.Data.map((elem, indexm) => {
                return (
                  <div key={indexm} className="w-[85%] md:w-[16rem]">
                    <div className="md:h-[32rem] relative cardc rounded-lg shadow-lg hover:shadow-xl cursor-pointer overflow-hidden m-2 dark:bg-gray-700">
                      <Link href={`/slugs/${elem.uslug}`}>
                        <div className="relative">
                          <div className="absolute object-contain flex justify-center bottom-0 h-96 md:h-80 z-10 opacity-100 transition-opacity duration-700 hover:opacity-0 w-full bg-white overflow-hidden dark:bg-gray-800">
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
              <h1 className="font-bold text-4xl text-center">No Products</h1>
            )}
          </div>
          <div className="justify-center gap-12 mt-20 items-center flex flex-wrap">
            <Link
              href={`/shoes?page=${page <= 1 ? 1 : page - 1}`}
              type="button"
              disabled={page <= 1}
              className={`text-white flex items-center justify-center gap-2  focus:ring-1 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                page <= 1
                  ? "bg-indigo-300 pointer-events-none"
                  : "bg-gradient-to-r cursor-pointer from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br"
              }`}
            >
              <AiOutlineArrowLeft className="font-bold text-xl" /> Prev
            </Link>
            <Link
              href={`/shoes?page=${page == pages ? page : page + 1}`}
              type="button"
              className={`text-white flex items-center justify-center focus:ring-1 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                page == pages || pages == 0
                  ? "bg-indigo-300 pointer-events-none"
                  : "bg-gradient-to-r cursor-pointer from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br"
              }`}
            >
              Next <AiOutlineArrowRight className="font-bold text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

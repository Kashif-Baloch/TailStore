"use client";
import React, { useEffect, useRef } from "react";

const EditItemModal = (props) => {
  const refre = useRef("");

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div>
      <div className="fixed z-20 top-0 left-0 right-0 bottom-0 bg-[#00000061] h-full w-full">
        <div
          aria-hidden="false"
          className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-[85%] max-h-full">
            <div className="relative bg-white rounded-lg shadow white:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black self-center text-center">
                  Edit Item
                </h3>
                <button
                  onClick={props.closeIte}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only"></span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex flex-wrap -m-2 rmsc overflow-y-scroll max-h-[25rem]">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="slug"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Slug
                        </label>
                        <input
                          value={props.value.slug}
                          onChange={props.onChange}
                          type="text"
                          id="slug"
                          name="slug"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="uslug"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Uslug
                        </label>
                        <input
                          value={props.value.uslug}
                          onChange={props.onChange}
                          type="text"
                          id="uslug"
                          name="uslug"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="varient"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Varient
                        </label>
                        <input
                          value={props.value.varient}
                          onChange={props.onChange}
                          type="text"
                          id="varient"
                          name="varient"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="type"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Type
                        </label>
                        <input
                          value={props.value.type}
                          onChange={props.onChange}
                          type="text"
                          id="type"
                          name="type"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="price"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Price
                        </label>
                        <input
                          value={props.value.price}
                          onChange={props.onChange}
                          type="text"
                          id="price"
                          name="price"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="size"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Size
                        </label>
                        <input
                          value={props.value.size}
                          onChange={props.onChange}
                          type="text"
                          id="size"
                          name="size"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="category"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Category
                        </label>
                        <input
                          value={props.value.category}
                          onChange={props.onChange}
                          type="text"
                          id="category"
                          name="category"
                          className="w-full  bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="description"
                          className="leading-7 text-sm text-gray-500"
                        >
                          Description
                        </label>
                        <textarea
                          value={props.value.desc}
                          onChange={props.onChange}
                          id="desc"
                          name="desc"
                          className="w-full bg-opacity-40 rounded border border-gray-400 focus:border-indigo-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-100 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-400">
                <button
                  type="button"
                  className="text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-400 dark:hover:bg-blue-700 dark:focus:ring-indigo-500"
                  onClick={props.runHandler}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;

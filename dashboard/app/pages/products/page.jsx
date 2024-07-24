"use client";
import Link from "next/link";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Loader from "@/app/components/Loader";
import { useGlobalContext } from "../../contexter/contexter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditItemModal from "@/app/components/EditItemModal";

const Page = ({ searchParams }) => {
  let limit = 6;
  const [totalItem, setTotalItem] = useState(0);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let page = Number(searchParams.page) || 1;
  const pages = Math.ceil(totalItem / limit);
  console.log(page);
  const { deleteProducts, editNote } = useGlobalContext();

  const closeIte = () => {
    setShowModal(false);
  };

  const [value, setValue] = useState({
    id: "",
    slug: "",
    desc: "",
    type: "",
    uslug: "",
    price: "",
    size: "",
    varient: "",
    category: "",
  });

  const refOvm = async (note) => {
    setValue({
      ids: note._id,
      uslug: note.uslug,
      type: note.type,
      slug: note.slug,
      desc: note.desc,
      price: note.price,
      size: note.size,
      varient: note.varient,
      category: note.category,
    });
    setShowModal(true);
  };

  const runHandler = async (e) => {
    setShowModal(false);
    const res = await editNote(
      value.ids,
      value.uslug,
      value.type,
      value.slug,
      value.desc,
      value.price,
      value.size,
      value.varient,
      value.category
    );
    console.log(res);
    getItems();
  };

  const onChange = async (e) => {
    if (e.target.name === "size" || e.target.name === "varient") {
      const splitter = e.target.value.split(",");
      setValue({ ...value, [e.target.name]: splitter });
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const getItems = async () => {
    const data = await fetch(
      `http://localhost:3000/apis/products?mode=allin&limit=${limit}&page=${page}`,
      {
        method: "GET",
      }
    );
    let jsonData = await data.json();
    console.log(jsonData, jsonData.Data);
    setItems(jsonData.Data);
    setTotalItem(jsonData.TotalItem);
  };

  useEffect(() => {
    getItems();
  }, [page]);

  const deleteP = async (id) => {
    const reslut = await deleteProducts(id);
    if (reslut.success) {
      toast.success(`🦄 Item Deleted Successfully `, {
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
      const it = items.filter((elem) => {
        return elem._id !== reslut.Pro._id;
      });
      setItems(it);
    } else {
      toast.info("🦄 Internal Server Error ", {
        position: "bottom-center",
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
      {showModal && (
        <EditItemModal
          runHandler={runHandler}
          onChange={onChange}
          closeIte={closeIte}
          value={value}
        />
      )}

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
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap gap-8 -m-4 items-center justify-center">
            {items == "" ? (
              <div className="h-[18rem] flex items-center justify-center">
                <h1>Empty Stock</h1>
              </div>
            ) : (
              items.map((elem, indexm) => {
                return (
                  <div key={indexm} className="w-[85%] md:w-[16rem]">
                    <div className="md:h-[34rem] relative rounded-lg hover:shadow-2xl shadow-xl cursor-pointer overflow-hidden m-2 dark:bg-gray-700">
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
                      <div className="flex items-center py-3 md:p-0 justify-around text-3xl">
                        <span
                          onClick={() => {
                            deleteP(elem._id);
                          }}
                          className="bg-gray-200 hover:text-red-500 rounded-lg p-1 hover:bg-gray-300"
                        >
                          <AiOutlineDelete />
                        </span>
                        <span
                          onClick={() => {
                            refOvm(elem);
                          }}
                          className="bg-gray-200 hover:text-indigo-400 rounded-lg p-1 hover:bg-gray-300"
                        >
                          <AiOutlineEdit />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="justify-center gap-12 mt-20 items-center flex flex-wrap">
            <Link
              href={`/dashboard/products?page=${page <= 1 ? 1 : page - 1}`}
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
              href={`/dashboard/products?page=${
                page == pages ? page : page + 1
              }`}
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

"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useGlobalContext } from "../context/context";
import { useShoppingCart } from "use-shopping-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getStripePromise from "@/lib/stripe";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";

const Page = ({ searchParams }) => {
  const { addOrders } = useGlobalContext();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const {
    cartDetails,
    incrementItem,
    decrementItem,
    totalPrice,
    removeItem,
    cartCount,
  } = useShoppingCart();

  const [succ, setSucc] = useState(searchParams.success);

  const { loginWithRedirect } = useAuth0();

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const [modal, setmodal] = useState(false);

  const runModal = () => {
    document.body.style.overflowY = "hidden";
    setmodal(!modal);
  };

  const onSubmitData = async () => {
    const { name, email, phone, address, city, zip } = credentials;
    if (
      name == "" ||
      email == "" ||
      phone == "" ||
      address == "" ||
      city == "" ||
      zip == "" ||
      Object.keys(cartDetails).length == 0
    ) {
      toast.warning("🦄 Please Fill Out All The Fields ", {
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
    } else {
      localStorage.setItem("user", JSON.stringify(credentials));
      runModal();
      let stripe = await getStripePromise();
      const response = await fetch(
        "http://localhost:3000/apis/srtipe_session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartDetails }),
        }
      );

      const responseData = await response.json();
      if (responseData.session) {
        stripe.redirectToCheckout({ sessionId: responseData.session.id });
      }
    }
  };

  useEffect(() => {
    if (succ == "true" && Object.keys(cartDetails).length > 0) {
      setSucc("random");
      const user = JSON.parse(localStorage.getItem("user"));
      handleCheckout(user, "Paid");
    }
    if (succ == "false" && Object.keys(cartDetails).length > 0) {
      setSucc("random");
      const user = JSON.parse(localStorage.getItem("user"));
      handleCheckout(user, "Not Paid");
    }
    if (!document.cookie.includes("true")) {
      loginWithRedirect();
    }
  }, [cartDetails]);

  const handleCheckout = async (user, status) => {
    const result = await addOrders(
      user.name,
      user.email,
      user.phone,
      user.address,
      user.city,
      user.zip,
      cartDetails,
      status
    );
    result.success
      ? toast.success("Order placed successfully ", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "text-[12px] font-thin",
        })
      : toast.error("Please try later", {
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
  };

  console.log(succ);

  return (
    <div className="mt-28">
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

      {modal && (
        <div className="flex flex-col z-50 items-center justify-center fixed bg-[#80808092] top-0 left-0 w-full h-full">
          <Loader />
          <h1 className="mt-44 text-indigo-700 font-bold text-3xl">
            Please Wait For While
          </h1>
        </div>
      )}
      <div className="flex flex-col items-center border-b py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <h1 className="text-2xl font-bold">
          Tail<span className="text-indigo-500">Store</span>
        </h1>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-gray-400">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
                  2
                </span>
                <span className="font-semibold text-gray-400">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">
                  3
                </span>
                <span className="font-semibold text-gray-400">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400 capitalize">
            Check your items. And Place Orders.
          </p>
          <div className="mt-8 h-[20rem] overflow-hidden overflow-y-auto space-y-3 rounded-lg border px-2 py-4 sm:px-6">
            {Object.keys(cartDetails).map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center border border-slate-500 flex-col rounded-lg sm:flex-row"
                >
                  <img
                    className="m-2 h-[12rem] w-28 rounded-md border object-cover object-center"
                    src={cartDetails[elem].img}
                    alt="See You"
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">
                      {cartDetails[elem].id}
                    </span>
                    <div className="float-right my-2 text-gray-400 capitalize">
                      <span className="border mx-[2px] rounded-md p-1 border-grey-200">
                        Size: {cartDetails[elem].size}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div
                        onClick={() => {
                          removeItem(cartDetails[elem].id);
                        }}
                        className="font-bold border text-black border-slate-500 hover:text-red-600 bg-indigo-600 hover:bg-red-100 cursor-pointer rounded-md p-[3px] text-2xl"
                      >
                        <MdDelete />
                      </div>
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => {
                            incrementItem(cartDetails[elem].id);
                          }}
                          className="font-bold cursor-pointer px-[10px] bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br rounded-md hover:text-black text-white border border-slate-500 text-[20px]"
                        >
                          +
                        </button>
                        <p>{cartDetails[elem].quantity}</p>
                        <button
                          onClick={() => {
                            decrementItem(cartDetails[elem].id);
                          }}
                          className="font-bold cursor-pointer rounded-md bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br px-[12px] hover:text-black border border-slate-500 text-[20px] text-white"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <p className="text-lg font-bold">
                      Rs {cartDetails[elem].price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Total Items</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Items: {cartCount}
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_2"
              >
                <div className="ml-5">
                  <span className="mt-2 font-semibold">
                    Fill all the requirments
                  </span>
                  <p className="text-slate-500 text-sm leading-6">
                    And click on place order button to place your order
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 text-black border-t border-indigo-600 bg-gray-200 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Address Details</p>
          <p className="text-gray-400">
            Complete your order by providing your Address Details.
          </p>
          <div className="">
            <label
              htmlFor="name"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={credentials.name}
                onChange={onChange}
                id="name"
                name="name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm capitalize shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={credentials.email}
                onChange={onChange}
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your-email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="details"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Your Details
            </label>
            <div className="flex">
              <div className="relative w-full flex-shrink-0">
                <input
                  type="text"
                  id="phone"
                  value={credentials.phone}
                  onChange={onChange}
                  name="phone"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+90-000-000-000"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="/call.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="address"
                  value={credentials.address}
                  onChange={onChange}
                  name="address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Full Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <CiLocationOn className="h-4 w-4 object-contain" />
                </div>
              </div>
              <input
                type="text"
                name="city"
                value={credentials.city}
                onChange={onChange}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="City"
              />
              <input
                type="text"
                value={credentials.zip}
                onChange={onChange}
                name="zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">Rs {totalPrice}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">
                  Rs {totalPrice !== 0 ? 500 : 0}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                Rs {totalPrice !== 0 ? totalPrice + 500 : 0}
              </p>
            </div>
          </div>
          <button
            onClick={onSubmitData}
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

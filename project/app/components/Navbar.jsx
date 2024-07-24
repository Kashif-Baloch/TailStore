"use client";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiIndent } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import { BsCaretUp, BsCaretDown, BsBagCheck } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineHome,
} from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useShoppingCart } from "use-shopping-cart";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) setDarkMode();
    else setLightMode();
  }, [isDarkMode]);

  const [showSidebar, setShowSidebar] = useState(true);
  const [shownav, setShowNav] = useState(true);
  const {
    cartCount,
    cartDetails,
    incrementItem,
    decrementItem,
    clearCart,
    totalPrice,
    removeItem,
  } = useShoppingCart();
  const [userA, setUser] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const { userData } = useGlobalContext();

  useEffect(() => {
    if (isAuthenticated) {
      userData(user.name, user.email, user.nickname, user.picture)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated]);

  return (
    <div className="navbar">
      <div className="flex navigt items-center lg:hidden justify-between z-20 fixed -bottom-2 bg-indigo-100 left-0 w-full px-12 p-4">
        <nav
          className={`fixed transition-all top-0 flex-col ${
            shownav ? "translate-x-full" : "translate-x-0"
          } gap-12 navigt left-0 lg:hidden z-50 flex h-full w-full items-center text-base justify-center`}
        >
          <AiOutlineClose
            onClick={() => {
              setShowNav(!shownav);
            }}
            className="font-bold cardc z-20 absolute top-7 right-7 cursor-pointer text-4xl"
          />
          <Link
            href={"/tshirts"}
            onClick={() => {
              setShowNav(!shownav);
            }}
            className="md:text-4xl text-3xl cursor-pointer text-indigo-600"
          >
            Tshirts
          </Link>
          <Link
            href={"/hoddies"}
            onClick={() => {
              setShowNav(!shownav);
            }}
            className="md:text-4xl text-3xl cursor-pointer text-indigo-600"
          >
            Hoodies
          </Link>
          <Link
            href={"/shoes"}
            onClick={() => {
              setShowNav(!shownav);
            }}
            className="md:text-4xl text-3xl cursor-pointer text-indigo-600"
          >
            Shoes
          </Link>
          <Link
            href={"/caps"}
            onClick={() => {
              setShowNav(!shownav);
            }}
            className="md:text-4xl text-3xl cursor-pointer text-indigo-600"
          >
            Caps
          </Link>
          {!isAuthenticated && (
            <li
              onClick={() => loginWithRedirect()}
              className="text-white bg-indigo-600 list-none p-2 transition-all cursor-pointer"
            >
              Sign Up
            </li>
          )}
          {isAuthenticated && (
            <li
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="text-white bg-indigo-600 list-none p-2 transition-all cursor-pointer"
            >
              Log Out
            </li>
          )}
          <div
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
            className="dark_mode cursor-pointer"
          >
            {!isDarkMode && <FaMoon className="text-3xl text-indigo-600" />}
            {isDarkMode && <FaSun className="text-3xl text-indigo-600" />}
          </div>
        </nav>
        <div className="relative">
          <AiOutlineShoppingCart
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className="font-bold cursor-pointer text-4xl"
          />
          <span className="text-white absolute -top-2 text-[12px] h-6 w-6 text-center flex items-center justify-center -right-2 bg-indigo-700 rounded-full px-[2px]">
            {cartCount}
          </span>
        </div>
        <Link href={"/"}>
          <AiOutlineHome className="font-extrabold text-indigo-600 text-4xl" />
        </Link>
        <CiIndent
          onClick={() => {
            setShowNav(!shownav);
          }}
          className="font-extrabold text-4xl"
        />
      </div>
      <header className={`hidden lg:block`}>
        <div className="z-20 fixed top-0 navigt left-0 shadow-lg w-full mx-auto flex flex-wrap p-5 flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">TailStore</span>
          </Link>
          <nav className="ml-auto mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/tshirts"}
              className="mr-5 font-bold cursor-pointer hover:text-indigo-500"
            >
              Tshirts
            </Link>
            <Link
              href={"/hoddies"}
              className="mr-5 font-bold cursor-pointer hover:text-indigo-500"
            >
              Hoodies
            </Link>
            <Link
              href={"/shoes"}
              className="mr-5 font-bold cursor-pointer hover:text-indigo-500"
            >
              Shoes
            </Link>
            <Link
              href={"/caps"}
              className="mr-5 font-bold cursor-pointer hover:text-indigo-500"
            >
              Caps
            </Link>
          </nav>
          <div className="items-center inline-flex cursor-pointer gap-4 py-1 px-3 text-base mt-0 relative ">
            <div
              className="dark_mode"
              onClick={() => {
                setIsDarkMode(!isDarkMode);
              }}
            >
              {!isDarkMode && <FaMoon className="text-3xl text-indigo-600" />}
              {isDarkMode && <FaSun className="text-3xl text-indigo-600" />}
            </div>
            <div className="relative">
              <FaRegUser
                onClick={() => {
                  setUser(!userA);
                }}
                className="font-bold cursor-pointer text-indigo-400 text-2xl"
              />
              <div
                className={`absolute text-black ${
                  userA ? "block scale-100" : "hidden scale-0"
                } transition-all -left-[5rem] top-[2rem] p-4 rounded-lg  bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600`}
              >
                <ul className="flex flex-col gap-2">
                  {!isAuthenticated && (
                    <li
                      onClick={() => loginWithRedirect()}
                      className="hover:text-white transition-all cursor-pointer"
                    >
                      Sign Up
                    </li>
                  )}
                  {isAuthenticated && (
                    <li
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      className="hover:text-white transition-all cursor-pointer"
                    >
                      Log Out
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <AiOutlineShoppingCart
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
              className="font-bold text-indigo-400 cursor-pointer text-3xl"
            />
            <span className="text-white absolute -top-2 text-[12px] h-4 w-4 text-center flex items-center justify-center right-1 z-20 bg-indigo-700 rounded-full px-[2px] ">
              {cartCount}
            </span>
          </div>
        </div>
      </header>

      {
        <div
          className={`fixed ${
            showSidebar ? "translate-x-[100%]" : "translate-x-0"
          } myScroll overflow-y-scroll right-0 transition-all top-0 w-full md:w-[55%]  lg:w-[33%] sidebarCart p-5 h-screen z-50`}
        >
          <AiOutlineClose
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className="font-bold z-20 absolute top-5 right-4 cursor-pointer text-3xl"
          />
          <h1 className="font-extrabold text-3xl mt-12 md:mt-0">
            Shopping Cart
          </h1>
          <div className="mt-14">
            {cartCount == 0 ? (
              <h1 className="font-bold">Your Cart Is Empty</h1>
            ) : (
              Object.keys(cartDetails).map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between mt-4 gap-6 items-center p-3 rounded-lg shadow-xl bg-[#80808055]"
                  >
                    <div className="flex md:flex-row flex-col gap-2 items-center">
                      <img
                        src={cartDetails[elem].img}
                        alt="Cart Item"
                        className="w-11 h-16 rounded-md"
                      />
                      <h1
                        title={cartDetails[elem].slug}
                        className="font-bold text-[12px] md:text-lg"
                      >
                        {cartDetails[elem].slug.slice(0, 18)}...
                      </h1>
                    </div>
                    <div className="font-bold flex gap-2 items-center">
                      <p className="mt-1">{cartDetails[elem].quantity}</p>
                      <MdDelete
                        onClick={() => {
                          removeItem(cartDetails[elem].id);
                        }}
                        className="font-bold hover:text-red-600 cursor-pointer mt-1 text-[20px]"
                      />
                    </div>
                    <div>
                      <div>
                        <BsCaretUp
                          onClick={() => {
                            incrementItem(cartDetails[elem].id);
                          }}
                          className="font-bold cursor-pointer hover:text-indigo-600 text-[20px]"
                        />
                        <BsCaretDown
                          onClick={() => {
                            decrementItem(cartDetails[elem].id);
                          }}
                          className="font-bold cursor-pointer hover:text-indigo-600 mt-1 text-[20px]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="mt-14">
            <h1 className="font-bold">
              Subtotal: <span className="text-indigo-800">{totalPrice}</span>
            </h1>
            <h1 className="font-bold">
              Total Items: <span className="text-indigo-800">{cartCount}</span>
            </h1>
            <div className="mt-2 flex flex-wrap">
              <Link
                href={"/checkout"}
                type="button"
                className={`text-white flex items-center justify-center bg-gradient-to-r gap-2 from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br  focus:ring-2 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
                  cartCount == 0 ? "pointer-events-none" : "pointer-events-auto"
                }`}
              >
                {" "}
                <BsBagCheck className="font-bold text-xl" />
                Checkout
              </Link>
              <button
                onClick={clearCart}
                type="button"
                className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;

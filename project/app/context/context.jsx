"use client";
import { createContext, useContext } from "react";

const StateContext = createContext();

const StateProvider = (props) => {
  const addItem = async (
    image,
    uslug,
    type,
    slug,
    desc,
    price,
    size,
    varient,
    category
  ) => {
    const requestData = await fetch(`http://localhost:3000/apis/products`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      cache: "no-store",
      
      body: JSON.stringify({
        image,
        uslug,
        type,
        slug,
        desc,
        price,
        size,
        varient,
        category,
      }),
    });

    const response = await requestData.json();
    return response;
  };

  const addOrders = async (
    name,
    email,
    phone,
    address,
    city,
    zip,
    items,
    status
  ) => {
    const requestData = await fetch(`http://localhost:3000/apis/order`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      cache: "no-store",
      
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        city,
        zip,
        items,
        status,
      }),
    });

    const response = await requestData.json();
    return response;
  };

  const deleteProduct = async (idText) => {
    const requestData = await fetch(`http://localhost:3000/apis/products`, {
      method: "DELETE",
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      cache: "no-store",
      
      body: JSON.stringify({ idText }),
    });

    const response = await requestData.json();
    return response;
  };

  const editNote = async (
    id,
    image,
    uslug,
    type,
    slug,
    desc,
    price,
    size,
    varient,
    category
  ) => {
    const response = await fetch(`http://localhost:3000/apis/products`, {
      method: "PUT",
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      cache: "no-store",
      
      body: JSON.stringify({
        id,
        image,
        uslug,
        type,
        slug,
        desc,
        price,
        size,
        varient,
        category,
      }),
    });
    const result = await response.json();
    return result;
  };

  const userData = async (name, email, nickname, pic) => {
    const requestData = await fetch(`http://localhost:3000/apis/user`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      cache: "no-store",
      
      body: JSON.stringify({ name, email, nickname, pic }),
    });

    const response = await requestData.json();
    return response;
  };

  const pinCode = async (name, code) => {
    const requestData = await fetch(`http://localhost:3000/apis/pincoding`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      cache: "no-store",
      
      body: JSON.stringify({ name, code }),
    });

    const response = await requestData.json();
    return response;
  };

  const getCode = async () => {
    const requestData = await fetch(`http://localhost:3000/apis/pincoding`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      cache: "no-store",
      
    });

    const response = await requestData.json();
    return response;
  };

  return (
    <StateContext.Provider
      value={{
        addItem,
        addOrders,
        deleteProduct,
        editNote,
        userData,
        pinCode,
        getCode,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(StateContext);
};

export { StateProvider, useGlobalContext };

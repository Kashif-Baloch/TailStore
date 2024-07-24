"use client";
import { createContext, useContext } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
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
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
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

  const addOrders = async (name, email, phone, address, city, zip, items) => {
    const requestData = await fetch(`http://localhost:3000/apis/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({ name, email, phone, address, city, zip, items }),
    });

    const response = await requestData.json();
    return response;
  };

  const deleteProducts = async (idText) => {
    const requestData = await fetch(`http://localhost:3000/apis/products`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({ idText }),
    });

    const response = await requestData.json();
    return response;
  };

  const editNote = async (
    id,
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
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({
        id,
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
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({ name, email, nickname, pic }),
    });

    const response = await requestData.json();
    return response;
  };

  const pinCode = async (name, code) => {
    const requestData = await fetch(`http://localhost:3000/apis/pincoding`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({ name, code }),
    });

    const response = await requestData.json();
    return response;
  };

  const getCode = async () => {
    const requestData = await fetch(`http://localhost:3000/apis/pincoding`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });

    const response = await requestData.json();
    return response;
  };

  const getOrders = async () => {
    const requestData = await fetch(`http://localhost:3000/apis/order`, {
      headers: {
        "Cache-Control": "no-store",
      },
      method: "GET",
    });

    const response = await requestData.json();
    return response;
  };

  const deleteOrders = async (id, delt) => {
    const requestData = await fetch(`http://localhost:3000/apis/order`, {
      method: "DELETE",
      headers: {
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({ id, delt }),
    });

    const response = await requestData.json();
    return response;
  };

  return (
    <StateContext.Provider
      value={{
        addItem,
        addOrders,
        deleteProducts,
        deleteOrders,
        editNote,
        userData,
        pinCode,
        getCode,
        getOrders,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(StateContext);
};

export { StateProvider, useGlobalContext };

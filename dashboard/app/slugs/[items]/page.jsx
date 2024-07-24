"use client";
import React, { useState, useEffect } from "react";
import Slug from "../../components/Slug";
import Loader from "../../components/Loader";

const Page = ({ params }) => {
  const uslug = params.items;
  const [data, setData] = useState([]);

  const getItem = async () => {
    const req = await fetch(
      `http://localhost:3000/apis/products?uslug=${uslug}&mode=one`,
      {
        method: "GET",
      }
    );
    const res = await req.json();
    setData(res.Data);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <div className="container mt-28 mx-auto lg:p-8">
        <div className="flex relative min-h-screen">
          <div className="rounded-lg dark:bg-gray-800 dark:text-gray-100">
            {data == "" ? (
              <div className="absolute top-0 left-0 w-full h-[70%] flex items-center justify-center">
                <Loader />
              </div>
            ) : (
              <Slug data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

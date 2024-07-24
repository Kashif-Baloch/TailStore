import React from "react";
import Header from "./components/Header";
import TopCards from "./components/TopCards";
import BarChart from "./components/BarChart";
import Orders from "./components/Orders";

const Page = ({ searchParams }) => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <Orders />
        </div>
      </div>
    </>
  );
};

export default Page;

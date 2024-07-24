import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";
import { TbMapPinCode } from "react-icons/tb";

const SideBar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-full p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href={"/"}>
            <div className="bg-indigo-600 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b border-gray-200 w-full p-2"></span>
          <Link href={"/"}>
            <div className="bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href={"/pages/products"}>
            <div className="bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer p-3 rounded-lg inline-block">
              <BiCategoryAlt size={20} />
            </div>
          </Link>
          <Link href={"/pages/additem"}>
            <div className="bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer p-3 rounded-lg inline-block">
              <MdSwitchAccessShortcutAdd size={20} />
            </div>
          </Link>
          <Link href={"/pages/orders"}>
            <div className="bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href={"/pages/pincode"}>
            <div className="bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer p-3 rounded-lg inline-block">
              <TbMapPinCode size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default SideBar;

// "use client"
// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineAppstoreAdd } from 'react-icons/ai';
// import { CiBoxList } from 'react-icons/ci';
// import { IoStatsChartSharp } from 'react-icons/io5';
// import { SiOpenproject, SiPolymerproject } from 'react-icons/si';

// const Dashboard = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [tag, setTag] = useState('')

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     }

//     return (
//         <div>
//             <div>
//                 {isSidebarOpen ? <div className='fixed top-0 left-0 z-50 bg-slate-400 p-4 h-full w-60 rounded-tr-2xl rounded-br-2xl'>
//                     <div className='cursor-pointer font-bold text-3xl text-white absolute right-3 top-3' ><AiOutlineClose onClick={toggleSidebar} /></div>
//                     <div>
//                         <div className='flex flex-col items-center justify-center text-center py-2 gap-1 border-b-2 border-blue-300'>
//                             <img className='w-28 h-28 rounded-full' src='/imgs/profile/user-1.jpg' alt="Logo" />
//                             <h1 className='font-bold text-2xl text-[#9a3fff] '>Kashif Nawaz</h1>
//                             <p>kashifnawaz@gmail.com</p>
//                         </div>
//                         <div className='mt-8'>
//                             <ul className='flex flex-col gap-10'>
//                                 <li onClick={() => { setTag('home') }} className='hover:bg-indigo-500 p-3 rounded-lg cursor-pointer flex gap-3 items-center'><IoStatsChartSharp className='text-black text-2xl' />Home</li>
//                                 <li onClick={() => { setTag('add') }} className='hover:bg-indigo-500 p-3 rounded-lg cursor-pointer flex gap-3 items-center'><AiOutlineAppstoreAdd className='text-black text-2xl' />AddItems</li>
//                                 <li onClick={() => { setTag('orders') }} className='hover:bg-indigo-500 p-3 rounded-lg cursor-pointer flex gap-3 items-center'><SiPolymerproject className='text-black text-2xl' />Orders</li>
//                                 <li onClick={() => { setTag('products') }} className='hover:bg-indigo-500 p-3 rounded-lg cursor-pointer flex gap-3 items-center'><SiOpenproject className='text-black text-2xl' />Products</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div> : <div className='fixed bottom-0 mt-[5rem] left-0 p-5 rounded-tl-2xl rounded-tr-2xl w-full bg-slate-400'>
//                     <ul className='flex text-3xl justify-center gap-16 items-center'>
//                         <li onClick={() => { setTag('home') }} className='hover:bg-indigo-500 p-1 rounded-lg cursor-pointer'><IoStatsChartSharp /></li>
//                         <li onClick={() => { setTag('add') }} className='hover:bg-indigo-500 p-1 rounded-lg cursor-pointer'><AiOutlineAppstoreAdd /></li>
//                         <li className='cursor-pointer' onClick={toggleSidebar}><CiBoxList className='text-white' /></li>
//                         <li onClick={() => { setTag('orders') }} className='hover:bg-indigo-500 p-1 rounded-lg cursor-pointer'><SiPolymerproject /></li>
//                         <li onClick={() => { setTag('products') }} className='hover:bg-indigo-500 p-1 rounded-lg cursor-pointer'><SiOpenproject /></li>
//                     </ul>
//                 </div>}
//             </div>
//             <div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard;

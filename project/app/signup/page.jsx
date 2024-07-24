"use client"
import React, { useState } from "react";
import { useGlobalContext } from "../context/context"

const Page = () => {
    const { addItem } = useGlobalContext();

    const [credentials, setCredentials] = useState({
        image: "",
        slug: "",
        desc: "",
        type: "",
        uslug: "",
        price: "",
        size: "",
        varient: "",
        category: ""
    });

    const doLogin = async (e) => {
        e.preventDefault()
        const result = await addItem(credentials.image, credentials.uslug, credentials.type, credentials.slug, credentials.desc, credentials.price, credentials.size, credentials.varient, credentials.category);
        console.log(result);
    }

    const onChange = async (e) => {
        if (e.target.name === "image") {
            let obj = []
            for (let i = 0; i < e.target.files.length; i++) {
                let reader = new FileReader()
                await reader.readAsDataURL(e.target.files[i])
                reader.onload = () => {
                    obj.push(reader.result)
                }
                reader.onerror = (err) => {
                    console.log(err);
                }
            }

            setCredentials({ ...credentials, [e.target.name]: obj });
        }
        else if (e.target.name === "size" || e.target.name === "varient") {
            const splitter = e.target.value.split(',')
            setCredentials({ ...credentials, [e.target.name]: splitter });
        }
        else {
            setCredentials({ ...credentials, [e.target.name]: e.target.value });
        }
    };

    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-center font-bold text-[3rem]">Signin To Continue</h1>
            <div className="container mx-auto px-6">
                <form onSubmit={doLogin}>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Slug"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Slug
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.slug}
                            type="text"
                            id="slug"
                            name="slug"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Description
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.desc}
                            type="text"
                            id="desc"
                            name="desc"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Uslug
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.uslug}
                            type="text"
                            id="uslug"
                            name="uslug"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Type
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.type}
                            type="text"
                            id="type"
                            name="type"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Price
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.price}
                            type="text"
                            id="price"
                            name="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Size"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Size
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.size}
                            type="text"
                            id="size"
                            name="size"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Category
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.category}
                            type="text"
                            id="category"
                            name="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Varient"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Varient
                        </label>
                        <input
                            required
                            onChange={onChange}
                            value={credentials.varient}
                            type="text"
                            id="varient"
                            name="varient"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="mb-6 container mx-auto w-[40vw]">
                        <label
                            htmlFor="Image"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Product image
                        </label>
                        <input
                            accept="images/*"
                            multiple={true}
                            onChange={onChange}
                            type="file"
                            name="image"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        />
                    </div>
                    <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-400">
                        <button
                            data-modal-hide="defaultModal"
                            type="submit"
                            className="text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-400 dark:hover:bg-blue-700 dark:focus:ring-pink-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            {/* <h1 className="text-center">
                I Have an{" "}
                <Link to="/login" className="cursor-pointer text-pink-500">
                    Account
                </Link>
            </h1> */}
        </div>
    );
};

export default Page

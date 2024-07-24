import React from "react";

const Msmodal = ({ setModal, modal, poio }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center z-50 bg-[#00000083]">
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto flex overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Orders
              </h3>
              <button
                onClick={() => {
                  setModal(!modal);
                }}
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
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
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 text-wrap">
              <h1 className="text-center font-bold text-indigo-500">
                Cutomer's Details
              </h1>
              <div>
                <h1 className="font-bold">Name</h1>
                <p>{poio.name}</p>
              </div>
              <div>
                <h1 className="font-bold">Phone</h1>
                <p>{poio.phone}</p>
              </div>
              <div>
                <h1 className="font-bold">Email</h1>
                <p>{poio.email}</p>
              </div>
              <div>
                <h1 className="font-bold">Address</h1>
                <p>{poio.address}</p>
              </div>
              <div>
                <h1 className="font-bold">City</h1>
                <p>{poio.city}</p>
              </div>
              <div>
                <h1 className="font-bold">Zip</h1>
                <p>{poio.zip}</p>
              </div>
              <div>
                <h1 className="font-bold">Status</h1>
                <p>{poio.status}</p>
              </div>
              <div>
                <h1 className="font-bold text-center text-indigo-500">
                  Product's Details
                </h1>
                <div>
                  {Object.keys(poio.items).map((elem, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <h1 className="font-bold">Product Name</h1>
                          <p>{poio.items[elem].id}</p>
                        </div>
                        <div>
                          <h1 className="font-bold">Product Price</h1>
                          <p>{poio.items[elem].price}</p>
                        </div>
                        <div>
                          <h1 className="font-bold">Product Size</h1>
                          <p>{poio.items[elem].size}</p>
                        </div>
                        <div>
                          <h1 className="font-bold">Product Qty</h1>
                          <p>{poio.items[elem].quantity}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="font-bold">Date</h1>
                <p>{poio.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Msmodal;

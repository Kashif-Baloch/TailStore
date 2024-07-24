import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
    return (
        <div className='flex flex-col items-center justify-center absolute h-[60%] gap-4'>
            <PuffLoader
                color={'blue'}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <h1 className="text-indigo-600 text-3xl">Loading...</h1>
        </div>
    )
}

export default Loader
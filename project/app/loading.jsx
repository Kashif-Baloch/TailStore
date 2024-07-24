"use client"
import PuffLoader from "react-spinners/PuffLoader";

function loading() {
    return (
        <div className="h-[40rem] gap-6 flex-col flex items-center justify-center">
            <PuffLoader
                color={'blue'}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <h1 className="text-indigo-600 text-3xl">Loading...</h1>
        </div>
    );
}

export default loading
"use client";
import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const TopBar = () => {
    const pathname = usePathname();
    const [progress, setProgress] = useState(100)

    useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            setProgress(100)
        }, 300);
    }, [pathname]);

    return (
        <div>
            <LoadingBar
                color='#4f46e5'
                progress={progress}
                waitingTime={500}
                height={"3px"}
                shadow={false}
                onLoaderFinished={() => setProgress(0)}
            />
        </div>
    )
}

export default TopBar
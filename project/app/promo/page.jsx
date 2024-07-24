import React from 'react'

const Video = () => {
    return (
        <div className='mt-[10rem] text-center'>
            <video width={'50%'} className='mx-auto h-[18.2rem] shod' controls poster='/banner.jpg' src="/video/my.mp4"></video>
        </div>
    )
}

export default Video
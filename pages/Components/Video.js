import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { PlayIcon } from '@heroicons/react/solid';



function Video() {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <section className="section p-24 bg-gray-700 ">
            <div className="text-3xl pb-10 text-center font-extrabold text-white">Watch Our Video</div>
            <div className="text-center flex justify-center">
                <div className="flex-row justify-center">
                    <ReactPlayer 
                    
                    playing={ isPlaying }
                    url="https://vimeo.com/572026505" 
                    controls
                    light
                    playIcon={ <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg> </div> }
                    
                />
                </div>
               
            </div>
        </section>
       
    )
}

export default Video

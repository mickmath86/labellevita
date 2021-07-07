import React from 'react'
import Layout from './Components/Layout'

import Carousel from './Components/Carousel'

export default function gallery() {
    const SLIDE_COUNT = 5;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    return (
        <div>
            <Layout>
             {/* <EmblaCarousel slides={slides} /> */}
             <div className="w-100">
             <Carousel />
             </div>
            
            </Layout>
           
        </div>
    )
}

 

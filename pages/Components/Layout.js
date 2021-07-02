import React from 'react'
import Nav from './Nav'
import Footer from '../Components/Footer'

function Layout({children}) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
            
        </div>
    )
}

export default Layout

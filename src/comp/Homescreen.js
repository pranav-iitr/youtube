import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Recomended from './Recomended'
function Homescreen() {
    return (
        <div>
           <Header/> 
           <Sidebar />
           <Recomended/>
        </div>
    )
}

export default Homescreen

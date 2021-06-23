import React from 'react'
import "./SidebarRow.css"

function SidebarRow({selected,title, Icon}) {
    return (
        <div className={`sidebarrow ${selected  && 'selected'}`}>
            <Icon className="sidebarrow_icon " />
            <h1 className="sidebarrow_title">{title}</h1 >
        </div>
    )
}

export default SidebarRow

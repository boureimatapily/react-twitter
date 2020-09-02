import React from 'react'
import "./SidebarItem.css"

function SidebarItem({active, text, Icon}) {
    return (
        <div>
            <div className={`sidebarItem ${active && 'sidebarItem--active'}`}>
                <Icon />
                <h2> {text} </h2>
            </div>
        </div>
    )
}

export default SidebarItem

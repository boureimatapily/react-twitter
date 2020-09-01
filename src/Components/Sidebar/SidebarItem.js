import React from 'react'

function SidebarItem({text, Icon}) {
    return (
        <div>
            <div className="sidebarItem">
                <Icon />
                <h2> {text} </h2>
            </div>
        </div>
    )
}

export default SidebarItem

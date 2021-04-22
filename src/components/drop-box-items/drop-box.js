import React, { useRef, useState } from 'react'

export function MostItems(props) {
    return (
        <li style={{ animationDelay: `${props.delay || 0}s` }}>
            <i className="fa fa-check"></i>
            <p>{props.children}</p>
        </li>
    )
}

export function MaybeItems(props) {
    return (
        <li style={{ animationDelay: `${props.delay || 0}s` }}>
            <i className="fa fa-circle-o"></i>
            <p>{props.children}</p>
        </li>
    )
}


export function DropBox(props) {
    let [open, setOpen] = useState(false);
    let drop = useRef(null);
    return (
        <div className="title-items" ref={drop} style={{ animationDelay: `${props.delay || 0}s` }}>
            <h4
                onClick={() => {
                    setOpen(!open);
                    if (open) drop.current.style.height = `350px`;
                    else drop.current.style.height = `45px`;
                }}
            >{props.name} <i className="fa fa-sort-desc"></i></h4>
            <div className="drop-box">
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>

    )
}

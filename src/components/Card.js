import React from "react";

export default function Card(props) {
    const onClick = (event) => {
        const id = event.target.id
        props.onClick(id)
    }
    
    return (
        <div>
            <img 
                src={props.img} 
                alt=''
                id={props.id}
                onClick={onClick}>    
            </img>
            <h3>{props.name}</h3>
        </div>
    )
}
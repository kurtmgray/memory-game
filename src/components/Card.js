import React from "react";

export default function Card(props) {
    
    
    return (
        <div>
            <img 
                src={props.img} 
                alt=''
                id={props.id}
                onClick={props.onClick}>    
            </img>
            <h3>{props.name}</h3>
        </div>
    )
}
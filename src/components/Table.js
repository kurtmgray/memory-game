import React from 'react'
import Card from './Card'


export default function Table(props) {
    const characterCards = props.characterOrder.map((id) =>
        props.characters.find(character => character.id === id) 
    )

    return (
        <div>
            {characterCards.map(character => {
                return (
                    <Card 
                        key={character.id}    
                        id={character.id}
                        name={character.name}
                        img={character.img}
                        onClick={props.onClick}
                    />
                )     
            })}  
        </div>
    )
}

import React, { useState } from 'react'
import Card from './Card'
import uniqid from 'uniqid'

export default function Table() {
    const [score, setScore] = useState(0)
    const [hiScore, setHiScore] = useState(0)
    const [characters, setCharacters] = useState([
       {
        name: 'Bob',
        img: 'https://picsum.photos/id/1062/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'John',
        img: 'https://picsum.photos/id/1066/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Nancy',
        img: 'https://picsum.photos/id/1027/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Brian',
        img: 'https://picsum.photos/id/1074/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Daniel',
        img: 'https://picsum.photos/id/1084/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Alann',
        img: 'https://picsum.photos/id/22/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Benny',
        img: 'https://picsum.photos/id/237/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Linda',
        img: 'https://picsum.photos/id/548/200/300',
        isClicked: false,
        id: uniqid()
       }, {
        name: 'Glenn',
        img: 'https://picsum.photos/id/27/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Moana',
        img: 'https://picsum.photos/id/765/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Tim',
        img: 'https://picsum.photos/id/144/200/300',
        isClicked: false,
        id: uniqid()
       }, 
       {
        name: 'Chris',
        img: 'https://picsum.photos/id/132/200/300',
        isClicked: false,
        id: uniqid()
       }, 
    ])
    
    const shuffleCharacters = () => {
        console.log('shuffle')
    }

    const checkWin = () => {
        // if all characters are checked, game is won
    }

    const checkLose = () => {
        // if clicked character isClicked, game over, shuffle, restart
    }

    const setScores = () => {
        // increments score on every false=>true click (in the handleClick map()?)
        // if score = hiScore, increment hiScore as well
    }

    const handleClick = (event) => {
        shuffleCharacters()
        console.log(event.target.id)
        setCharacters(prevState => {
            const newCharItem = prevState.map(item => {
                if(item.id === event.target.id) {
                    return {...item, isClicked: true}
                }
                return {...item}
            })
            return newCharItem
        })         
    }

    const characterCards = characters.map((character) => {
        return (
            <Card 
                key={character.id}    
                id={character.id}
                name={character.name}
                img={character.img}
                isClicked={character.isClicked}
                handleClick={handleClick}
            /> 
        )
    })
    
    return (
        <div>
            {JSON.stringify(characters)}
            {characterCards}

        </div>
    )
}
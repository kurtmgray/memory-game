import React, { useState } from 'react'
import Card from './Card'
import Header from './Header'
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
        setCharacters(prevState => {
            let currentIndex = prevState.length; 
            let randomIndex, temp
            console.log(prevState)
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex--);
                temp = prevState[currentIndex]
                prevState[currentIndex] = prevState[randomIndex]
                prevState[randomIndex] = temp
            }
            return prevState;
        })
    }

    const checkWin = () => {
        let win = characters.every(c => c.isClicked === true)
        console.log(win)
    }

    const checkLose = (event) => {
        // if clicked character isClicked, display game over, then options to shuffle/reset scores/restart
    }

    const setScores = () => {
        setScore(() => {
            const newScore = characters.filter(character => 
                character.isClicked ? true : false
            ).length
            return newScore
        })
        setHiScore(prevState => 
            // not the correct condition (should be ===), but need to figure out async click/update
            prevState <= score ? prevState = score : prevState
        )    
    }

    const markClicked = (event) => {
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

    // is this ok?
    const handleClick = (event) => {
        markClicked(event)
        checkLose()
        shuffleCharacters()
        setScores()
        checkWin()
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
    // want header to be sibling of Table... in here now for working purposes.
    // do I need to move all of state up to App (parent)?
    return (
        <div>
            <Header 
                score={score}
                hiScore={hiScore}
            />

            <div>{JSON.stringify(characters)}</div>


            {characterCards}
            
        </div>
    )
}
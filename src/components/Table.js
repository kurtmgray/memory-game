import React, { useState } from 'react'
import Card from './Card'
import Header from './Header'
import uniqid from 'uniqid'

export default function Table() {
    const characters = [
        {
         name: 'Bob',
         img: 'https://picsum.photos/id/1062/200/300',
         id: uniqid()
        }, 
        {
         name: 'John',
         img: 'https://picsum.photos/id/1066/200/300',
         id: uniqid()
        }, 
        {
         name: 'Nancy',
         img: 'https://picsum.photos/id/1027/200/300',
         id: uniqid()
        }, 
        {
         name: 'Brian',
         img: 'https://picsum.photos/id/1074/200/300',
         id: uniqid()
        }, 
        {
         name: 'Daniel',
         img: 'https://picsum.photos/id/1084/200/300',
         id: uniqid()
        }, 
        {
         name: 'Alann',
         img: 'https://picsum.photos/id/22/200/300',
         id: uniqid()
        }, 
        {
         name: 'Benny',
         img: 'https://picsum.photos/id/237/200/300',
         id: uniqid()
        }, 
        {
         name: 'Linda',
         img: 'https://picsum.photos/id/548/200/300',
         id: uniqid()
        }, {
         name: 'Glenn',
         img: 'https://picsum.photos/id/27/200/300',
         id: uniqid()
        }, 
        {
         name: 'Moana',
         img: 'https://picsum.photos/id/765/200/300',
         id: uniqid()
        }, 
        {
         name: 'Tim',
         img: 'https://picsum.photos/id/144/200/300',
         id: uniqid()
        }, 
        {
         name: 'Chris',
         img: 'https://picsum.photos/id/132/200/300',
         id: uniqid()
        }, 
     ]
    const [score, setScore] = useState(0)
    const [hiScore, setHiScore] = useState(0)
    const [clicked, setClicked] = useState([])
    const [characterOrder, setOrder] = useState(
        characters.map(c => c.id))
    

    
    const shuffleOrder = () => {
        setOrder(prevState => {
            let currentIndex = prevState.length; 
            let randomIndex, temp
            console.log(prevState)
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex--);
                temp = prevState[currentIndex]
                prevState[currentIndex] = prevState[randomIndex]
                prevState[randomIndex] = temp
            }
            console.log(prevState)
            return prevState; 
        })
        console.log(characterOrder)
    }

    const checkGameOver = (event) => {
        const win = clicked.length === 12
        const lose = clicked.includes([event.target.id])
        console.log('win:', win, clicked.length)
        console.log('lose:', lose, clicked)

    }

    const setScores = () => {
        const oldHigh = hiScore
        setScore(prevScore => prevScore + 1)
        setHiScore(prevHi => {
            if (oldHigh === score) {
                return prevHi + 1
            }
        })    
    }

    // this needs to go in card to keep event listener references in the same component as the listened-to HTML
    const addCardToClicked = (event) => {
        setClicked(prevState => {
            prevState.push(event.target.id)
            return prevState
        })
    }

    // is this ok?
    const handleClick = (event) => {
        addCardToClicked(event)
        checkGameOver(event)
        // if(checkGameOver()){
        //     return
        // }
        setScores()
        shuffleOrder()
    }

    const characterCards = characterOrder.map((id) =>
        characters.find(character => character.id === id) 
    )       
    console.log(characterOrder)
    console.log(characterCards)
    

    // want header to be sibling of Table... in here now for working purposes.
    // do I need to move all of state up to App (parent)?
    return (
        <div>
            <Header 
                score={score}
                hiScore={hiScore}
            />

            <div>{JSON.stringify(characters)}</div>
            {characterCards.map(character => {
                return (
                    <Card 
                        key={character.id}    
                        id={character.id}
                        name={character.name}
                        img={character.img}
                        onClick={handleClick}
                    />
                )     
            })}
            
        </div>
    )
}


// flow:
//   new game:
//      shuffle card order
//      reset score
//   on card click
//      check if the card has been clicked (in clicked array)
//      yes?
//          game over
//      no?
//          increment score, high score if needed
//          add card id into clicked array
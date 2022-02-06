import React, {useState} from 'react'
import Header from './components/Header'
import GameOver from './components/GameOver'
import Table from './components/Table'
import characters from './data/characters'

export default function App() {

const [score, setScore] = useState(0)
const [hiScore, setHiScore] = useState(0)
const [clicked, setClicked] = useState([])
const [winLose, setWinLose] = useState(null)
const [characterOrder, setOrder] = useState(
    characters.map(c => c.id))

// originally had this in state, but it gave my async problems
// is ok to declare outside of state this way?
// defined in handleClick    
let result

const shuffleOrder = () => {
  setOrder(prevState => {
    const newState = [...prevState]
    let currentIndex = newState.length; 
    let randomIndex, temp
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex--);
        temp = newState[currentIndex]
        newState[currentIndex] = newState[randomIndex]
        newState[randomIndex] = temp
    }
    return newState; 
  })
}

const checkGameOver = (id) => {
  const win = score === characters.length
  const lose = clicked.includes(id)
  if (win) {
    return 'win'
  } else if (lose) {
    return 'lose'
  } else return null
}

const setScores = () => {
  const oldHigh = hiScore
  setScore(prevScore => prevScore + 1)
  setHiScore(prevHi => oldHigh === score ? prevHi + 1 : prevHi)    
}

const addCardToClicked = (id) => {
  setClicked(prevState => {
    const newState = [...prevState]
    if (prevState.includes(id)) {
      return prevState
    } else {
      newState.push(id)
      return newState
    }  
  })
}

const handleClick = (id) => {
  setWinLose(null)
  result = checkGameOver(id)
  if (result !== null) {
    setWinLose(result)
  }
  if(result){
    setWinLose(result)
    setScore(0)
    setClicked([])
    return   
  } else {
    addCardToClicked(id)
    setScores()
  }
  shuffleOrder()
}

  return (
    <div>
      <Header 
        score={score}
        hiScore={hiScore}
      />
      <GameOver
        winLose={winLose}
      />
      <Table 
        characters={characters}
        characterOrder={characterOrder}
        onClick={handleClick}
      />
    </div>
  );
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


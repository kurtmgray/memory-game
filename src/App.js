import React, {useState} from 'react'
import Header from './components/Header'
import GameOver from './components/GameOver'
import Table from './components/Table'
import characters from './data/characters'

export default function App() {

const [[score, hiScore], setScores] = useState([0,0])
const [clicked, setClicked] = useState([])
const [winLose, setWinLose] = useState(null)
const [characterOrder, setOrder] = useState(
    characters.map(c => c.id))

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

const handleScores = () => {
  setScores(([prevScore, prevHiScore]) => {
    const newScore = prevScore + 1
    const newHiScore = newScore > prevHiScore ? newScore : prevHiScore
    return [newScore, newHiScore]
  })
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
  let result = checkGameOver(id)
  if(result){
    setWinLose(result)
    setScores(([prevScore, prevHiScore]) => [0, prevHiScore])
    setClicked([])
    return   
  } else {
    addCardToClicked(id)
    handleScores()
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

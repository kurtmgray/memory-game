import HiScore from './HiScore'
import Score from './Score'

export default function Header (props) {
    return (
        <div>
            <h1>Memory Card Game</h1>
            <h3>Click on all of the images without clicking on one twice!</h3>
            <Score 
                score={props.score}
            />
            <HiScore 
                hiScore={props.hiScore}
            />
        </div>
    )
}
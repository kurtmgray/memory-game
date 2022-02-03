import HiScore from './HiScore'
import Score from './Score'

export default function Header () {
    return (
        <div>
            <h1>Memory Card Game</h1>
            <h3>Click on all of the images without clicking on one twice!</h3>
            <Score />
            <HiScore />
        </div>
    )
}
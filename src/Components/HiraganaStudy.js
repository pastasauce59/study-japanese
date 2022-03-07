import React, { useState } from 'react'
import { hiraganaAll } from './Hiragana'

function HiraganaStudy(props) {

    const [hiragana, setHiragana] = useState(hiraganaAll)
    const [count, setCount] = useState(0)
    const [flip, setFlip] = useState(null)

    let plusMinusCount = () => {
        setCount(count + 1)
    }

    let handleFlip = () => {
        flip === null ? setFlip({transform: 'rotateY(180deg)'}) : setFlip(null)
    }



    return (
        <div className='card-container'>
            <div onClick={handleFlip} className='card' style={flip}>
                <div className='front-card'>
                    <hr/>
                    {hiragana[count].character}
                    <hr/>
                </div>

                <div className='back-card'>
                    <hr/>
                    {hiragana[count].key}
                    <hr/>
                </div>
            </div>

            <div>
                <button onClick={plusMinusCount}>Next</button>
            </div>
            
        </div>
    );
}

export default HiraganaStudy;

// hiraganaAll[Math.floor(Math.random() * (70 - 0))]
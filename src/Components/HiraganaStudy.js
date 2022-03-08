import React, { useState } from 'react'
import { hiraganaAll } from './Hiragana'

function HiraganaStudy(props) {

    const [hiragana, setHiragana] = useState(hiraganaAll)
    const [count, setCount] = useState(0)
    const [flip, setFlip] = useState(null)

    let plusMinusCount = (e) => {
        if (e.target.textContent === 'Next'){
            if (count === 70){
                return
            } else {
        setCount(count + 1)
            }
        }
        if (e.target.textContent === 'Previous'){
            if (count === 0){
                return
            } else {
            setCount(count - 1)
            }
        }
        // console.log(e.target.textContent)
    }

    let handleFlip = () => {
        flip === null ? setFlip({transform: 'rotateY(180deg)'}) : setFlip(null)
    }



    return (
        <div className='study-container'>

            <div className='number-of'>
            <h3>{`${hiragana.indexOf(hiragana[count]) + 1} out of ${hiragana.length}`}</h3>
            </div>

            <div className='study-info'>
                <p>ℹ️ Click on the card to the right to reveal the characters translation!</p>
            </div>

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
            </div>

            <div className='buttons'>
                <div className='button'>
                    <button onClick={plusMinusCount}>Next</button>
                </div>

                <div className='button'>
                    <button onClick={plusMinusCount}>Previous</button>
                </div>
            </div>
    </div>
    );
}

export default HiraganaStudy;

// hiraganaAll[Math.floor(Math.random() * (70 - 0))]
import React, { useState } from 'react'
import { katakanaAll } from './Katakana'

function KatakanaStudy(props) {
    const [katakana, setKatakana] = useState(katakanaAll)
    const [count, setCount] = useState(0)
    const [flip, setFlip] = useState(null)

    let katakanaList = [...katakanaAll]

    let handleChange = (e) => {
        if (e.target.value === 'ordered'){
            setKatakana(katakanaAll);
            setCount(0)
            // setFlip(null)
            setFlip({transform: 'rotateY(360deg)'})
        }
        else if (e.target.value === 'reverse'){
            setKatakana(katakanaList.reverse());
            setCount(0)
            // setFlip(null)
            setFlip({transform: 'rotateY(360deg)'})
        }
        else if (e.target.value === 'shuffle'){
            shuffleArray(katakanaList);
            setKatakana(katakanaList)
            setCount(0)
            setFlip({transform: 'rotateY(360deg)'})
        }
        setTimeout(() => {setFlip(null)}, 300)
    }

    let shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
    }

    let plusMinusCount = (e) => {

        if (e.target.textContent === 'Next'){
            if (count === 70){
                return
            } else {
            // setFlip(null)
            setFlip({transform: 'rotateY(360deg)'})
            setTimeout(() => {setCount(count + 1); setFlip(null)}, 300)
            }
        }
        if (e.target.textContent === 'Previous'){
            if (count === 0){
                return
            } else {
            setFlip({transform: 'rotateY(360deg)'})
            // setFlip(null);
            // setCount(count - 1)
            setTimeout(() => {setCount(count - 1); setFlip(null)}, 300)
            }
        }
    }

    let handleFlip = () => {
        flip === null ? setFlip({transform: 'rotateY(180deg)'}) : setFlip(null)
    }


    return (
        <div className='study-container'>

            <div className='number-of'>
            <h3>{`${katakana.indexOf(katakana[count]) + 1} out of ${katakana.length}`}</h3>
            </div>

           <div className='order-choice'>

            <form>
                <label>Select Order:</label>
                <br/>
                <select onChange={handleChange}>
                <option value='ordered'>Ordered 🔢</option>
                <option value='reverse'>Reverse Order ↩️</option>
                <option value='shuffle'>Shuffle 🔀</option>
                </select>
            </form>
            </div>

            <div className='study-info'>
                <p>ℹ️ Click on the card to the right to reveal the characters translation!</p>
            </div>

            <div className='card-container'>
                <div onClick={handleFlip} className='card' style={flip}>
                    <div className='front-card'>
                        <hr/>
                        {katakana[count].character}
                        <hr/>
                    </div>

                    <div className='back-card'>
                        <hr/>
                        {katakana[count].key}
                        <hr/>
                    </div>
                </div>
            </div>

            <div className='buttons'>
                <div onClick={plusMinusCount} className='button'>
                    Next
                </div>

                <div onClick={plusMinusCount} className='button'>
                    Previous
                </div>
            </div>
    </div>
    );
}

export default KatakanaStudy;
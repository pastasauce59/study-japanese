import React, { useState } from 'react'
import { hiraganaAll } from './Hiragana'

function HiraganaStudy(props) {

    const [hiragana, setHiragana] = useState(hiraganaAll)
    const [count, setCount] = useState(0)
    const [flip, setFlip] = useState(null)
    const [listOrder, setListOrder] = useState('')

    let hiraganaList = [...hiraganaAll]

    let handleChange = (e) => {
        if (e.target.value === 'ordered'){
            setHiragana(hiraganaAll);
            setCount(0)
            setFlip(null)
            // setListOrder(e.target.value)
        }
        else if (e.target.value === 'reverse'){
            setHiragana(hiraganaList.reverse());
            setCount(0)
            setFlip(null)
            // setListOrder(e.target.value)
        }
        else if (e.target.value === 'shuffle'){
            //logic soon to come
            shuffleArray(hiraganaList);
            setHiragana(hiraganaList)
            setCount(0)
        }
        // console.log(e.target.value)
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
            setFlip(null);
            setTimeout(() => {setCount(count + 1)}, 300)
            
            }
        }
        if (e.target.textContent === 'Previous'){
            if (count === 0){
                return
            } else {
            setFlip(null);
            setCount(count - 1)
            }
        }
        // console.log(e.target.textContent)
    }

    let handleFlip = () => {
        flip === null ? setFlip({transform: 'rotateY(180deg)'}) : setFlip(null)
    }

    // console.log(hiraganaAll)
    // console.log(hiragana)

    return (
        <div className='study-container'>

            <div className='number-of'>
            <h3>{`${hiragana.indexOf(hiragana[count]) + 1} out of ${hiragana.length}`}</h3>
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
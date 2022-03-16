import React, { useState } from 'react';
import { hiraganaAll } from './Hiragana';


function HiraganaQuiz(props) {

    const [hiragana, setHiragana] = useState(hiraganaAll)
    const [count, setCount] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)

    let randomize = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
    }

    randomize(hiragana)


    let OG = [...hiraganaAll]

    let hiraganaKeys = []

    hiragana.map( h => hiraganaKeys.push(h.key))

    let quizbarKeys = [
        hiragana[count].key,
        hiragana[Math.floor(Math.random() * 71)].key,
        hiragana[Math.floor(Math.random() * 71)].key,
        hiragana[Math.floor(Math.random() * 71)].key
    ]

    randomize(quizbarKeys)

    // let randomize = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //       }
    // }

    let handleClick = (e) => {
        console.log(e.target.textContent)
        if(e.target.textContent === hiragana[count].key){
            console.log('correct')
        } else console.log('WRONG')
    }


    return (
        <div className='quiz-container'>
            
            <div className='number-of'>
                <h3>{`${hiragana.indexOf(hiragana[count]) + 1} out of ${hiragana.length}`}</h3>
            </div>

            <div className='correct-count'>
                <h4 className='correct'>Correct: {correct}</h4>
                <h4 className='incorrect'>Incorrect: {incorrect}</h4>
            </div>

            <div className='card-container'>
                <div onClick={null} className='card' style={null}>
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
            
            <div onClick={handleClick} className='quiz-bar'>   
                {/* <h1>{hiragana[count].key}</h1>
                <h1>ka</h1>
                <h1>shi</h1>
                <h1>so</h1> */}
                {quizbarKeys.map(key => 
                    <h1>{key}</h1>
                    )}
            </div>    
        </div>
    );
}

export default HiraganaQuiz;
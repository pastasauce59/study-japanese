import React, { useState, useEffect } from 'react';
import { rndmHiraBase, rndmHiraDak, rndmHiraAll } from './Hiragana';
import { rndmKataBase, rndmKataDak, rndmKataAll } from './Katakana';
import Quiz from './Quiz';

function QuizSelect(props) {
    const [from, setFrom] = useState(props.from)
    const [select, setSelect] = useState({quiz: null, keys: null, style: null})

    
    let rand = (arr) => { 
        return Math.floor(Math.random() * arr.length);  
    }
     

    let randomize = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }

          for(let i = 0; i < array.length; i++){
        
            if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])){
                let x = array.lastIndexOf(array[i])
                // array[x] = array[rand()]
                array[x] = select[rand()].key
                // to check where doubles would have appeared if not for this function
                // console.log('double')
            } 
        }
    }

    let selectQuiz = (e) => {
        let newQuiz 

        if(e.target.textContent === 'Base 46 Characters'){
            // newQuiz = rndmHiraBase
            newQuiz = from === 'Hiragana' ? rndmHiraBase : rndmKataBase;

        }

        if(e.target.textContent === 'Dakuten only'){
            newQuiz = from === 'Hiragana' ? rndmHiraDak : rndmKataDak;
        }

        if(e.target.textContent === 'Base 46 + Dakuten'){
            newQuiz = from === 'Hiragana' ? rndmHiraAll : rndmKataAll;
        }

        let choices = [
            newQuiz[0].key, 
            newQuiz[rand(newQuiz)].key,
            newQuiz[rand(newQuiz)].key,
            newQuiz[rand(newQuiz)].key
        ]
        
        randomize(choices)
        setSelect({
            quiz: newQuiz,
            keys: choices,
            style: {visibility: 'hidden'}
        })
    }

    return (
        <div>
            <h2 className='aside' style={select.style}>{from} quiz selection:</h2>
            <div className='begin-quiz-container' style={select.style}>
                <div onClick={selectQuiz} className='button-quiz-select'>
                    Base 46 Characters
                </div>
                <div onClick={selectQuiz} className='button-quiz-select'>
                    Dakuten only
                </div>
                <div onClick={selectQuiz} className='button-quiz-select'>
                    Base 46 + Dakuten
                </div>
            </div>

            {select.quiz !== null ? <Quiz select={select} from={from} /> : null}
        </div>         
    );
}

export default QuizSelect;
import React, { useState, useEffect } from 'react';
import { hiraganaAll, randomized } from './Hiragana';


function HiraganaQuiz(props) {

    const [hiragana, setHiragana] = useState(randomized)
    const [shuffle, setShuffle] = useState(false)
    const [count, setCount] = useState(65)
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [flip, setFlip] = useState(null)
    const [style, setStyle] = useState(null)
    const [style2, setStyle2] = useState(null)
    const [hidden, setHidden] = useState({visibility: 'hidden'})

    let randomize = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
    }

    let rand = () => { 
       return Math.floor(Math.random() * 71);  
    } 

    const [quizKeys, setQuizKeys] = useState(null)

    let choices = [
        hiragana[count].key, 
        hiragana[rand()].key,
        hiragana[rand()].key,
        hiragana[rand()].key
    ]

    let nextChoices = [
        hiragana[count + 1].key, 
        hiragana[rand()].key,
        hiragana[rand()].key,
        hiragana[rand()].key
    ]

    randomize(choices)
    randomize(nextChoices)
    
   

    let handleClick = (e) => {
        console.log(e.target.textContent)
        if(e.target.textContent === hiragana[count].key){
            console.log('correct')
            setStyle({background: '#4faa4f'})
            setCorrect(correct + 1)
        } else {
            console.log('WRONG');
            setStyle2({background: '#ce5252'})
            setIncorrect(incorrect + 1)
        }
        setFlip({transform: 'rotateY(180deg)'})
        setTimeout(() => { 
            setFlip(null) 
            setStyle(null) 
            setStyle2(null)
            setQuizKeys(nextChoices)
            if (count + 1 === 70){
                setShuffle(false)
                setStyle({visibility: 'hidden'})
                setHidden(null)
            } else {
            setTimeout(() => {setCount(count + 1)}, 300) }
        }, 2000)
    }

    let beginQuiz = (e) => {
        if(e.target.textContent === 'Quiz Me Again!'){
            window.location = 'http://localhost:3000/hiragana/quiz'
        } else if (e.target.textContent === 'Study Hiragana'){
            window.location = 'http://localhost:3000/hiragana/study'
        } else
        
        setShuffle(true);
        setQuizKeys(choices)
        randomize(quizKeys)
        
    }

    console.log(count)

    return (
        <div className='quiz-container'>
            {shuffle === false ? 

                <div className='begin-quiz-container'>
                    <div onClick={beginQuiz} style={style}className='begin-quiz'>
                        Begin Quiz
                    </div>

                    <div className='quiz-complete' style={hidden}>
                        <h1>{`You've completed the quiz and got ${Math.floor((correct / hiragana.length) * 10000) / 100}% correct!`}</h1>
                        <div className='buttons'>
                            <div onClick={beginQuiz} style={null}className='button'>
                            Quiz Me Again!
                            </div>
                            <div onClick={beginQuiz} className='button'>
                            Study Hiragana
                            </div>
                        </div>
                    </div>
                </div> 
                
                : 
                
                <div>
            
                    <div className='number-of'>
                        <h3>{`${hiragana.indexOf(hiragana[count]) + 1} out of ${hiragana.length}`}</h3>
                    </div>

                    <div className='correct-count'>
                        <h4 className='correct'>Correct: {correct}</h4>
                        <h4 className='incorrect'>Incorrect: {incorrect}</h4>
                    </div>

                    <div className='card-container'>
                        <div className='card' style={flip}>
                            <div className='front-card'>
                                <hr/>
                                {hiragana[count].character}
                                {/* {ques} */}
                                <hr/>
                            </div>

                            <div className='back-card'>
                                <hr/>
                                {hiragana[count].key}
                                {/* {answer} */}
                                <hr/>
                            </div>
                        </div>
                    </div>
                    
                    <div className='quiz-bar'>   
                        
                        {quizKeys.map(key => key === hiragana[count].key ? 
                        <h1 onClick={handleClick} style={style}>{key}</h1> : <h1 onClick={handleClick} style={style2}>{key}</h1>
                        )}

                    </div>  

                </div> 
            }

        </div>
    );
}

export default HiraganaQuiz;
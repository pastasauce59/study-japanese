import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function Quiz(props) {

    
    const [quiz, setQuiz] = useState(props.select.quiz)
    const [shuffle, setShuffle] = useState(true)
    const [count, setCount] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [flip, setFlip] = useState(null)
    const [style, setStyle] = useState(null)
    const [style2, setStyle2] = useState(null)
    const [hidden, setHidden] = useState({visibility: 'hidden'})
    const [quizKeys, setQuizKeys] = useState(props.select.keys)
    const [disabled, setDisabled] = useState(false)
    

    const [wrong, setWrong] = useState([])
    //test

    let randomize = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
    }

    let removeDuplicates = (arr) => {

        for(let i = 0; i < arr.length; i++){
        
            if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
                let x = arr.lastIndexOf(arr[i])
                // arr[x] = arr[rand()]
                arr[x] = quiz[rand()].key
                // to check where doubles would have appeared if not for this function
                // console.log('double')
            } 
        }
    }


    let rand = () => { 
       return Math.floor(Math.random() * quiz.length);  
    }


    let handleClick = (e) => {

        let nextChoices = [

            quiz[count + 1].key, 
            quiz[rand()].key,
            quiz[rand()].key,
            quiz[rand()].key
        ]

        removeDuplicates(nextChoices)
        randomize(nextChoices)
        setDisabled(true)

        if(e.target.textContent === quiz[count].key){
            // console.log('correct')
            setStyle({background: '#4faa4f'})
            setCorrect(correct + 1)
        } else {
            // console.log('WRONG');
            setStyle2({background: '#ce5252'})
            setIncorrect(incorrect + 1)
            setWrong([...wrong, quiz[count]])
        }

        setFlip({transform: 'rotateY(180deg)'})
        setTimeout(() => { 
            setFlip(null) 
            setStyle(null) 
            setStyle2(null)
            setQuizKeys(nextChoices)
            setDisabled(false)
            if (count + 1 === quiz.length - 1){
                setShuffle(false)
                setStyle({visibility: 'hidden'})
                setHidden(null)
            } else {
            setTimeout(() => {setCount(count + 1)}, 300) }
        }, 2000)
    }


    let beginQuiz = (e) => {

        if(e.target.textContent === 'Quiz Me Again!'){
            window.location = '/hiragana/quiz'
        } else if (e.target.textContent === 'Study Hiragana'){
            window.location = '/hiragana/study'
        } else
        
        // setShuffle(true);
        // setQuizKeys(choices)
        randomize(quizKeys)
        
    }

    // console.log(wrong)

    return (
        <div className='quiz-container'>
            {shuffle === false ? 

                

                    <div className='quiz-complete' style={hidden}>
                        <h1>{`You've completed the quiz and got ${Math.floor((correct / quiz.length) * 10000) / 100}% correct!`}</h1>
                        <div className='buttons-quiz-cmplt'>
                            {/* <div onClick={beginQuiz} style={null}className='button'>
                            Quiz Me Again!
                            </div>
                            <div onClick={beginQuiz} className='button'>
                            Study {props.from}
                            </div> */}
                            <Link to={`/${props.from.toLowerCase()}/quiz`} onClick={() => window.location.reload()} className='button'>Quiz Me Again!</Link>
                            <Link to={`/${props.from.toLowerCase()}/study`} className='button'>Study {props.from}</Link>
                        </div>
                    </div>
                 
                
                : 
                
                <div>
            
                    <div className='number-of'>
                        <h3>{`${quiz.indexOf(quiz[count]) + 1} out of ${quiz.length}`}</h3>
                    </div>

                    <div className='correct-count'>
                        <h4 className='correct'>Correct: {correct}</h4>
                        <h4 className='incorrect'>Incorrect: {incorrect}</h4>
                    </div>

                    <div className='card-container'>
                        <div className='card' style={flip}>
                            <div className='front-card'>
                                <hr/>
                                {quiz[count].character}
                                <hr/>
                            </div>

                            <div className='back-card'>
                                <hr/>
                                {quiz[count].key}
                                <hr/>
                            </div>
                        </div>
                    </div>
                    
                    {quizKeys !== null ? 
                    <div className='quiz-bar'>   
            
                        {quizKeys.map(key => key === quiz[count].key ? 
                        <h1 onClick={disabled ? null : handleClick} style={style}>{key}</h1> : <h1 onClick={disabled ? null : handleClick} style={style2}>{key}</h1>
                        )}

                    </div>  : null }

                </div> 
            }
        </div>
    );
}

export default Quiz;
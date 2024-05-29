import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import React, { useState } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import NavigationBar from "./Components/NavigationBar";
import HiraganaCharacters from './Components/HiraganaCharacters';
import HiraganaStudy from './Components/HiraganaStudy';
import KatakanaCharacters from './Components/KatakanaCharacters';
import KatakanaStudy from './Components/KatakanaStudy';
import QuizSelect from './Components/QuizSelect';
import Error from './Components/Error'
import Login from './Components/Login';
import SignUp from './Components/Signup';


function App() {
  const [show, setShow] = useState(false)

  let handleShow = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      
      <div className='circle'></div>
      
      <NavigationBar />

      <Routes>
        <Route exact path='/' element={
          <div className='homepage'>
            <h1 className='about'>Welcome to Study🇯🇵Japanese!</h1>
            <h4 className='about'>A little bit about this app:</h4>
            <div className='about'>
              <p >In order to study any language, you first must start with learning the foundation that
                is the target language's alphabet. I created this app with that goal in mind. As someone who is
                fascinated with Japanese culture, I have taken up an interest in learning the language. That's when I came
                to learn Japanese kind of has three alphabet's, or three different writing systems, that work together as a whole.
                They are hiragana, katakana and kanji.
                </p>
                <p>
                This app is focused on learning hiragana and katakana (because kanji is a different beast 👺) by having 
                character tables to reference, index cards to study and finally a quiz to see how many characters can be 
                correctly recalled. I wanted to create an app that I found easy to use, simple and straightforward at what it's
                trying to achieve, and all while being an enjoyable user experience.
              </p>
            </div>

            {!show ?
              <div className='buttons-homepage'>
                <div onClick={handleShow} className='button'>Let's Begin!</div> 
              </div> 
              :
              <div className='buttons-homepage'>
                <Link to='/katakana' className='button'>Study Katakana</Link>
                <div className='or'>Or</div>
                <Link to='/hiragana' className='button'>Study Hiragana</Link>
              </div> 
            }
            
            
            
            
          </div>
        } />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/hiragana' element={<HiraganaCharacters />} />
        <Route exact path='/hiragana/study' element={<HiraganaStudy />} />
        <Route exact path='/hiragana/quiz' element={<QuizSelect from={'Hiragana'} />} />
        <Route exact path='/katakana' element={<KatakanaCharacters />} />
        <Route exact path='/katakana/study' element={<KatakanaStudy />} />
        <Route exact path='/katakana/quiz' element={<QuizSelect from={'Katakana'} />} />
        {/* <Route path='*' element={<Navigate replace to='/' />} /> */}
        <Route path='*' element={<Error />} />

      </Routes>

    </div>
  );
}

export default App;

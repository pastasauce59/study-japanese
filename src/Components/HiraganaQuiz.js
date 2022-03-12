import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function HiraganaQuiz(props) {

    let handleClick = (e) => {
        console.log(e.target.textContent)
    }

    return (
        <div className='quiz-container'>
            <h1>inside hiragana quiz</h1>
            {/* <Navbar fixed='bottom' bg='light' variant='dark'> */}
            <div onClick={handleClick} className='quiz-bar'>   
                <h1>a</h1>
                <h1>ka</h1>
                <h1>shi</h1>
                <h1>so</h1>
            </div>    
        </div>
    );
}

export default HiraganaQuiz;
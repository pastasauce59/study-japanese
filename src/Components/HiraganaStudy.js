import React from 'react';
import { hiraganaAll } from './Hiragana'

function HiraganaStudy(props) {

    return (
        <div className='card-container'>
            <div className='card'>
                {hiraganaAll[0].character}
            </div>
            
        </div>
    );
}

export default HiraganaStudy;
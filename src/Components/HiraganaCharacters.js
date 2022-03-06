import React from 'react';
import { hiragana, hiraganaDakuten} from './Hiragana'

function Hiragana(props) {
    return (
        <div className='characters-container'>

            <div className='characters-info'>
                <h1>Characters:</h1>
                <p>ℹ️ Below you will find the 46 characters of hiragana. Hiragana is a syllabary and one of three
                    parts that makes up the Japanese writing system along with katakana and kanji.
                </p>
            </div>

            {hiragana.map(characters => characters.map(character =>
                <div className='characters'>
                    <h1>{character.character}</h1>
                    <hr/>
                    <h3>{character.key}</h3> 
                </div>
            ))}

            <div className='characters-info'>
                <h1>Dakuten:</h1>
                <p>ℹ️ Also known as ten-ten, these are variations of the other hiragana. The symbol above
                    the characters denounces how they should be pronouned.
                </p>
            </div>

            {hiraganaDakuten.map(characters => characters.map(character =>
                <div className='characters'>
                    <h1>{character.character}</h1>
                    <hr/>
                    <h3>{character.key}</h3> 
                </div>
            ))}
            

        </div>
    );
}

export default Hiragana;
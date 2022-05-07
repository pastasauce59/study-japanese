import React from 'react';
import { Link } from 'react-router-dom'

function Error(props) {
    return (
        <div className='error-page'>
            <h1 className='about-error'>ウープス！(oops!)</h1>
                <div className='about-error'>
                    <h4>Looks like we got lost in translation...</h4>
                    <img src='/assets/LIT.gif' alt='lost in translation'/>
                    <h4>Let's head back <Link to='/' className='button'>Home</Link></h4>
                </div>
        </div>
    );
}

export default Error;
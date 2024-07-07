import React from 'react';

function Session(props) {



    return (
        <div>
            {`Hello ${props.user.username}!`}
            <div>
                <h4>Previous quiz mistakes:</h4>
                {props.user.mistakes}
            </div>
        </div>
    );
}

export default Session;
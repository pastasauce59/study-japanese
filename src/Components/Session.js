import React from 'react';
import axios from "axios"
import { baseURL } from '../utils/constant';

function Session(props) {

   const handlePost = () => {
        axios.put(`${baseURL}/update/${props.user.username}`, {mistakes: [...props.user.mistakes, "IS THIS WORKING? PT. 2"]})
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.error("Error updating:", error)
        })
    }


    return (
        <div>
            {`Hello ${props.user.username}!`}
            <div>
                <h4>Previous quiz mistakes:</h4>
                {props.user.mistakes}
            </div>
            <button onClick={handlePost}>
                Test Post Requst
            </button>
        </div>
    );
}

export default Session;
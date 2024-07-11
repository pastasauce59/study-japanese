import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { baseURL } from '../utils/constant';

function Account(props) {

    const navigate = useNavigate()

   const handlePost = () => {
        axios.put(`${baseURL}/update/${props.user.username}`, {mistakes: [...props.user.mistakes, "!!!WORKING? PT. 3???"]})
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.error("Error updating:", error)
        })
    }

    const logged_in = () => {
       return <div>
            {`Hello ${props.user.username}!`}
            <div>
                <h4>Previous quiz mistakes:</h4>
                {props.user.mistakes}
            </div>
            <button onClick={handlePost}>
                Test Post Requst
            </button>
        </div>
    }

    useEffect(() => {
        if(!props.user){
            navigate('/login')
        }
    })


    return (
        <div>
        {logged_in()}
        </div>
    );
}

export default Account;
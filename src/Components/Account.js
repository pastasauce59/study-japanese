import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { baseURL } from '../utils/constant';
import { jwtDecode } from 'jwt-decode';

function Account(props) {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwtDecode(token)
            console.log(user)
            if(!user) {
                localStorage.removeItem('token')
                navigate('/login')
            } 
        }
    })

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

    // useEffect(() => {
    //     if(!props.user){
    //         navigate('/login')
    //     }
    // })


    return (
        <div>
        {logged_in()}
        </div>
    );
}

export default Account;
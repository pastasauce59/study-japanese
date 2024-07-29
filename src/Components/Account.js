import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { baseURL } from '../utils/constant';
import { jwtDecode } from 'jwt-decode';

function Account({ userState }) {
    const {user, setUser} = userState

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`${baseURL}/dashboard`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            const userData = res.data.user
            setUser({
                username: userData.username,
                mistakes: userData.mistakes
            })
        })
        .catch(error => {
            console.error('There was an error!', error.res)
            navigate('/login')
        })
    }, [])

   const handlePost = () => {
        axios.put(`${baseURL}/update/${user.username}`, {mistakes: [...user.mistakes, "!!!WORKING? PT. 3???"]})
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.error("Error updating:", error)
        })
    }

    const logged_in = () => {
       return <div>
            {`Hello ${user.username}!`}
            <div>
                <h4>Previous quiz mistakes:</h4>
                {user.mistakes.length == 0 ? "Looks like there is nothing here yet!" : user.mistakes}
            </div>
            <button onClick={handlePost}>
                Test Post Requst
            </button>
        </div>
    }


    return (
        <div>
        {user ? logged_in() : "Loading..."}
        </div>
    );
}

export default Account;
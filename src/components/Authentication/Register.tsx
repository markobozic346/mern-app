import React, { FormEventHandler, useState } from 'react'
import './Register.scss'
import axios from 'axios'
interface Props {

}

const Register = (props: Props) => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",

    })

    const handleUserDataChange = (value: string, property: string) => {
        setUserData({
            ...userData,
            [property]: value,
        })
    }
    const handleFormSubmit = () => {
        axios.post('http://localhost:4000/signup', userData)

    }
    return (
        <div className='register-container'>

            <form onSubmit={(e) => {
                e.preventDefault()
                handleFormSubmit()

            }}>
                <h1>Register</h1>
                <label>username:
                    <input onChange={(e) => { handleUserDataChange(e.currentTarget.value, "username") }} value={userData.username} type="text" name='username' placeholder='enter your username here' />
                </label>
                <label>email:
                    <input onChange={(e) => { handleUserDataChange(e.currentTarget.value, "email") }} value={userData.email} type="mail" name='email' placeholder='enter your mail here' />
                </label>
                <label>password:
                    <input onChange={(e) => { handleUserDataChange(e.currentTarget.value, "password") }} value={userData.password} type="password" name='password' placeholder='enter password' />
                </label>

                <input className='btn-submit' type="submit" value='Register' />
            </form>
        </div>
    )
}

export default Register

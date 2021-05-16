import React, { useState } from 'react'
import './Register.scss'

interface Props {

}

const Register = (props: Props) => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",

    })

    const handleChangeUsername = (value: string) => {
        setUserData({
            ...userData,
            username: value,
        })
    }
    const handleChangeEmail = (value: string) => {
        setUserData({
            ...userData,
            email: value,
        })
    }
    const handleChangePassword = (value: string) => {
        setUserData({
            ...userData,
            password: value,
        })
    }
    return (
        <div className='register-container'>

            <form>
                <h1>Register</h1>
                <label>username:
                    <input onChange={(e) => { handleChangeUsername(e.currentTarget.value) }} type="text" name='username' placeholder='enter your username here' />
                </label>
                <label>email:
                    <input onChange={(e) => { handleChangeEmail(e.currentTarget.value) }} type="mail" name='email' placeholder='enter your mail here' />
                </label>
                <label>password:
                    <input onChange={(e) => { handleChangePassword(e.currentTarget.value) }} type="password" name='password' placeholder='enter password' />
                </label>

                <input className='btn-submit' type="submit" value='Register' />
            </form>
        </div>
    )
}

export default Register

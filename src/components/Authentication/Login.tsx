import React, { useState } from 'react'
import { validateLocaleAndSetLanguage } from 'typescript';
import './Login.scss';
interface Props {

}

const Login = (props: Props) => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const handleLoginDataChange = (value: string, property: string) => {
        setLoginData({
            ...loginData,
            [property]: value,
        })
    }
    return (
        <div className='login-container'>
            <form>
                <h1>Login</h1>
                <label>
                    Username:
                    <input onChange={(e) => { handleLoginDataChange(e.target.value, "username") }} type="text" placeholder='enter username here' />
                </label>
                <label>
                    Password:
                    <input onChange={(e) => { handleLoginDataChange(e.target.value, "password") }} type='password' placeholder='enter password here' />
                </label>

                <input className='btn-submit' type='submit' value='Login' />
            </form>

        </div>
    )
}

export default Login

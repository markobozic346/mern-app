import React from 'react'
import './Register.scss'
interface Props {

}

const Register = (props: Props) => {
    return (
        <div className='register-container'>

            <form>
                <h1>Register</h1>
                <label>username:
                    <input type="text" name='username' placeholder='enter your username here' />
                </label>
                <label>email:
                    <input type="mail" name='email' placeholder='enter your mail here' />
                </label>
                <label>password:
                    <input type="password" name='password' placeholder='enter password' />
                </label>
                <label>confirm password:
                    <input type="password" name='confirm-password' placeholder='enter password' />
                </label>
                <input className='btn-register' type="submit" value='Register' />
            </form>
        </div>
    )
}

export default Register

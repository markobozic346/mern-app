import React from 'react'
import './Login.scss';
interface Props {

}

const Login = (props: Props) => {
    return (
        <div className='login-container'>
            <form>
                <h1>Login</h1>
                <label>
                    Username:
                    <input type="text" placeholder='enter username here' />
                </label>
                <label>
                    Password:
                    <input type='password' placeholder='enter password here' />
                </label>

                <input className='btn-submit' type='submit' value='Login' />
            </form>

        </div>
    )
}

export default Login

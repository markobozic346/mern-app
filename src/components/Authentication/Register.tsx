import React from 'react'

interface Props {

}

const Register = (props: Props) => {
    return (
        <div className='register-container'>
            <form>
                <label htmlFor="username">username</label>
                <input type="text" name='username' placeholder='enter your username here' />

            </form>
        </div>
    )
}

export default Register

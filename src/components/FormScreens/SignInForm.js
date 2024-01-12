import React from 'react'

const SignInForm = () => {
  return (
    <div className='login-container'>
      <form action='' className='login-form'>
        <h1 className='login-title'>Sign In</h1>

        <div className='input-group'>
          <input
            type='text'
            className='input-field'
            placeholder=' '
            id='email'
          />
          <label for='email' className='input-label'>
            Email
          </label>
        </div>

        <div className='input-group'>
          <input
            type='password'
            className='input-field'
            placeholder=' '
            id='password'
          />
          <label for='password' className='input-label'>
            Password
          </label>
        </div>

        <input type='submit' className='submit-button' value='Sign In' />
        <p>
          Don't have an account? why not <a href='/signup'>register</a> real
          quick!
        </p>
      </form>
    </div>
  )
}

export default SignInForm

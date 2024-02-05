import React from 'react'

const SignInForm = () => {
  return (
    <div className='login-container'>
      <form action='' className='login-form'>
        <div className='login-header-section'>
          <h1 className='login-title'>Login</h1>
          <p className='login-text'>Enter your personal information below</p>
        </div>
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
        <p style={{ marginTop: '3rem' }}>
          Don't have an account? why not{' '}
          <a href='/signup' style={{ color: '#4caf50' }}>
            register
          </a>{' '}
          real quick!
        </p>
      </form>
    </div>
  )
}

export default SignInForm

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

function FormInput(props) {
  const userRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const username = userRef.current.value
    const password = passwordRef.current.value

    if (props.onSubmit) {
      if (!props.isRegister) {
        props.onSubmit(username, password)
      } else {
        const email = emailRef.current.value
        const confirmPassword = confirmPasswordRef.current.value
        props.onSubmit(username, email, password, confirmPassword)
      }
    }
  }

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className='brand'>
            <img src={Logo} alt='Logo' />
            <h1>chat-link</h1>
          </div>
          <input
            type='text'
            placeholder='Username'
            name='username'
            ref={userRef}
          />
          {props.isRegister ? (
            <input
              type='email'
              placeholder='Email'
              name='email'
              ref={emailRef}
            />
          ) : null}
          <input
            type='password'
            placeholder='Password'
            name='password'
            ref={passwordRef}
          />
          {props.isRegister ? (
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              ref={confirmPasswordRef}
            />
          ) : null}
          <button type='submit'>
            {props.isRegister ? 'Create User' : 'Login'}
          </button>
          {props.isRegister ? (
            <span>
              Already have an account? <Link to='/login'>Login</Link>
            </span>
          ) : (
            <span>
              Don't have an account? <Link to='/register'>Sign Up</Link>
            </span>
          )}
        </form>
      </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: linear-gradient(90deg, #1c7933, #9acc32);
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #105b39;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: white;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background: linear-gradient(to right, #278034, #93c832);
      padding: 1rem;
      border: 0.15rem solid #388534;
      border-radius: 0.4rem;
      font-size: 1rem;
      width: 100%;
      color: white;
      &:focus {
        outline: none;
      }
      ::placeholder {
        color: white;
      }
    }
    button {
      background-color: #38124f;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      font-size: medium;
      border-radius: 0.4rem;
      text-transform: uppercase;
      &:hover {
        background-color: #3b88f5;
      }
      transition: 0.3s ease-in-out;
    }
    span {
      color: #38124f;
      text-transform: capitalize;
      font-weight: 500;
      a {
        color: #3b88f5;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`

export default FormInput

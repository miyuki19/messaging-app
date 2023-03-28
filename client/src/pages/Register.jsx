import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {
  const userRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!handleValidation()) return
    //TODO: handle register
  }

  const toastOption = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  const handleValidation = () => {
    const username = userRef.current.value
    const password = passwordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value
    console.log(password, confirmPassword, username)
    if (password !== confirmPassword) {
      toast.error('Password and confirm password must be the same', toastOption)
      return false
    } else if (username.length < 3) {
      toast.error('Username must be greater than 3 characters', toastOption)
      return false
    } else if (password.length < 8) {
      toast.error('Password must be greater than 8 characters', toastOption)
      return false
    }
    return true
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
          <input type='email' placeholder='Email' name='email' ref={emailRef} />
          <input
            type='password'
            placeholder='Password'
            name='password'
            ref={passwordRef}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            ref={confirmPasswordRef}
          />
          <button type='submit'>Create User</button>
          <span>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
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

export default Register

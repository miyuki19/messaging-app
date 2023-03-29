import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FormInput from '../components/FormInput'

function Register() {
  const onHandleSubmit = React.useCallback(
    (username, email, password, confirmPassword) => {
      if (!handleValidation(username, email, password, confirmPassword)) return
      //TODO: handle register
    },
    []
  )

  const toastOption = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  const handleValidation = (username, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      toast.error('Password and confirm password must be the same', toastOption)
      return false
    } else if (username.length < 3) {
      toast.error('Username must be greater than 3 characters', toastOption)
      return false
    } else if (password.length < 8) {
      toast.error('Password must be greater than 8 characters', toastOption)
      return false
    } else if (email.length < 1) {
      toast.error('Email cannot be empty', toastOption)
      return false
    }
    return true
  }

  return (
    <>
      <FormInput isRegister={true} onSubmit={onHandleSubmit} />
      <ToastContainer />
    </>
  )
}

export default Register

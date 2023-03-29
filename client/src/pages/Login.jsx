import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FormInput from '../components/FormInput'

function Login() {
  const onHandleSubmit = React.useCallback((username, password) => {
    //TODO: handle login
  }, [])

  // const toastOption = {
  //   position: 'bottom-right',
  //   autoClose: 5000,
  //   pauseOnHover: true,
  //   draggable: true,
  //   theme: 'dark',
  // }

  // const handleValidation = () => {
  //   const username = userRef.current.value
  //   const password = passwordRef.current.value
  //   const confirmPassword = confirmPasswordRef.current.value

  //   if (password !== confirmPassword) {
  //     toast.error('Password and confirm password must be the same', toastOption)
  //     return false
  //   } else if (username.length < 3) {
  //     toast.error('Username must be greater than 3 characters', toastOption)
  //     return false
  //   } else if (password.length < 8) {
  //     toast.error('Password must be greater than 8 characters', toastOption)
  //     return false
  //   }
  //   return true
  // }

  return (
    <>
      <FormInput isRegister={false} onSubmit={onHandleSubmit} />
      <ToastContainer />
    </>
  )
}
export default Login

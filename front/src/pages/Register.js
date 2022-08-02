import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Logueo exitoso! Redirigiendo...',
      })
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'Usuario creado! Redirigiendo...',
      })
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Iniciar sesion' : 'Registrarse'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <div>
            <label><b>Nombre :</b></label>
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
          </div>
        )}

        {/* email input */}
        <label><b>Email :</b></label>
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <label><b>Contraseña :</b></label>
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Enviar
        </button>
        <p>
          {values.isMember ? 'No tienes una cuenta?' : 'Ya tienes una cuenta?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Registrate' : 'Inicia sesión'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register

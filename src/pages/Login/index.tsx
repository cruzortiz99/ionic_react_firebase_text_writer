import { analytics as banner } from 'ionicons/icons'
import React, { useState } from 'react'
import { loginUser } from '../../api'
import AppLoader from '../../components/basics/AppLoader'
import LoginForm from '../../components/basics/LoginForm'
import LoginContainer from '../../components/containers/LoginContainer'
import './Login.css'
import { useDispatch } from 'react-redux'
import { setUserState } from '../../store/account/actions'
import { useHistory } from 'react-router'

const AppLogin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const login = async (email: string, password: string) => {
    const response: any = await loginUser(email, password)
    if (response) {
      dispatch(setUserState(response.user.email))
      history.replace('/dashboard')
    }
  }

  return (
    <LoginContainer banner={banner}>
      <AppLoader isOpen={isLoading} />
      <LoginForm
        onSave={async (email: string, password: string) => {
          setIsLoading(true)
          await login(email, password)
          setIsLoading(false)
        }}
      ></LoginForm>
    </LoginContainer>
  )
}

export default AppLogin

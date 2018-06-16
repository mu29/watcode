import React from 'react'
import { Header, GenericTemplate } from 'components'
import { LoginForm } from 'containers'

const AuthPage = () => (
  <GenericTemplate header={ <Header location="/auth" /> }>
    <LoginForm />
  </GenericTemplate>
)

export default AuthPage

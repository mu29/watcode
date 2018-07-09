import React from 'react'
import { Header, AuthForm, GenericTemplate } from 'components'

const AuthPage = () => (
  <GenericTemplate header={ <Header location="/auth" /> }>
    <AuthForm />
  </GenericTemplate>
)

export default AuthPage

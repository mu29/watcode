import React from 'react'
import { Header, GenericTemplate } from 'components'
import { Profile } from 'containers'

const AuthPage = () => (
  <GenericTemplate header={ <Header location="/auth" /> }>
    <Profile />
  </GenericTemplate>
)

export default AuthPage

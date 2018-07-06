import React from 'react'
import styled from 'styled-components'
import { Tab, TabPage, Header, GenericTemplate } from 'components'
import { SignInForm } from 'containers'
import { palette } from 'services/style'

const StyledTab = styled(Tab)`
  margin: 1rem 0;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};

  @media(max-width: 768px) {
    margin: 0;
    border: none;
  }
`

const AuthPage = () => (
  <GenericTemplate header={ <Header location="/auth" /> }>
    <StyledTab>
      <TabPage name="로그인">
        <SignInForm />
      </TabPage>
      <TabPage name="회원가입">
        <SignInForm />
      </TabPage>
    </StyledTab>
  </GenericTemplate>
)

export default AuthPage

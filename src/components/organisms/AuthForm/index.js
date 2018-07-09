import React from 'react'
import styled from 'styled-components'
import { Tab, TabPage } from 'components'
import { SignInForm, SignUpForm } from 'containers'
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

const AuthForm = () => (
  <StyledTab>
    <TabPage name="로그인">
      <SignInForm />
    </TabPage>
    <TabPage name="회원가입">
      <SignUpForm />
    </TabPage>
  </StyledTab>
)

export default AuthForm

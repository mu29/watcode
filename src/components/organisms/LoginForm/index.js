import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { Button, ReduxField } from 'components'
import { palette } from 'services/style'

const Form = styled.form`
  width: 30rem;
  margin: auto;
  padding: 1rem;
  border: 0.0625rem solid ${palette('gray.30')};
`

const StyledReduxField = styled(props => <ReduxField { ...props } />)`
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }
`

const StyledButton = styled(Button)`
  margin-top: 1.5rem;
`

const LoginForm = ({
  handleSubmit, isLoading,
}) => (
  <Form onSubmit={ handleSubmit }>
    <Field label="사용자명" name="name" placeholder="로그인 혹은 회원가입을 위한 사용자 이름입니다." component={ StyledReduxField } />
    <Field label="비밀번호" name="password" placeholder="4자 이상의 비밀번호를 입력해주세요." component={ StyledReduxField } />
    <StyledButton type="submit" disabled={ isLoading } block>시작하기</StyledButton>
  </Form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default LoginForm

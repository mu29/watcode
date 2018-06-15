import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Button, ReduxField, Link, Text } from 'components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 66%;
  margin: auto;
`

const StyledButton = styled(Button)`
  width: 50%;
`

const StyledLink = styled(Link)`
  margin-right: auto;
`

const RegisterArea = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  margin-top: 2rem;
`

const LoginForm = ({
  handleSubmit, submitting,
}) => (
  <Form onSubmit={ handleSubmit }>
    <Field name="email" label="이메일" placeholder="메일 주소를 입력해주세요" component={ ReduxField } />
    <Field type="password" name="password" label="비밀번호" placeholder="영문 / 숫자 4 ~ 20자" component={ ReduxField } />
    <StyledButton type="submit" disabled={ submitting }>시작하기</StyledButton>
    <RegisterArea>
      <StyledLink to="/policy">비밀번호가 기억나지 않으세요?</StyledLink>
      <Text font="gothic" fontSize={ 12 } color="gray.40">
        씀의 계정이 없으세요?&nbsp;
        <Link to="/">회원가입</Link>
      </Text>
    </RegisterArea>
  </Form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

LoginForm.defaultProps = {
  submitting: false,
}

export default LoginForm

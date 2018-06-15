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

const LoginArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

const StyledButton = styled(Button)`
  width: 50%;
`

const PolicyArea = styled.div`
  margin-top: 2.5rem;
`

const RegisterForm = ({
  handleSubmit, submitting,
}) => (
  <Form onSubmit={ handleSubmit }>
    <LoginArea>
      <Text font="gothic" fontSize={ 12 } color="gray.40">기존 회원이신가요?&nbsp;</Text>
      <Link to="/login">로그인</Link>
    </LoginArea>
    <Field name="email" label="이메일" placeholder="메일 주소를 입력해주세요" component={ ReduxField } />
    <Field type="password" name="password" label="비밀번호" placeholder="영문 / 숫자 8 ~ 20자" component={ ReduxField } />
    <Field name="author" label="필명" placeholder="당신을 어떻게 불러야 할까요?" component={ ReduxField } />
    <StyledButton type="submit" disabled={ submitting }>시작하기</StyledButton>
    <PolicyArea>
      <Text font="gothic" fontSize={ 12 } color="gray.40">
        시작하기를 누르시면 씀의&nbsp;
        <Link to="/policy">이용약관 및 개인정보 취급방침</Link>
        에 동의하게 됩니다.
      </Text>
    </PolicyArea>
  </Form>
)

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

RegisterForm.defaultProps = {
  submitting: false,
}

export default RegisterForm

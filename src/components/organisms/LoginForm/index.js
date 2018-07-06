import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { Button, ReduxField } from 'components'

const Form = styled.form`
  padding: 1rem;
  padding-top: 0.5rem;
`

const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`

const LoginForm = ({
  handleSubmit, isLoading,
}) => (
  <Form onSubmit={ handleSubmit }>
    <FieldWrapper>
      <Field label="사용자명" name="name" placeholder="로그인 혹은 회원가입을 위한 사용자 이름입니다." component={ ReduxField } />
    </FieldWrapper>
    <FieldWrapper>
      <Field label="비밀번호" name="password" placeholder="4자 이상의 비밀번호를 입력해주세요." component={ ReduxField } />
    </FieldWrapper>
    <Button type="submit" height={ 40 } fontSize={ 14 } disabled={ isLoading } block>시작하기</Button>
  </Form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default LoginForm

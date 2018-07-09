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

const SignInForm = ({
  handleSubmit, isLoading,
}) => (
  <Form onSubmit={ handleSubmit }>
    <FieldWrapper>
      <Field label="메일 주소" name="email" placeholder="example@watcode.net" component={ ReduxField } />
    </FieldWrapper>
    <FieldWrapper>
      <Field label="비밀번호" type="password" name="password" placeholder="6자 이상의 비밀번호를 입력해주세요." component={ ReduxField } />
    </FieldWrapper>
    <Button type="submit" height={ 40 } fontSize={ 14 } disabled={ isLoading } block>시작하기</Button>
  </Form>
)

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default SignInForm

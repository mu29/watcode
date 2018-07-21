import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { LoadingButton, ReduxField } from 'components'

const Form = styled.form`
  padding: 1rem;
  padding-top: 0.5rem;
`

const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`

const SignUpForm = ({
  handleSubmit, isLoading,
}) => (
  <Form onSubmit={ handleSubmit }>
    <FieldWrapper>
      <Field label="메일 주소" name="email" placeholder="example@watcode.net" component={ ReduxField } />
    </FieldWrapper>
    <FieldWrapper>
      <Field label="사용자명" name="name" placeholder="서비스에서 사용할 별칭입니다." component={ ReduxField } />
    </FieldWrapper>
    <FieldWrapper>
      <Field label="비밀번호" type="password" name="password" placeholder="6자 이상의 비밀번호를 입력해주세요." component={ ReduxField } />
    </FieldWrapper>
    <LoadingButton
      type="submit"
      height={ 40 }
      fontSize={ 14 }
      loadingSize={ 12 }
      isLoading={ isLoading }
      disabled={ isLoading }
      block
    >
      시작하기
    </LoadingButton>
  </Form>
)

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default SignUpForm

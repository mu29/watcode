import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { LoadingButton, ReduxField } from 'components'

const Form = styled.form`
  display: flex;
`

const StyledField = styled(Field)`
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 0.125rem 0 0 0.125rem;
`

const StyledButton = styled(LoadingButton)`
  width: 4.5rem;
  height: 3.375rem;
  padding: 0;
  font-size: 0.75rem;
  border-radius: 0 0.125rem 0.125rem 0;
`

const CommentForm = ({
  handleSubmit,
  isLoading,
}) => (
  <Form onSubmit={ handleSubmit }>
    <StyledField type="textarea" name="content" placeholder="이 작품은 어땠나요?" component={ ReduxField } />
    <StyledButton type="submit" isLoading={ isLoading } disabled={ isLoading }>등록</StyledButton>
  </Form>
)

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default CommentForm

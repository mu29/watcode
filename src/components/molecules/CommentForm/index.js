import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Button, ReduxField } from 'components'

const Form = styled.form`
  display: flex;
`

const CommentForm = ({
  handleSubmit, isLoading,
}) => (
  <Form onSubmit={ handleSubmit }>
    <Field type="textarea" name="content" placeholder="이 작품은 어땠나요?" component={ ReduxField } />
    <Button type="submit" disabled={ isLoading } width={ 96 } height={ 74 }>작성</Button>
  </Form>
)

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default CommentForm

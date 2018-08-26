import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { LoadingButton, ReduxField } from 'components'

const Form = styled.form`
  display: flex;
`

const FieldWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const StyledField = styled(Field)`
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 0.125rem 0 0 0.125rem;
`

const BookmarkForm = ({
  handleSubmit,
  isLoading,
}) => (
  <Form onSubmit={ handleSubmit }>
    <FieldWrapper>
      <StyledField
        type="textarea"
        name="content"
        rows="5"
        placeholder="즐겨찾기에 추가할 작품 목록을 입력해주세요."
        component={ ReduxField }
      />
    </FieldWrapper>
    <LoadingButton
      type="submit"
      fontSize={ 14 }
      height={ 108 }
      isLoading={ isLoading }
      disabled={ isLoading }
    >
      등록하기
    </LoadingButton>
  </Form>
)

BookmarkForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default BookmarkForm

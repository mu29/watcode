import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { ReduxField, IconButton } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 40%;
  min-width: 22rem;
  padding: 0.25rem;
  box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.1), 0 0 0 0.0625rem rgba(0,0,0,0.08);
  transition: box-shadow 0.2s;

  &:focus-within {
    box-shadow: 0 0.25rem 0.25rem 0 rgba(0,0,0,0.1), 0 0 0 0.0625rem rgba(0,0,0,0.08);
  }
`

const StyledField = styled(props => <Field { ...props } />)`
  min-width: 18.5rem;
  border: none;
  border-radius: 0;
  margin-bottom: 0;

  &:active, &:focus {
    border: none;
  }
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  padding: 0 1rem;
  border-radius: 0;
`

const SearchBar = () => (
  <Wrapper>
    <StyledField name="query" placeholder="무엇을 찾으세요? (번호, 제목, 작가, 태그)" component={ ReduxField } />
    <StyledIconButton backgroundColor="white.default" color="yellow.default" icon="search" />
  </Wrapper>
)

export default SearchBar

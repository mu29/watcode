import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { ReduxField, IconButton } from 'components'

const Wrapper = styled.div`
  display: flex;
`

const SearchBar = () => (
  <Wrapper>
    <Field name="query" placeholder="무엇을 찾으세요? (번호, 제목, 작가, 태그)" component={ ReduxField } />
    <IconButton icon="search" />
  </Wrapper>
)

export default SearchBar

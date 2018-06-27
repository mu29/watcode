import React from 'react'
import styled from 'styled-components'
import { Input, IconButton } from 'components'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: auto;
  border-radius: 0.125rem;
`

const StyledInput = styled(props => <Input { ...props } />)`
  width: 100%;
  margin: 0;
  padding: 0.5rem 0 0.5rem 0.75rem;
  border: none;
  border-radius: 0.125rem 0 0 0.125rem;

  &:active, &:focus {
    border: none;
  }
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  height: 2.5rem;
  margin: 0;
  padding: 0 1rem;
  border-radius: 0 0.125rem 0.125rem 0;
`

const SearchBar = props => (
  <Wrapper { ...props }>
    <StyledInput name="query" placeholder="번호, 제목, 작가, 태그로 검색하세요" />
    <StyledIconButton backgroundColor="white.default" color="yellow.default" icon="search" />
  </Wrapper>
)

export default SearchBar

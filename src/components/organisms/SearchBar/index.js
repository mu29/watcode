import React from 'react'
import styled from 'styled-components'
import { Input, IconButton } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-right: auto;
  border-radius: 0.125rem;

  @media(max-width: 639px) {
    flex: 1;
  }
`

const StyledInput = styled(props => <Input { ...props } />)`
  width: 100%;
  margin: 0;
  padding: 0.375rem 0 0.375rem 0.5rem;
  font-size: 0.875rem;
  border: none;
  border-radius: 0.125rem 0 0 0.125rem;

  &:active, &:focus {
    border: none;
  }
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  height: 2rem;
  margin: 0;
  padding: 0 1rem;
  border-radius: 0 0.125rem 0.125rem 0;
`

const SearchBar = props => (
  <Wrapper { ...props }>
    <StyledInput name="query" placeholder="무엇을 찾으세요? (번호, 제목, 작가, 태그)" />
    <StyledIconButton backgroundColor="white.default" color="yellow.default" icon="search" />
  </Wrapper>
)

export default SearchBar

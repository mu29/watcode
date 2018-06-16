import React from 'react'
import styled from 'styled-components'
import { Input, IconButton } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 60%;
  padding: 0.25rem;
  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.1), 0 0 0 0.0625rem rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s;
  background-color: ${palette('white.default')};

  &:focus-within {
    box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1), 0 0 0 0.0625rem rgba(0, 0, 0, 0.08);
  }

  @media(max-width: 639px) {
    width: 90%;
  }
`

const StyledInput = styled(props => <Input { ...props } />)`
  width: 100%;
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

const SearchBar = props => (
  <Wrapper { ...props }>
    <StyledInput name="query" placeholder="무엇을 찾으세요? (번호, 제목, 작가, 태그)" />
    <StyledIconButton backgroundColor="white.default" color="yellow.default" icon="search" />
  </Wrapper>
)

export default SearchBar

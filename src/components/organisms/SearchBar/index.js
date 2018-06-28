import React from 'react'
import styled from 'styled-components'
import { Input, IconButton } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: auto;
  border-radius: 0.125rem;
  background-color: ${palette('white.default')};
`

const StyledInput = styled(props => <Input { ...props } />)`
  width: 100%;
  margin: 0;
  font-size: 0.875rem;
  padding: 0.375rem 0.5rem;
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
    <StyledInput name="query" placeholder="번호, 제목, 작가, 태그로 검색하세요" />
    <StyledIconButton backgroundColor="white.default" color="yellow.default" icon="search" />
  </Wrapper>
)

export default SearchBar

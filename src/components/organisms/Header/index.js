import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'components'
import { SearchBar } from 'containers'
import { palette } from 'services/style'

const applyColor = (selected, basic) =>
  ({ to, location, theme }) => palette(to === location ? selected : basic)({ theme })
const color = applyColor('yellow.default', 'gray.20')
const borderColor = applyColor('yellow.default', 'transparent.default')

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: ${palette('gray.100')};

  @media(max-width: 768px) {
    padding-bottom: 0;
  }
`

const Container = styled.div`
  display: flex;
  max-width: 48rem;
  width: 100%;
  margin: auto;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

const SearchArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.875rem 0.5rem 0.5rem;

  @media(max-width: 768px) {
    padding-top: 0.75rem;
    padding-bottom: 0;
  }
`

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  flex: 1;
  height: 3.5rem;
  font-size: 1rem;
  color: ${color};
  border-bottom: 0.1875rem solid ${borderColor};
  border-radius: 0;
  background-color: transparent;

  @media(max-width: 767px) {
    height: 3rem;
  }
`

const Header = ({
  location,
}) => (
  <Wrapper>
    <Container>
      <SearchArea>
        <Image src="/resources/logo.svg" />
        <SearchBar />
      </SearchArea>
      <ButtonArea>
        <StyledIconButton icon="trophy" to="/" location={ location } />
        <StyledIconButton icon="star" to="/bookmarks" location={ location } />
        <StyledIconButton icon="comment" to="/community" location={ location } />
        <StyledIconButton icon="user" to="/auth" location={ location } />
      </ButtonArea>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Header

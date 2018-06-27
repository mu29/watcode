import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'components'
import { SearchBar } from 'containers'
import { palette } from 'services/style'

const color = ({ to, location, theme }) =>
  palette(to === location ? 'yellow.default' : 'gray.20')({ theme })

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 0.75rem 0;
  border-bottom: 0.25rem solid ${palette('yellow.default')};
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
  padding: 0 1rem 0 0.5rem;
`

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;

  @media(max-width: 768px) {
    margin-right: 0.5rem;
  }
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  flex: 1;
  height: 3.5rem;
  padding: 0 1.5rem;
  font-size: 1.25rem;
  color: ${color};
  border-radius: 0;
  background-color: transparent;
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

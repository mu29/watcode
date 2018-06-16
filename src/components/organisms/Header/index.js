import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'components'
import { palette } from 'services/style'

const color = ({ to, location, theme }) => palette(to === location ? 'yellow.default' : 'gray.30')({ theme })
const borderColor = ({ to, location, theme }) => palette(to === location ? 'yellow.default' : 'transparent.default')({ theme })

const Wrapper = styled.div`
  background-color: ${palette('gray.100')};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 64rem;
  width: 100%;
  margin: auto;
`

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1rem 0 2rem;
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  height: 4rem;
  padding: 0.25rem 0.5rem 0 0.5rem;
  margin: 0 1rem;
  color: ${color};
  border-bottom: 0.25rem solid ${borderColor};
  border-radius: 0;
  background-color: transparent;

  &:last-child {
    margin-left: auto;
    margin-right: 2rem;
  }
`

const Menu = styled.span`
  margin-left: 0.4rem;

  @media(max-width: 639px) {
    display: none;
  }
`

const Header = ({
  location,
}) => (
  <Wrapper>
    <Container>
      <Image src="/resources/logo.svg" />
      <StyledIconButton icon="home" to="/" location={ location }>
        <Menu>홈</Menu>
      </StyledIconButton>
      <StyledIconButton icon="star" to="/bookmarks" location={ location }>
        <Menu>즐겨찾기</Menu>
      </StyledIconButton>
      <StyledIconButton icon="comment" to="/community" location={ location }>
        <Menu>커뮤니티</Menu>
      </StyledIconButton>
      <StyledIconButton icon="user" to="/auth" location={ location } />
    </Container>
  </Wrapper>
)

Header.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Header

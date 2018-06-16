import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'components'
import { palette } from 'services/style'

const color = ({ to, location, theme }) => palette(to === location ? 'yellow.default' : 'gray.30')({ theme })
const borderColor = ({ to, location, theme }) => palette(to === location ? 'yellow.default' : 'transparent.default')({ theme })

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  background-color: ${palette('gray.100')};
  box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.08);
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  height: 4rem;
  padding: 0.25rem 0.5rem 0 0.5rem;
  margin: 0 1rem;
  color: ${color};
  border-bottom: 0.25rem solid ${borderColor};
  background-color: transparent;

  &:first-child {
    margin-left: 2rem;
  }

  &:last-child {
    margin-left: auto;
    margin-right: 2rem;
  }
`

const Text = styled.span`
  margin-left: 0.4rem;

  @media(max-width: 639px) {
    display: none;
  }
`

const Header = ({
  location,
}) => (
  <Wrapper>
    <StyledIconButton icon="home" to="/" location={ location }>
      <Text>홈</Text>
    </StyledIconButton>
    <StyledIconButton icon="star" to="/bookmarks" location={ location }>
      <Text>즐겨찾기</Text>
    </StyledIconButton>
    <StyledIconButton icon="comment" to="/community" location={ location }>
      <Text>커뮤니티</Text>
    </StyledIconButton>
    <StyledIconButton icon="user" to="/auth" location={ location } />
  </Wrapper>
)

Header.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Header

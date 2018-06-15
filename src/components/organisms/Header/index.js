import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'components'
import { palette } from 'services/style'

const color = ({ to, location, theme }) => palette(to === location ? 'yellow.default' : 'gray.90')({ theme })
const background = ({ to, location, theme }) => palette(to === location ? 'white.default' : 'gray.20')({ theme })
const borderBottom = ({ to, location, theme }) => palette(to === location ? 'white.default' : 'gray.40')({ theme })

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -0.0625rem;
  background-color: ${palette('gray.20')};
  border-bottom: 0.0625rem solid ${palette('gray.40')};
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  margin-bottom: -0.0625rem;
  color: ${color};
  background-color: ${background};
  border-right: 0.0625rem solid ${palette('gray.40')};
  border-bottom: 0.0625rem solid ${borderBottom};
  border-radius: 0;

  &:first-child {
    border-left: 0.0625rem solid ${palette('gray.40')};
  }
`

const LeftMenu = styled.div`
`

const RightMenu = styled.div`
`

const Header = ({
  location,
}) => (
  <Wrapper>
    <LeftMenu>
      <StyledIconButton icon="home" to="/" location={ location } />
      <StyledIconButton icon="trophy" to="/ranking" location={ location } />
      <StyledIconButton icon="star" to="/bookmarks" location={ location } />
      <StyledIconButton icon="comments" to="/community" location={ location } />
    </LeftMenu>
    <RightMenu>
      <StyledIconButton icon="user" to="/auth" location={ location } />
    </RightMenu>
  </Wrapper>
)

Header.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Header

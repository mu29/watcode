import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'components'
import { palette } from 'services/style'

const color = ({ href, location, theme }) => palette(href === location ? 'yellow.default' : 'gray.90')({ theme })
const background = ({ href, location, theme }) => palette(href === location ? 'white.default' : 'gray.10')({ theme })
const borderBottom = ({ href, location, theme }) => palette(href === location ? 'white.default' : 'gray.30')({ theme })

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${palette('gray.10')};
  border-bottom: 1px solid ${palette('gray.30')};
`

const StyledIconButton = styled(IconButton)`
  height: 2.4rem;
  margin-bottom: -1px;
  padding: 0 1rem;
  color: ${color};
  background-color: ${background};
  border-right: 1px solid ${palette('gray.30')};
  border-bottom: 1px solid ${borderBottom};
  border-radius: 0;

  &:first-child {
    border-left: 1px solid ${palette('gray.30')};
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
      <StyledIconButton icon="home" href="/" location={ location } />
      <StyledIconButton icon="trophy" href="/ranking" location={ location } />
      <StyledIconButton icon="star" href="/bookmarks" location={ location } />
      <StyledIconButton icon="comments" href="/community" location={ location } />
    </LeftMenu>
    <RightMenu>
      <StyledIconButton icon="user" href="/auth" location={ location } />
    </RightMenu>
  </Wrapper>
)

Header.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Header

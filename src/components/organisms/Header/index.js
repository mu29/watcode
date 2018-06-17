import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton } from 'components'
import { SearchBar } from 'containers'
import { palette } from 'services/style'

const color = ({ to, location, theme }) => palette(to === location ? 'yellow.default' : 'gray.30')({ theme })
const borderColor = ({ to, location, theme }) => palette(to === location ? 'yellow.default' : 'transparent.default')({ theme })

const Wrapper = styled.div``

const TopArea = styled.div`
  background-color: ${palette('gray.100')};
  padding: 1rem 0;
`

const BottomArea = styled.div`
  background-color: ${palette('gray.90')};
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
  margin: 0 1rem;
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  height: 2.5rem;
  padding: 0.125rem 0.5rem 0 0.5rem;
  margin: 0 0.5rem;
  font-size: 0.875rem;
  color: ${color};
  border-bottom: 0.125rem solid ${borderColor};
  border-radius: 0;
  background-color: transparent;

  &:first-child {
    margin-left: 1rem;
  }
`

const Menu = styled.span`
  margin-left: 0.4rem;
`

const Header = ({
  location,
}) => (
  <Wrapper>
    <TopArea>
      <Container>
        <Image src="/resources/logo.svg" />
        <SearchBar />
        <StyledIconButton icon="user" to="/auth" location={ location } />
      </Container>
    </TopArea>
    <BottomArea>
      <Container>
        <StyledIconButton icon="home" to="/" location={ location }>
          <Menu>홈</Menu>
        </StyledIconButton>
        <StyledIconButton icon="star" to="/bookmarks" location={ location }>
          <Menu>즐겨찾기</Menu>
        </StyledIconButton>
        <StyledIconButton icon="comment" to="/community" location={ location }>
          <Menu>커뮤니티</Menu>
        </StyledIconButton>
      </Container>
    </BottomArea>
  </Wrapper>
)

Header.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Header

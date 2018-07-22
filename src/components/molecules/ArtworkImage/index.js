import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Loading } from 'components'
import { palette } from 'services/style'

const textColor = ({ isBookmarked, theme }) =>
  palette(isBookmarked ? 'yellow.default' : 'gray.30')({ theme })

const Wrapper = styled.article`
  flex-shrink: 0;
  position: relative;
  width: 4.5rem;
  height: 6rem;
  margin-right: 0.5rem;
  overflow: hidden;
  border: 0.0625rem solid ${palette('gray.30')};
  cursor: pointer;
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(0.1rem);
`

const CodeArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette('gray.100')};
`

const StyledText = styled(Text)`
  color: ${textColor};
  transition: color 0.2s;

  ${Wrapper}:hover & {
    color: ${palette('yellow.default')};
  }
`

class ArtworkImage extends Component {
  toggleBookmark = (event) => {
    const {
      email,
      isBookmarked,
      createBookmark,
      deleteBookmark,
    } = this.props
    event.preventDefault()

    if (isBookmarked) {
      deleteBookmark()
    } else {
      createBookmark(email)
    }
  }

  render() {
    const {
      id,
      url,
      isLoading,
      isBookmarked,
    } = this.props
    return (
      <Wrapper { ...this.props } onClick={ this.toggleBookmark }>
        <Image src={ `https://${url}` } />
        <CodeArea>
          <Loading isLoading={ isLoading } size={ 12 } color="white.default" compact>
            <StyledText isBookmarked={ isBookmarked } fontSize={ 12 } small>#{ id }</StyledText>
          </Loading>
        </CodeArea>
      </Wrapper>
    )
  }
}

ArtworkImage.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  email: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  createBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
}

ArtworkImage.defaultProps = {
  email: undefined,
}

export default ArtworkImage

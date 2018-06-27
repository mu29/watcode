import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, Text } from 'components'
import { palette } from 'services/style'

const Wrapper = styled(Link)`
  flex-shrink: 0;
  position: relative;
  width: 5.25rem;
  height: 7rem;
  margin-right: 1rem;
  overflow: hidden;
  border: 0.0625rem solid ${palette('gray.30')};
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
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette('gray.100')};
`

const ArtworkImage = ({
  code,
  url,
  ...props
}) => (
  <Wrapper to={ `/artworks/${code}` } { ...props }>
    <Image src={ url } />
    <CodeArea>
      <Text color="gray.30" fontSize={ 14 } fontWeight={ 600 } small>#</Text>
      <Text color="gray.30" fontSize={ 14 } small>{ code }</Text>
    </CodeArea>
  </Wrapper>
)

ArtworkImage.propTypes = {
  code: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

export default ArtworkImage

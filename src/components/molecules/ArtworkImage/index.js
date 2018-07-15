import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 4.5rem;
  height: 6rem;
  margin-right: 0.5rem;
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
  id,
  url,
  ...props
}) => (
  <Wrapper { ...props }>
    <Image src={ url } />
    <CodeArea>
      <Text color="gray.30" fontSize={ 12 } small>#{ id }</Text>
    </CodeArea>
  </Wrapper>
)

ArtworkImage.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

export default ArtworkImage

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, color } from 'services/style'

const Wrapper = styled.div`
  margin: auto;
  padding: 1rem;
`

const Progress = styled.div`
  width: ${size};
  height: ${size};
  margin: auto;
  animation: rotate 0.8s infinite linear;
  border: 0.1875rem solid ${color};
  border-right-color: transparent;
  border-radius: 50%;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loading = ({ isLoading, children, ...props }) => (
  isLoading ? (
    <Wrapper>
      <Progress { ...props } />
    </Wrapper>
  ) : children
)

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.number,
}

Loading.defaultProps = {
  isLoading: true,
  children: null,
  color: 'black',
  size: 24,
}

export default Loading

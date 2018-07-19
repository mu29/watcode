import React from 'react'
import styled from 'styled-components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};

  @media(max-width: 768px) {
    margin: 0;
    border: none;
  }
`

const Message = styled.div`
  padding: 4rem;
  text-align: center;
`

const Preparing = () => (
  <Wrapper>
    <Message>준비중입니다 :)</Message>
  </Wrapper>
)

export default Preparing

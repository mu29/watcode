import React from 'react'
import styled from 'styled-components'
import { Panel } from 'components'

const Message = styled.div`
  padding: 4rem;
  text-align: center;
`

const Preparing = () => (
  <Panel>
    <Message>준비중입니다 :)</Message>
  </Panel>
)

export default Preparing

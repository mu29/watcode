import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${palette('gray.20')};
`

const Header = styled.header`
  height: 3.5rem;

  @media(max-width: 768px) {
    height: 6.25rem;
  }
`

const Content = styled.section`
  flex: 1;
  max-width: 48rem;
  width: 100%;
  margin: 0 auto;
`

const GenericTemplate = ({ header, children, ...props }) => (
  <Wrapper { ...props }>
    <Header>{ header }</Header>
    <Content>{ children }</Content>
  </Wrapper>
)

GenericTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default GenericTemplate

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

const Header = styled.header``

const Content = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 64rem;
  width: 100%;
  margin: auto;
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

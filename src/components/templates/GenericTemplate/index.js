import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  background-color: ${palette('gray.20')};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 64rem;
  width: 100%;
  margin: auto;
`

const Header = styled.header``

const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GenericTemplate = ({ header, children, ...props }) => (
  <Wrapper { ...props }>
    <Container>
      <Header>{ header }</Header>
      <Content>{ children }</Content>
    </Container>
  </Wrapper>
)

GenericTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default GenericTemplate

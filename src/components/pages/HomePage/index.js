import React from 'react'
import styled from 'styled-components'
import { Header, GenericTemplate } from 'components'
import { SearchBar } from 'containers'

const StyledSearchBar = styled(SearchBar)`
  margin: auto;
`

const HomePage = () => (
  <GenericTemplate header={ <Header location="/" /> }>
    <StyledSearchBar />
  </GenericTemplate>
)

export default HomePage

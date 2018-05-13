import React from 'react'
import { Header, GenericTemplate } from 'components'
import { SearchBar } from 'containers'

const HomePage = () => (
  <GenericTemplate header={ <Header location="/" /> }>
    <SearchBar />
  </GenericTemplate>
)

export default HomePage

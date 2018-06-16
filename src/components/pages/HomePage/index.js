import React from 'react'
import { Header, SearchBanner, GenericTemplate } from 'components'

const HomePage = () => (
  <GenericTemplate
    header={
      <React.Fragment>
        <Header location="/" />
        <SearchBanner />
      </React.Fragment>
    }
  />
)

export default HomePage

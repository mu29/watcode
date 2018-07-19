import React from 'react'
import { Preparing, Header, GenericTemplate } from 'components'

const CommunityPage = () => (
  <GenericTemplate header={ <Header location="/community" /> }>
    <Preparing />
  </GenericTemplate>
)

export default CommunityPage

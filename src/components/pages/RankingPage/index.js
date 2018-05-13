import React from 'react'
import styled from 'styled-components'
import { Header, Tab, TabPage, GenericTemplate } from 'components'
import { ArtworkList } from 'containers'

const StyledTab = styled(Tab)`
  width: 48rem;
  margin: 4rem 0;

  @media(max-width: 1024px) {
    width: 90%;
  }
`

const RankingPage = () => (
  <GenericTemplate header={ <Header location="/ranking" /> }>
    <StyledTab>
      <TabPage title="오늘">
        <ArtworkList />
      </TabPage>
      <TabPage title="주간">
        <ArtworkList />
      </TabPage>
      <TabPage title="월간">
        <ArtworkList />
      </TabPage>
    </StyledTab>
  </GenericTemplate>
)

export default RankingPage

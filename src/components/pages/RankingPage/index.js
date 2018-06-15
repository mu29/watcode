import React from 'react'
import styled from 'styled-components'
import { Header, Tab, TabPage, GenericTemplate } from 'components'
import { ArtworkList } from 'containers'

const StyledTab = styled(Tab)`
  width: 44rem;
  margin: 4rem 0;

  @media(max-width: 1024px) {
    width: 90%;
  }
`

const RankingPage = () => (
  <GenericTemplate header={ <Header location="/ranking" /> }>
    <StyledTab>
      <TabPage name="오늘">
        <ArtworkList />
      </TabPage>
      <TabPage name="주간">
        <ArtworkList />
      </TabPage>
      <TabPage name="월간">
        <ArtworkList />
      </TabPage>
    </StyledTab>
  </GenericTemplate>
)

export default RankingPage

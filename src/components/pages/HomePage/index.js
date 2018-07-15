import React from 'react'
import styled from 'styled-components'
import { Tab, TabPage, Header, GenericTemplate } from 'components'
import {
  RecentArtworkList,
  DailyArtworkList,
  WeeklyArtworkList,
  MonthlyArtworkList,
} from 'containers'
import { palette } from 'services/style'

const StyledTab = styled(Tab)`
  margin: 1rem 0;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};

  @media(max-width: 768px) {
    margin: 0;
    border: none;
  }
`

const HomePage = () => (
  <GenericTemplate header={ <Header location="/" /> }>
    <StyledTab>
      <TabPage name="신간">
        <RecentArtworkList />
      </TabPage>
      <TabPage name="일간">
        <DailyArtworkList />
      </TabPage>
      <TabPage name="주간">
        <WeeklyArtworkList />
      </TabPage>
      <TabPage name="월간">
        <MonthlyArtworkList />
      </TabPage>
    </StyledTab>
  </GenericTemplate>
)

export default HomePage

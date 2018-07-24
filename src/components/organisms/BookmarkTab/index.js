import React from 'react'
import styled from 'styled-components'
import { Tab, TabPage } from 'components'
import { BookmarkList, RecommendationList } from 'containers'
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

const BookmarkTab = () => (
  <StyledTab>
    <TabPage name="즐겨찾기">
      <BookmarkList />
    </TabPage>
    <TabPage name="추천 작품">
      <RecommendationList />
    </TabPage>
  </StyledTab>
)

export default BookmarkTab

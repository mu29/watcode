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

const Message = styled.div`
  padding: 4rem;
  text-align: center;
`

const BookmarkPage = () => (
  <GenericTemplate header={ <Header location="/bookmarks" /> }>
    <StyledTab>
      <TabPage title="즐겨찾기">
        <ArtworkList />
      </TabPage>
      <TabPage title="추천 작품">
        <Message>준비중입니다 :)</Message>
      </TabPage>
    </StyledTab>
  </GenericTemplate>
)

export default BookmarkPage

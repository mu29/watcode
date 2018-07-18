import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import queryString from 'query-string'
import { Tab, TabPage, Header, GenericTemplate } from 'components'
import { TagsSearchList, ArtistSearchList, TitleSearchList, CodeSearchList } from 'containers'
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

const SearchPage = ({ location }) => {
  const { query } = queryString.parse(location.search)
  return (
    <GenericTemplate header={ <Header location="/search" /> }>
      <StyledTab>
        <TabPage name="태그">
          <TagsSearchList type="tags" query={ query } />
        </TabPage>
        <TabPage name="작가">
          <ArtistSearchList type="artist" query={ query } />
        </TabPage>
        <TabPage name="제목">
          <TitleSearchList type="title" query={ query } />
        </TabPage>
        <TabPage name="번호">
          <CodeSearchList type="id" query={ query } />
        </TabPage>
      </StyledTab>
    </GenericTemplate>
  )
}

SearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
}

export default SearchPage

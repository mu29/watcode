import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Panel, Header, GenericTemplate } from 'components'
import { SearchArtworkList } from 'containers'

const SearchPage = ({ location }) => {
  const { query } = queryString.parse(location.search)
  return (
    <GenericTemplate header={ <Header location="/search" /> }>
      <Panel>
        <SearchArtworkList query={ query } />
      </Panel>
    </GenericTemplate>
  )
}

SearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
}

export default SearchPage

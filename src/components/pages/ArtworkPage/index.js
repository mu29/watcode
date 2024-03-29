import React from 'react'
import PropTypes from 'prop-types'
import { Header, GenericTemplate } from 'components'
import { ArtworkView } from 'containers'

const ArtworkPage = ({ match }) => (
  <GenericTemplate header={ <Header location={ `/artworks/${match.params.id}` } /> }>
    <ArtworkView id={ parseInt(match.params.id, 10) } />
  </GenericTemplate>
)

ArtworkPage.propTypes = {
  match: PropTypes.shape({}).isRequired,
}

export default ArtworkPage

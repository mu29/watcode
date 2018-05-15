import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const TabPage = styled.div`
`

TabPage.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default TabPage

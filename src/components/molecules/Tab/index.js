import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Button } from 'components'
import { palette, borderColor } from 'services/style'

const getWeight = ({ selected }) => (selected ? 600 : 400)

const getSelectedBorder = ({ selected, theme }) =>
  (selected ? `0.1875rem solid ${palette('yellow.default')({ theme })}` : 'none')

const TabContainer = styled.div`
  width: 100%;
  height: 100%;
`

const TabHeader = styled.div`
  display: flex;
`

const TabDivider = styled.div`
  height: 0.125rem;
  margin-top: -0.125rem;
  z-index: -1;
  background-color: ${borderColor};
`

const TabItem = styled(Button)`
  box-sizing: content-box;
  height: 2.5rem;
  padding: 0rem 0.75rem;
  font-weight: ${getWeight};
  color: ${palette('gray.90')};
  background-color: transparent;
  border-radius: 0;
  border-bottom: ${getSelectedBorder};

  &:hover {
    color: ${palette('gray.90')};
  }
`

class Tab extends Component {
  state = {
    index: 0,
  }

  handleTabChange = index => this.setState({ index })

  render() {
    const { children } = this.props
    const { index } = this.state
    const names = children.map(c => c.props.name)

    return (
      <TabContainer { ...this.props }>
        <TabHeader>
          {
            names.map((name, i) => (
              <TabItem
                key={ name }
                selected={ i === index }
                onClick={ () => this.handleTabChange(i) }
              >
                { name }
              </TabItem>
            ))
          }
        </TabHeader>
        <TabDivider borderColor={ this.props.borderColor } />
        { children.filter((_, i) => i === index) }
      </TabContainer>
    )
  }
}

Tab.propTypes = {
  borderColor: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Tab.defaultProps = {
  borderColor: 'gray.30',
}

export default Tab

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'components'
import { palette } from 'services/style'

const getWeight = ({ selected }) => (selected ? 600 : 400)
const getSelectedBackground = ({ selected, theme }) => palette(selected ? 'white.default' : 'gray.20')({ theme })

const TabContainer = styled.div`
  width: 100%;
  height: 100%;
`

const TabHeader = styled.div`
  display: flex;
`

const TabItem = styled(Button)`
  flex: 1;
  height: 2.5rem;
  padding: 0;
  margin: 0;
  border-radius: 0;
  color: ${palette('gray.90')};
  font-size: 0.875rem;
  font-weight: ${getWeight};
  background-color: ${getSelectedBackground};

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
        { children.filter((_, i) => i === index) }
      </TabContainer>
    )
  }
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tab

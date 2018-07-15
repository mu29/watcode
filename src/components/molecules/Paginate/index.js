import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div``

const PaginateArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${palette('gray.10')};
  border-radius: 0 0 0.125rem 0.125rem;
`

const PageButton = styled(Button)`
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 0.75rem;
  color: ${palette('gray.100')};
  background-color: ${palette('transparent.default')};
  font-weight: ${({ selected }) => (selected ? 600 : 400)};

  &:hover {
    color: ${palette('gray.100')};
  }
`

export default class Paginate extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onPaginate: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = { page: 1 }

  onPaginate = (page) => {
    this.props.onPaginate(page)
    this.setState({ page })
  }

  render() {
    const { list, children } = this.props
    const { page } = this.state
    const visibleItems = list.filter((_, index) => parseInt(index / 5, 10) + 1 === page)

    return (
      <Wrapper>
        { React.cloneElement(children, { ...this.props, list: visibleItems }) }
        <PaginateArea>
          {
            new Array(5)
              .fill()
              .map((_, i) => i + (page - Math.min(page - 1, 2)))
              .map(number => (
                <PageButton
                  selected={ number === page }
                  onClick={ () => this.onPaginate(number) }
                >
                  { number }
                </PageButton>
              ))
          }
        </PaginateArea>
      </Wrapper>
    )
  }
}

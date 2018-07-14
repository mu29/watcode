import React from 'react'
import { PropTypes } from 'prop-types'

const defaultCanPaginate = props =>
  (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
  && props.list.length && !props.isLoading

const withPaginate = (canPaginate = defaultCanPaginate) => Component =>
  class WithPaginate extends React.Component {
    static propTypes = {
      onPaginate: PropTypes.func.isRequired,
      list: PropTypes.arrayOf(PropTypes.object).isRequired,
      cursor: PropTypes.string.isRequired,
      isLoading: PropTypes.bool,
    }

    static defaultProps = {
      isLoading: false,
    }

    componentWillMount() {
      this.paginate()
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false)
    }

    onScroll = () => {
      if (canPaginate(this.props)) {
        this.paginate()
      }
    }

    paginate = () => {
      const { onPaginate, cursor } = this.props
      onPaginate(cursor)
    }

    render() {
      return <Component { ...this.props } />
    }
  }

export default withPaginate

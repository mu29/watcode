import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, IconButton } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: auto;
  border-radius: 0.125rem;
  background-color: ${palette('white.default')};
`

const StyledInput = styled(props => <Input { ...props } />)`
  width: 100%;
  margin: 0;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.125rem 0 0 0.125rem;

  &:active, &:focus {
    border: none;
  }
`

const StyledIconButton = styled(props => <IconButton { ...props } />)`
  height: 2rem;
  margin: 0;
  padding: 0 1rem;
  border-radius: 0 0.125rem 0.125rem 0;
`

class SearchBar extends Component {
  static getDerivedStateFromProps(props, state) {
    return state !== props ? props : null
  }

  state = { query: '' }

  onChange = ({ target }) => this.setState({ query: target.value })

  onSubmit = () => this.props.onSubmit(this.state.query)

  render() {
    return (
      <Wrapper { ...this.props }>
        <StyledInput
          value={ this.state.query }
          onChange={ this.onChange }
          onKeyPress={ ({ key }) => key === 'Enter' && this.onSubmit() }
          placeholder="번호, 제목, 작가, 태그로 검색하세요"
        />
        <StyledIconButton
          onClick={ this.onSubmit }
          backgroundColor="white.default"
          color="yellow.default"
          icon="search"
        />
      </Wrapper>
    )
  }
}

SearchBar.propTypes = {
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

SearchBar.defaultProps = {
  query: '',
}

export default SearchBar

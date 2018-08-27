import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, Button } from 'components'

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`

const FieldWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const StyledInput = styled(props => <Input { ...props } />)`
  width: 100%;
  padding: 0.625rem;
  font-size: 0.75rem;
  border-radius: 0.125rem 0 0 0.125rem;
`

class AdminModeForm extends Component {
  state = { passcode: '' }

  onChange = ({ target }) => this.setState({ passcode: target.value })

  onSubmit = () => this.props.onSubmit(this.state.passcode)

  render() {
    return (
      <Wrapper>
        <FieldWrapper>
          <StyledInput
            type="password"
            value={ this.state.passcode }
            onChange={ this.onChange }
            placeholder="마루마루 비밀번호와 같음"
          />
        </FieldWrapper>
        <Button
          fontSize={ 14 }
          height={ 40 }
          onClick={ this.onSubmit }
        >
          관리모드
        </Button>
      </Wrapper>
    )
  }
}

AdminModeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default AdminModeForm

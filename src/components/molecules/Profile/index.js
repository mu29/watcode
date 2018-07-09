import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};
`

const Profile = ({ onSignOut }) => (
  <Wrapper>
    <Button onClick={ onSignOut }>로그아웃</Button>
  </Wrapper>
)

Profile.propTypes = {
  onSignOut: PropTypes.func.isRequired,
}

export default Profile

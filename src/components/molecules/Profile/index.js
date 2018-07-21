import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LoadingButton } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};

  @media(max-width: 768px) {
    margin: 0;
    border: none;
  }
`

const Profile = ({ onSignOut, isLoading }) => (
  <Wrapper>
    <LoadingButton
      onClick={ onSignOut }
      isLoading={ isLoading }
      disabled={ isLoading }
    >
      로그아웃
    </LoadingButton>
  </Wrapper>
)

Profile.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Profile

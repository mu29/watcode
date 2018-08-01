import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Text, LoadingButton } from 'components'
import { palette } from 'services/style'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};

  @media(max-width: 768px) {
    margin: 0;
    border: none;
  }
`

const ProfileArea = styled.div`
`

const Profile = ({ user, onSignOut, isLoading }) => (
  <Wrapper>
    <ProfileArea>
      <Heading level={ 6 }>{ user.displayName }</Heading>
      <Text color="gray.60" fontWeight={ 200 } small>{ user.email }</Text>
    </ProfileArea>
    <LoadingButton
      height={ 40 }
      fontSize={ 14 }
      onClick={ onSignOut }
      isLoading={ isLoading }
      disabled={ isLoading }
    >
      로그아웃
    </LoadingButton>
  </Wrapper>
)

Profile.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onSignOut: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Profile

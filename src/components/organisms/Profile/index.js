import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Text, LoadingButton } from 'components'
import { BookmarkForm } from 'containers'
import { palette } from 'services/style'

const Wrapper = styled.div`
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

const ProfileArea = styled.article`
  display: flex;
  justify-content: space-between;
`

const ProfileInfoArea = styled.div`
`

const Divider = styled.div`
  margin: 1rem 0;
  border: 0.03125rem solid ${palette('gray.30')};
`

const Profile = ({ user, onSignOut, isLoading }) => (
  <Wrapper>
    <ProfileArea>
      <ProfileInfoArea>
        <Heading level={ 6 }>{ user.displayName }</Heading>
        <Text color="gray.60" fontWeight={ 200 } small>{ user.email }</Text>
      </ProfileInfoArea>
      <LoadingButton
        height={ 40 }
        fontSize={ 14 }
        onClick={ onSignOut }
        isLoading={ isLoading }
        disabled={ isLoading }
      >
        로그아웃
      </LoadingButton>
    </ProfileArea>
    <Divider />
    <BookmarkForm />
  </Wrapper>
)

Profile.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
  onSignOut: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

Profile.defaultProps = {
  user: {},
}

export default Profile

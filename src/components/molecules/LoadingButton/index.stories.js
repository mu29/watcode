import React from 'react'
import { storiesOf } from '@storybook/react'
import LoadingButton from '.'

storiesOf('Molecules/LoadingButton', module)
  .add('기본', () => (
    <LoadingButton isLoading>
      로그인
    </LoadingButton>
  ))

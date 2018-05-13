import React from 'react'
import { storiesOf } from '@storybook/react'
import RankingPage from '.'

storiesOf('Pages/RankingPage', module)
  .add('기본', () => (
    <RankingPage />
  ))

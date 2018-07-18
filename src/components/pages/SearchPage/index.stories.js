import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchPage from '.'

storiesOf('Pages/SearchPage', module)
  .add('기본', () => (
    <SearchPage />
  ))

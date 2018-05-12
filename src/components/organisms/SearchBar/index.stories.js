import React from 'react'
import { storiesOf } from '@storybook/react'
import { SearchBar } from 'containers'

storiesOf('Organisms/SearchBar', module)
  .add('기본', () => (
    <SearchBar location="/" />
  ))

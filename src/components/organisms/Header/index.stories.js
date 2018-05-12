import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from 'components'

storiesOf('Organisms/Header', module)
  .add('기본', () => (
    <Header location="/" />
  ))
  .add('즐겨찾기', () => (
    <Header location="/bookmarks" />
  ))
  .add('로그인', () => (
    <Header location="/auth" />
  ))

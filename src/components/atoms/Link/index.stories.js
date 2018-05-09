import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Atoms/Link', module)
  .add('기본', () => (
    <Link href="#">로그인</Link>
  ))

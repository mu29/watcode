import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from '.'

storiesOf('Atoms/Heading', module)
  .add('기본', () => (
    <Heading>작은 성공</Heading>
  ))
  .add('레벨 2', () => (
    <Heading level={ 2 }>작은 성공</Heading>
  ))
  .add('레벨 3', () => (
    <Heading level={ 3 }>작은 성공</Heading>
  ))
  .add('레벨 1, 2rem', () => (
    <Heading fontSize={ 32 }>작은 성공</Heading>
  ))
  .add('레벨 1, 얇게', () => (
    <Heading fontWeight={ 100 }>작은 성공</Heading>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from '.'

storiesOf('Atoms/Text', module)
  .add('기본', () => (
    <Text>마음이 여름</Text>
  ))
  .add('크게', () => (
    <Text fontSize={ 32 }>마음이 여름</Text>
  ))
  .add('작게', () => (
    <Text fontSize={ 8 }>마음이 여름</Text>
  ))
  .add('색', () => (
    <Text color="red.default">마음이 여름</Text>
  ))
  .add('폰트', () => (
    <Text font="gothic">마음이 여름</Text>
  ))

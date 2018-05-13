import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import RankingPage from '.'

const wrap = (props = {}) => shallow(<RankingPage { ...props } />)

describe('<RankingPage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = wrap()
    expect(wrapper).toMatchSnapshot()
  })
})

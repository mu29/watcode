import React from 'react'
import ArtworkImage from '.'

const attributres = {
  code: 112047,
  url: 'https://laftelimage.blob.core.windows.net/items/thumbs/large/395db1d0-ead8-407f-a316-04aee1e668a7.jpg',
}

const component = (props = {}) => withTheme(<ArtworkImage { ...attributres } { ...props } />)

describe('<ArtworkImage />', () => {
  it('정상적으로 렌더링된다', () => {
    const wrapper = render(component())
    expect(wrapper).toMatchSnapshot()
  })
})

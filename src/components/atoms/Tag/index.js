import styled from 'styled-components'
import { fonts, palette } from 'services/style'

const fontWeight = ({ category }) => (category ? 400 : 200)
const color = ({ category, theme }) => palette(category ? 'white.default' : 'gray.90')({ theme })
const backgroundColor = ({ category, theme }) => palette(category ? 'gray.100' : 'gray.20')({ theme })

const Tag = styled.div`
  display: inline-block;
  margin: 0.125rem 0.25rem 0.125rem 0;
  padding: 0.125rem 0.375rem;
  font-family: ${fonts('default')};
  font-size: 0.6875rem;
  font-weight: ${fontWeight};
  color: ${color};
  background-color: ${backgroundColor};
  border-radius: 0.125rem;
`

export default Tag

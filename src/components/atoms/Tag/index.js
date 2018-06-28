import styled from 'styled-components'
import { fonts, palette } from 'services/style'

const fontWeight = ({ type }) => (type ? 400 : 200)
const color = ({ type, theme }) => palette(type ? 'white.default' : 'gray.90')({ theme })
const backgroundColor = ({ type, theme }) => palette(type ? 'gray.100' : 'gray.20')({ theme })

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

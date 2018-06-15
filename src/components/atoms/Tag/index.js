import styled from 'styled-components'
import { palette } from 'services/style'

const Tag = styled.div`
  display: inline-block;
  margin-right: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 200;
  color: ${palette('gray.60')};
  background-color: ${palette('gray.20')};
  border-radius: 0.25rem;
  white-space: nowrap;
`

export default Tag

import styled from 'styled-components'
import { palette } from 'services/style'

const Panel = styled.div`
  margin: 1rem 0;
  border: 0.0625rem solid ${palette('gray.40')};
  background-color: ${palette('white.default')};

  @media(max-width: 768px) {
    margin: 0;
    border: none;
  }
`

export default Panel

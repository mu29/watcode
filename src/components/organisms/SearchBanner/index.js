import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'components'
import { SearchBar } from 'containers'
import { palette } from 'services/style'

const Wrapper = styled.div`
  height: 16rem;
  background-color: ${palette('gray.90')};

  @media(max-width: 639px) {
    height: 6rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 64rem;
  width: 100%;
  height: 100%;
  margin: auto;
`

const StyledHeading = styled(Heading)`
  color: ${palette('gray.20')};

  @media(max-width: 639px) {
    display: none;
  }
`

const StyledText = styled(Text)`
  margin-bottom: 3rem;

  @media(max-width: 639px) {
    display: none;
  }
`

const SearchBanner = () => (
  <Wrapper>
    <Container>
      <StyledHeading>watcode</StyledHeading>
      <StyledText color="yellow.default" small>오늘 볼 만화도 부탁해!</StyledText>
      <SearchBar />
    </Container>
  </Wrapper>
)

export default SearchBanner

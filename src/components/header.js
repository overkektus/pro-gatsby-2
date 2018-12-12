import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import someLogo from '../images/phoenix-seeklogo_2.svg'

const Root = styled.div`
  background: #524763;
  margin-bottom: 0;
`

const Container = styled.div`
  margin: 0 auto;
  maxwidth: 960px;
  padding: 1rem;
  color: white;

  img {
    width: 80px;
    margin: 20px 20px 0;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const StyledH1 = styled.h1`
  color: white;
`

const Header = ({ siteTitle }) => (
  <Root>
    <Container>
      <StyledH1>
        <StyledLink to="/">
          <img src={someLogo} alt="Some Logo" />
          {siteTitle}
        </StyledLink>
      </StyledH1>
    </Container>
  </Root>
)

export default Header

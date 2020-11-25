import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row } from './Grid'
import { Overline100 } from './Text'
import { ReactComponent as LemonLogo } from '../images/LemonLogo.svg'

const StyledHeader = styled.div(
  ({ theme: { spacing, media } }) => css`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding-top: ${spacing(3)};
    margin-bottom: ${spacing(6)};

    ${Overline100} {
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0.2em;
      margin-top: ${spacing(1)};
    }

    svg {
      margin-right: ${spacing(1)};
      width: 26px;
    }

    ${media.sm`
      margin-bottom: ${spacing(8)};
    `}
  `,
)

const Header = () => {
  return (
    <Container as="header">
      <Row>
        <StyledHeader>
          <LemonLogo />
          <Overline100>Frontend - technical assignment</Overline100>
        </StyledHeader>
      </Row>
    </Container>
  )
}

export default Header

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #f1f4f8;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  // min-height: calc(100vh - 15rem);
  padding: 1.45rem 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main>{children}</main>
      </Container>
    </Wrapper>
    <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="">Gatsby</a>
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

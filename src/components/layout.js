import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(fab);
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
  padding: 2rem 0rem 2rem 0rem;
  padding-inline: 12px;
  text-align: center;
  background: #1b1d25;
  color: hsla(0,0%,100%,.8);
  a{
    color: hsla(0,0%,100%,.8);
    text-decoration: none;
    padding: 10px;
  }
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

      <a 
        href="https://github.com/prashantpandey9" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'github']} size="1x"/>       
      </a>

      <a 
        href="https://twitter.com/Prashant8057152" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} size="1x"/>
      </a>
      
      <a 
        href="https://www.linkedin.com/in/prashantpandey9" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x"/>
      </a>
      
      <a 
        href="https://dev.to/prashantpandey9" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'dev']} size="1x"/>
      </a>
      <br />
      <br />
      © {new Date().getFullYear()}, Built with <FontAwesomeIcon icon={faHeart} size="1x"/> by Prashant Pandey
      {` `}
    </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

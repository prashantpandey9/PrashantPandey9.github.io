import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'
import me from '../images/prashantpandey9.webp'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 100px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 720px) {
    flex-direction: row;
  }
  
`

const Heading1 = styled.h2`
font-family: 'DM Mono', monospace;
`

const Intro = styled.div`
  padding: 10px;
  width: 70%;
  @media only screen and (min-width: 100px) {
    width: 100%;
  }
  @media only screen and (min-width: 427px) {
    width: 60%;
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`

const Paragraph = styled.p`
 
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <Intro>
        <Heading1>Hi, I'm Prashant! I'm a student.</Heading1>
        <Paragraph>
        I love working with Python and JavaScript. I enjoy building web apps and learning the ecosystem around them. I've been developing websites for several years now and learning new skills along the way which help me become a better developer.
        </Paragraph>
        <Paragraph>
          This is my corner of the web where I share things I learn.
        </Paragraph>
        <Paragraph>
          Read my <Link to='/blog'>blog</Link> here.
        </Paragraph>
      </Intro>
      <img
        src={me}
        alt="Photo of Prashant Pandey"
        className=""
        style={{ 
          marginBottom: `1.45rem`, 
          borderRadius: `12px`, 
          height: 'auto',
        }}
      />
    </Wrapper>
  </Layout>
)

export default IndexPage

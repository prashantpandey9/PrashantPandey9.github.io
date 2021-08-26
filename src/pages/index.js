import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'

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
          A Software Engineer. I write code and blog posts.
        </Paragraph>
        <Paragraph>
          This is my corner of the web where I share things I learn. As a developer I write code in Django and React.
        </Paragraph>
        <Paragraph>
          When I'm not coding, you'll find me playing mobile games and watching some web series.
        </Paragraph>
        <Paragraph>
          You can read my <Link to='/blog'>blog</Link>.
        </Paragraph>
      </Intro>
      <StaticImage
        src="../images/prashantpandey9.webp"
        alt="Photo of Prashant Pandey"
        className=""
        // width={250}
        style={{ 
          marginBottom: `1.45rem`, 
          borderRadius: `12px`, 
          height: 'auto',
          width: '500px!important', }}
      />
    </Wrapper>
  </Layout>
)

export default IndexPage

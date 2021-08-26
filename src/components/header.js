import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Headerstyle = styled.header`
  background: #1b1d25;
  // margin-bottom: 1.45rem;
`
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  padding: 1.45rem 1.0875rem 1.25rem 1.0875rem;

  @media only screen and (min-width: 100px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 420px) {
    flex-direction: row;
  }
`

const H2 = styled.h2`
  margin: auto;
  flex: 0 0 auto;
  width: 50%;
  @media only screen and (min-width: 100px) {
    margin: 0;
    width: 100%;
    margin-bottom: 10px;
    font-size: 20px;
  }
  @media only screen and (min-width: 420px) {
    width: 50%;
    margin: auto;
    // font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;;
  }
  
`

const Ul = styled.ul`
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  list-style: none;
  text-align: right;
  margin: auto;

  @media only screen and (min-width: 100px) {
    margin: 0;
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
  }
  @media only screen and (min-width: 420px) {
    width: 50%;
    margin: auto;
  }
`

const Li = styled.button`
margin: auto 0;
background: rgb(45, 45, 49);
padding: 1rem 1.25rem;
font-size: 1.2rem;
margin-inline: 8px;
cursor: pointer;
color: hsla(0,0%,100%,.8);
font-family: 'DM Mono', monospace;
letter-spacing: -.05rem;

&:hover{
  background: #fdba3a!important;
  color: #1b1d25!important;
}

@media only screen and (min-width: 100px) {
  margin-inline: 4px;
  padding: 10px;
  font-size: 20px;
  
}
// @media only screen and (min-width: 420px) {
  
// }
@media only screen and (min-width: 768px) {
  font-size: 22px;
  padding: 1rem 1.25rem;  
  margin-inline: 8px;

}

`

const Header = ({ siteTitle }) => (
  <Headerstyle>
    <Wrapper>
      <H2>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: `DM Mono, monospace`
          }}
        >
          {siteTitle}
        </Link>
      </H2>
      
      <Ul>
        <Link
            to="/">
          <Li>
              About Us
          </Li>
        </Link>
        <Link
            to="/blog">
          <Li>
              Blog
          </Li>
        </Link>
      </Ul>
      

    </Wrapper>
  </Headerstyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

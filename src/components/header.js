import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1b1d25`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 900,
        display: `flex`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 
        style={{ 
          margin: 0,
          maxWidth: `100%`, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      
      <ul 
        style={{
          float: `right`,
          display: `flex`,
          listStyle: `none`
          }}>
        <li>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span>About Us</span>
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span>Blog</span>
          </Link>
        </li>
      </ul>
      

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

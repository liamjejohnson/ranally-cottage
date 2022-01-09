import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = () => (
  <header className="header">
    <div className="nav">
      <Link className="links" to="/">
        Home
      </Link>
      <Link className="links" to="/page-2/">
        page 2
      </Link>
      <Link className="links" to="/page-3/">
        page 3
      </Link>
      <Link className="links" to="/page-4/">
        page 4
      </Link>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: `Ranally Cottage`,
}

export default Header

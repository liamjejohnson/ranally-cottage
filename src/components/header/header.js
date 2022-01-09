import * as React from "react"
import { Link } from "gatsby"
import "./header.scss"

const Header = () => (
  <header className="header">
    <div className="nav">
      <div className="flip">
        <Link className="link" to="/">
          <div className="front">Home</div>
          <div className="back">Home</div>
        </Link>
      </div>
      <div className="flip">
        <Link className="link" to="/about/about">
          <div className="front">About</div>
          <div className="back">About</div>
        </Link>
      </div>
      <div className="flip">
        <Link className="link" to="/gallery/gallery">
          <div className="front">Gallery</div>
          <div className="back">Gallery</div>
        </Link>
      </div>
      <div className="flip">
        <Link className="link" to="/location/location">
          <div className="front">Location</div>
          <div className="back">Location</div>
        </Link>
      </div>
      <Link className="button" to="/booking/booking">
        Book Now
      </Link>
    </div>
    {/* <button className="button">Book Now</button> */}
  </header>
)

Header.defaultProps = {
  siteTitle: `Ranally Cottage`,
}

export default Header

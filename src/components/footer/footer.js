import * as React from "react"
import { Link } from "gatsby"
import InstagramIcon from "@mui/icons-material/Instagram"
import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="socials">
        <a
          href="https://www.instagram.com/ranallycottage_devon/"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon fontSize="large"></InstagramIcon>
        </a>
      </div>
      <div className="divider"></div>
      <div className="contact">
        <h2>Contact</h2>
        <p>bookings@ranallycottage.co.uk</p>
        <p>07973 312 125</p>
        <p>07939 031 065</p>
      </div>
      <div className="address">
        <h2>Address</h2>
        <p>Ranally Cottage</p>
        <p>Bishops Tawton</p>
        <p>Barnstable</p>
        <p>EX32 0BN</p>
      </div>
    </div>
  </footer>
)

Footer.defaultProps = {
  siteTitle: `Ranally Cottage`,
}

export default Footer

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import "./gallery.scss"

const GalleryPage = () => (
  <Layout>
    <Seo title="Gallery" />
    <h1>Hi from the Gallery page</h1>
    <p>Welcome to the gallery</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GalleryPage

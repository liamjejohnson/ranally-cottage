import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import "./location.scss"

const LocationPage = () => (
  <Layout>
    <Seo title="Location" />
    <h1>Hi from the Location page</h1>
    <p>Welcome to the Location page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LocationPage

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const FourthPage = () => (
  <Layout>
    <Seo title="Page 4" />
    <h1>Hi from the 4th page</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage

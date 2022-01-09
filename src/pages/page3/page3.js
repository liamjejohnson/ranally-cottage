import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const ThirdPage = () => (
  <Layout>
    <Seo title="Page 3" />
    <h1>Hi from the 3rd page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const BookingPage = () => (
  <Layout>
    <Seo title="Booking" />
    <h1>Hi from the Booking page</h1>
    <p>Welcome to the booking page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BookingPage

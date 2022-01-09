import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <section className="heading">
        <div className="title">
          <h1>Ranally Cottage</h1>
        </div>
        <div className="info">
          <p>
            "A characterful, 150 year old cottage located in the friendly
            village of Bishops Tawton. With Three bedrooms and all the home
            comforts you wish for. Ranally cottage will provide you with the
            perfect place to relax and unwind after a day out exploring."
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage

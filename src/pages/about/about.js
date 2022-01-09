import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import "./about.scss"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <div className="container">
      <section className="intro">
        <p>
          North Devon offers so much variety; the seaside, the picturesque
          villages, Exmoor walks, surfing, National Trust properties, golden
          sandy beaches to name but a few choices.
        </p>
        <p>
          The historic market town of Barnstaple is approximately a mile away
          hosting a wide range of amenities, including an extensive choice of
          shops and leisure facilities including a cinema, a theatre, Pannier
          Market and Leisure Centre with plenty more to offer. Other local
          attractions include; The Big Sheep, RHS Garden Rosemarie, Golf courses
          and of course, Exmoor.
        </p>
      </section>
      <section></section>
    </div>
  </Layout>
)

export default AboutPage

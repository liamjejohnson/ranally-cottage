import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import "./location.scss"

const LocationPage = () => (
  <Layout>
    <Seo title="Location" />
    <div className="container">
      <section className="intro">
        <p>
          North Devon offers so much variety. The seaside, the picturesque
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
      <section className="location">
        <div className="img-card chichester-arms">
          <div className="info">
            <h1>Chichester Arms</h1>
            <p>2 min. walk</p>
          </div>
        </div>
        <div className="img-card codden">
          <div className="info">
            <h1>Codden Hill</h1>
            <p>2 miles</p>
          </div>
        </div>
        <div className="img-card braunton">
          <div className="info">
            <h1>Braunton Burrows</h1>
            <p>9 miles</p>
          </div>
        </div>
        <div className="img-card saunton">
          <div className="info">
            <h1>Saunton sands</h1>
            <p>10 miles</p>
          </div>
        </div>
        <div className="img-card westwood">
          <div className="info">
            <h1>Westwood Ho! beach</h1>
            <p>11 miles</p>
          </div>
        </div>
        <div className="img-card croyde">
          <div className="info">
            <h1>Croyde bay</h1>
            <p>13 miles</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default LocationPage

import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import "./location.scss"

const LocationPage = () => (
  <Layout>
    <Seo title="Location" />
    <div className="container">
      <section className="attractions-wrapper">
        <h1>Attractions</h1>
        <section className="attractions">
          <div>
            <ul>
              <li>Sandy beaches</li>
              <li>Cloverlly Harbour Village</li>
              <li>Atlantic Village Outlet</li>
              <li>South West Costal Path</li>
              <li>Combe Martin</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>The Big Sheep</li>
              <li>The Funicular Railway</li>
              <li>Lundy Island</li>
              <li>Lynton and Lynmouth</li>
              <li>Exmoor The Doone Valley</li>
            </ul>
          </div>
        </section>
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

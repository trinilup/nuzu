import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nuzu - Innovation and Design - Free UI Kit Design</title>
        <meta
          name="description"
          content="Nuzu is a startup that seeks to simplify the digital experience for all users, created by Trinidad Pilu, it focuses on innovation, diversity and inclusion."
        />
        <meta
          property="og:title"
          content="Nuzu - Innovation and Design - Free UI Kit Design"
        />
        <meta
          property="og:description"
          content="Free UI Kit Design - Nuzu is a startup that seeks to simplify the digital experience for all users, created by Trinidad Pilu, it focuses on innovation, diversity and inclusion."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bf68781c-e16c-4a71-8f28-11e5d9db60ee/fd5d56af-d08b-4345-aee7-40d686ddf0bf?org_if_sml=1"
        />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <div className="home-container3">
            <div className="home-frame213">
              <div className="home-container4">
                <img
                  alt="Group21113868"
                  src="/playground_assets/880e3048-56f2-4286-8c11-a43d15f6d2e4-njmk.svg"
                  className="home-group211"
                />
                <div className="home-frame2131">
                  <span className="home-text">GO HOME</span>
                  <img
                    alt="akariconsarrowright13906"
                    src="/playground_assets/07220497-6b60-4bc7-a2a2-48a8c828a870-q07e.svg"
                    className="home-akariconsarrowright"
                  />
                </div>
              </div>
              <div className="home-group212">
                <span className="home-text01">FREE UI KIT</span>
                <span className="home-text02">
                  <span className="home-text03">Simple design</span>
                  <br></br>
                  <span></span>
                  <span className="home-text06">
                    <span className="home-text07">Powerful results</span>
                    <span></span>
                  </span>
                  <span className="home-text09"></span>
                </span>
                <span className="home-text10">
                  Nuzu is a startup that seeks to simplify the digital
                  experience for all users, created by Trinidad Pilu, it focuses
                  on innovation, diversity and inclusion. With Nuzu everyone can
                  design.
                </span>
                <div className="home-frame16">
                  <span className="home-text11">
                    Download our free design kit
                  </span>
                  <img
                    alt="akariconsarrowright13942"
                    src="/playground_assets/0719ef87-6dd2-4a8a-8617-6a4167eaac2f-h7t.svg"
                    className="home-akariconsarrowright1"
                  />
                </div>
              </div>
              <div className="home-frame2132">
                <span className="home-text12">GO HOME</span>
                <img
                  alt="akariconsarrowright13906"
                  src="/playground_assets/07220497-6b60-4bc7-a2a2-48a8c828a870-q07e.svg"
                  className="home-akariconsarrowright2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-container5">
          <img
            alt="image"
            src="/playground_assets/nuzu%20free%20ui%20kit%20desk-1500w.png"
            className="home-image"
          />
          <img
            alt="image"
            src="/playground_assets/nuzu%20free%20ui%20kit%20movil-min-1500h.png"
            className="home-image1"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

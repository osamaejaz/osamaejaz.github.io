import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Skill from "../components/skills"
import Experience from "../components/experience"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="home">
      <Home />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="skill">
      <Skill />
    </div>
    <div id="experience">
      <Experience />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </Layout>
)

export default IndexPage

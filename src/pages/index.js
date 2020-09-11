import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import HomeBanner from '../components/HomeBanner'
import HeroHeader from '../components/HeroHeader'
import BusinessFifth from '../components/BusinessFifth'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroHeader />
      <HomeBanner />
      <BusinessFifth />
    </Layout>
  )
}

export default IndexPage

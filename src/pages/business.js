import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BusinessSecond from '../components/BusinessSecond'
import BusinessHero from '../components/BusinessHero'
import BusinessThird from '../components/BusinessThird'
import BusinessFourth from '../components/BusinessFourth'
import BusinessFifth from '../components/BusinessFifth'

const Business = ({ }) => {

    return (
        <Layout>
            <SEO title="Home" />
            <BusinessHero />
            <BusinessSecond />
            <BusinessThird />
            <BusinessFourth />
            <BusinessFifth />
        </Layout>
    )
}

export default Business

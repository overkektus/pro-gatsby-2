import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Listing from '../components/Listing'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Listing />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

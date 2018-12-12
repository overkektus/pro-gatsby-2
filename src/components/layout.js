import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Spring } from 'react-spring'
import Header from './header'
import Archive from './Archive'
import './layout.css'

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  padding-top: 40px;
`
const from = { height: 140 }

const to = { height: 300 }

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/unsp/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              excerpt(pruneLength: 10)
              html
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* {location.pathname === '/' && <Img fluid={data.file.childImageSharp.fluid} />} */}
        <Spring
          from={location.pathname === '/' ? from : to}
          to={location.pathname === '/' ? to : from}
        >
          {styles => (
            <div style={{ ...styles, overflow: 'hidden' }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        <StyledMain>
          <div>{children}</div>
          <Archive />
        </StyledMain>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// const isBrowser() => typeof window !== 'undefined'
Layout.defaultProps = {
  location: {},
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Spring } from 'react-spring'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'
import { hidden } from 'ansi-colors'

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 40px;
`

const from = { height: 100 }

const to = { height: 200 }

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
        allMarkdownRemark {
          edges {
            node {
              html
              excerpt(pruneLength: 50)
              frontmatter {
                title
                slug
                date(formatString: "DD-MM-YYYY")
              }
            }
          }
        }
        file(relativePath: { regex: "/Hon/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
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
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
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
        {/* {location.pathname === '/' && (
        )} */}
        <StyledMain>
          {/* {console.log(data.allMarkdownRemark.edges[0].node.frontmatter.date)} */}
          <div>{children}</div>
        </StyledMain>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {}
}

export default Layout

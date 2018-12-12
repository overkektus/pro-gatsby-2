import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'

// Statis Query
// Used anywhere, doesn't accept variables, can'r use context

// Page Query
// Must be used on pages

class PostLayout extends Component {
  render() {
    const {
      data: { markdownRemark },
      location,
    } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div>{markdownRemark.frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    )
  }
}

export default PostLayout

export const query = graphql`
  query PostLayout($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`

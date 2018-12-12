import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const StyledUL = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    color: #000;
    text-decoration: none;
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <StyledUL>
            {allMarkdownRemark.edges.map(({ node: { frontmatter: { title, slug } } }) => (
              <li key={slug}>
                <Link to={`/posts${slug}`}>{title}</Link>
              </li>
            ))}
          </StyledUL>
        </aside>
      </>
    )}
  />
)

export default Archive

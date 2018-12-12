import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const Post = styled.article`
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  a {
    color: #000;
    text-decoration: none;
  }

  p {
    font-size: 1rem;
  }

  h2 {
    margin-bottom: 0.3rem;
  }

  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.3 rem;
    text-decoration: none;
  }
`

const Listing = () => (
  <StaticQuery
    query={graphql`
      query Listing {
        allMarkdownRemark(limit: 5, sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                slug
                title
                date(formatString: "MMMM DD, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <div>
        {edges.map(({ node: { frontmatter: { slug, title, date }, excerpt } }) => (
          <Post key={slug}>
            <h2>
              <Link to={`/posts${slug}`}>{title}</Link>
            </h2>
            <p>{date}</p>
            <p>{excerpt}</p>
            <Link className="read-more" to={`/posts${slug}`}>
              Read More
            </Link>
          </Post>
        ))}
      </div>
    )}
  />
)

export default Listing

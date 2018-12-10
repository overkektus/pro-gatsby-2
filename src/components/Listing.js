import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif';
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Listing = () => (
  <StaticQuery
    query={graphql`
      query Listing {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              frontmatter {
                slug
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { slug, title, date },
              excerpt,
            },
          }) => (
            <Post key={slug}>
              <h2>{title}</h2>
              <p>{date}</p>
              <p>{excerpt}</p>
              <Link className="read-more" to={`/posts${slug}`}>
                {title}
              </Link>
            </Post>
          )
        )}
      </div>
    )}
  />
)

export default Listing

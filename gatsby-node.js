// const path = require('path')

// exports.createPages = ({ graphql, actions: { createPage } }) => {
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fronmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(({ data: { allMarkdownRemark: { edges } } }) => {
//     edges.forEach(({ node: { frontmatter: { slug } } }) => {
//       createPage({
//         path: `/posts${slug}`,
//         component: path.resolve('./src/components/PostLayout.js'),
//         context: { slug },
//       })
//     })
//   })
// }

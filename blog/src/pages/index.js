import React from 'react'
import { Link } from 'gatsby'

import { Layout}  from '../components/Layout'
import { SEO } from '../components/Seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
          <div>
            <img src={edge.node.heroImage.fluid.src} alt="hero image"/>
          </div>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </li>
      ))
    }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        heroImage {
          fluid(maxWidth: 300) {
            src
          }
        }
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}
`

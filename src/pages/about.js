import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {/*!frontmatter.thumbnail &&*/ (
            <div className="post-thumbnail">
              <h1 className="post-title">About Me</h1>
              <div className="post-meta">Yee</div>
            </div>
          )}
          {/*!!frontmatter.thumbnail && */(
            <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`}}>
              <h1 className="post-title">POST title 2</h1>
              <div className="post-meta">POST date 2</div>
            </div>
          )}
          <div className="blog-post-content">

              Hi! I'm Ian!
          </div>

        </article>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Tesla from '../../content/assets/tesla01.png';

import { rhythm } from "../utils/typography"

function Portfolio() {
  return (
    <StaticQuery
      query={portfolioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            className='recent-projects'
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <h2>Some things i've built.</h2>
            <img src={Tesla} />
          </div>
        )
      }}
    />
  )
}

const portfolioQuery = graphql`
  query PortFolioQuery {
    tesla: file(absolutePath: { regex: "/tesla-illustration-01.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Portfolio

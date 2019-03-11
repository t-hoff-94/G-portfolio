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
          <section
            className='recent-projects'
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <h2 className='section-header'>Some things i've built.</h2>
            <div className='row-full'>
              <div className='project-cards-ctr'>
                <article className='project-card'>
                  <div className='project-card__laytout'>
                    <div className='project-card__laytout__left'>
                      <h4>JavaScript Simon</h4>
                      <p>Simon Game built using JavaScript, HTML5, and CSS3</p>
                    </div>
                    <div className='project-card__laytout__right'>
                      <p>hey</p>
                      <p>you</p>
                    </div>
                  </div>
                </article>
                <article className='project-card'>
                  <div className='project-card__laytout'>
                    <div className='project-card__laytout__left'>
                      <h4>JavaScript Simon</h4>
                      <div>
                        <p>Simon Game built using JavaScript, HTML5, and CSS3</p>
                        <p>Simon Game built using JavaScript</p>
                      </div>
                    </div>
                    <div className='project-card__laytout__right'>
                      <p>hey</p>
                      <p>you</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
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

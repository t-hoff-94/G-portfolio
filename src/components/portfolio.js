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
import Simon from '../../content/assets/simon.svg';
import EliteHemp from '../../content/assets/elite_hemp.svg';

import { rhythm } from "../utils/typography"

const projects = [
  {
    style: {
      backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)'+ ',url(' +EliteHemp+')',
      color: '#fff',
    },
    name: 'Elite Hemp Co.',
    description: 'Custom Eccommerce WordPress Theme',
    tools: ['WordPress', 'HTML5', 'CSS3', 'JQuery'],
    link: 'https://www.hempeliteproducts.com/',
  },
  {
    style: {
      backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)'+ ',url(' +Simon+')',
      color: '#fff',
    },
    name: 'JavaScript Simon',
    description: 'Custom Eccommerce WordPress Theme',
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    link: 'https://elastic-swirles-31c9b9.netlify.com/',
  },
  {
    style: {
      backgroundImage: 'url('+Tesla+')',
    },
    name: 'Tesla Color Changer',
    description: 'Custom Eccommerce WordPress Theme',
    tools: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    link: 'https://dreamy-liskov-92d0fe.netlify.com/',
  }
]


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
            <h2 className='section-header'>Some Things I Have Built</h2>
            <div className='row-full'>
              <div className='project-cards-ctr col-full'>
                {projects.map(project => (
                  <article
                    key={project.name}
                    className='project-card'
                    style={project.style}>
                    <div className='project-card__laytout'>
                      <div className='project-card__laytout__left'>
                        <h4>{project.name}</h4>
                        <p className='project-tools'>
                        {project.tools.map(tool => (
                            <span key={tool}>{tool}</span>
                        ))}
                      </p>
                      </div>
                      <div className='project-card__laytout__right'>
                        <a target='_blank' href={project.link}>View</a>
                        {/* <p>you</p> */}
                      </div>
                    </div>
                  </article>
                ))}
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

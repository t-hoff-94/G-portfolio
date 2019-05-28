/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Tesla from '../../content/assets/tesla.png';
import Simon from '../../content/assets/simon.svg';
import EliteHemp from '../../content/assets/elite_hemp.svg';
import Todo from '../../content/assets/todo.svg';

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
      backgroundImage: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'+ ',url(' +Tesla+')',
    },
    name: 'Hex Color Picker',
    description: 'Color Picker built with React.',
    tools: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    link: 'https://cranky-stonebraker-44038d.netlify.com/',
  },
  {
    style: {
      backgroundImage: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'+ ',url(' +Todo+')',
    },
    name: 'To Do List',
    description: 'To Do List built with React.',
    tools: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    link: 'https://objective-dubinsky-38aba6.netlify.com/',
  },
  {
    style: {
      backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)'+ ',url(' +Simon+')',
      color: '#fff',
    },
    name: 'JavaScript Simon',
    description: 'Simon Game built using JavaScript.',
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    link: 'https://elastic-swirles-31c9b9.netlify.com/',
  },
]


function Portfolio() {
  return (
    <section
      className='recent-projects'
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <h2 id='my-work' className='section-header'>Some Things I Have Built</h2>
      <div className='row-full'>
        <div className='project-cards-ctr col-full'>
          {projects.map(project => (
            <article
              key={project.name}
              className='project-card'
              style={project.style}>
              <div className='project-card__laytout'>
                <div className='project-card__laytout__left'>
                  <h4 className='project-title'>
                    <a style={{color: project.style.color ? project.style.color : '#222'}} href={project.link}>{project.name}</a>
                  </h4>
                  <div>
                    <p>{project.description}</p>
                    <p className='project-tools'>
                      {project.tools.map(tool => (
                          <span key={tool}>{tool}</span>
                      ))}
                    </p>
                  </div>

                </div>
                <div className='project-card__laytout__right'>
                  <a className='view-project' target='_blank' href={project.link}>View</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

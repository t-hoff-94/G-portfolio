import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import './global.css'
import Github from '../../content/assets/github_icon.svg'
import Icon from './Icon'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(2),
              marginTop: 0,
              position: 'relative',
            }}
            className='main-headline'
            >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
              >
                {title}
              </Link>
          </h1>
        </div>
      )
    } else {
      header = (
        <div
          style={{
            paddingTop: `${rhythm(3 / 4)}`,
          }}>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
                >
                  {title}
                </Link>
              </h3>
        </div>
      )
    }
    return (
      <>
      <div className='social-header'>
        <ul style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
        }}>
          <li><a href='https://github.com/t-hoff-94' target='_blank'><Icon id='github'/></a></li>
          <li><a href='https://www.instagram.com/hoff.man_/' target='_blank'><Icon id='instagram'/></a></li>
          <li><a href='https://www.linkedin.com/in/tanner-hoffman-277a4b15b/' target='_blank'><Icon id='linkedin'/></a></li>
        </ul>
      </div>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {header}
        </header>
        <main>{children}</main>
        <footer>
        <div className='contact-section'>
          <h4>Places you can find me</h4>
          <ul className='socials'>
            <li><a target='_blank' href='https://github.com/t-hoff-94'>Github</a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/tanner-hoffman-277a4b15b/'>LinkedIn</a></li>
            <li><a target='_blank' href='https://www.instagram.com/hoff.man_/'>Instagram</a></li>
          </ul>
        </div>
          © {new Date().getFullYear()}, Site by Tanner Hoffman.
        </footer>
      </div></>
    )
  }
}

export default Layout

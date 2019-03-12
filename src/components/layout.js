import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import './global.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
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
      )
    } else {
      header = (
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
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
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
      </div>
    )
  }
}

export default Layout

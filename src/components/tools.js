import React from 'react'

const designSkills = [
  { name: 'WordPress', rank: '80%', background: 'rgba(5,102,141,1)'},
  { name: 'PHP', rank: '40%', background: 'rgba(5,102,141,1)'},
  { name: 'Illustrator', rank: '90%', background: 'rgba(5,102,141,1)' },
  { name: 'PhotoShop', rank: '75%', background: 'rgba(5,102,141,1)'},
]

const developSkills = [
  { name: 'HTML5', rank: '85%', background: 'rgba(5,102,141,1)'},
  { name: 'CSS3', rank: '80%', background: 'rgba(5,102,141,1)'},
  { name: 'JavaScript', rank: '65%', background: 'rgba(5,102,141,1)'},
  { name: 'React', rank: '50%', background: 'rgba(5,102,141,1)'},
]

const Tools = props => (
  <>
  <section style={{zIndex: 5}}>
    <h2 className='section-header'>Some Tools and Languages I Use</h2>
    <ul className='tools'>
      <div>
        {developSkills.map(skill => (
            <li key={skill.name}>
              <p>{skill.name}</p>
              <span className='rank-ctr'>
                <span style={{
                  background: skill.background,
                  width: skill.rank,
                }} className='rank'></span>
              </span>
            </li>
        ))}
      </div>

      <div>
        {designSkills.map(skill => (
          <li key={skill.name}>
            <p>{skill.name}</p>
            <span className='rank-ctr'>
              <span style={{
                background: skill.background,
                width: skill.rank,
              }} className='rank'></span>
            </span>
          </li>
        ))}
      </div>
    </ul>
  </section>
  </>
)

export default Tools

import React from 'react'

const designSkills = [
  { name: 'WordPress', rank: '80%', background: '#222'},
  { name: 'PHP', rank: '40%', background: '#222'},
  { name: 'Illustrator', rank: '90%', background: '#222' },
  { name: 'PhotoShop', rank: '75%', background: '#222'},
]

const developSkills = [
  { name: 'HTML5', rank: '85%', background: '#222'},
  { name: 'CSS3', rank: '80%', background: '#222'},
  { name: 'JavaScript', rank: '65%', background: '#222'},
  { name: 'React', rank: '50%', background: '#222'},
]

const Tools = props => (
  <section>
    <h2 className='section-header'>Some Tools I Use</h2>
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
)

export default Tools

import React from 'react';

const skillsData = ['Java', 'Node Js', 'JavaScript', 'TypeScript', 'React Js', 'Angular', 'Express JS', 'MongoDB', 'Sass', 'PostCSS',
        'HTML5', 'CSS3', 'JEST', 'Enzyme', 'React Testing Library', 'Cucumber JS', 'Playwright JS', 'CanJS']

const Skills = () => {
  return (
    <div className="skills-container">
        <h3>Skills</h3>
        <div className="skill-section">
            {skillsData.map(skill => {
               return (
                <button className="skill-btn">{skill}</button>
               )
            })}
        </div>
    </div>
  );
}

export default Skills; 

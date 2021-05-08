import React from 'react';
import Progress from './progress';
import ListItem from './list_item';

const Skills = ({ data }) => (
  <section>
    <h1 className="section-header">Skills</h1>
    {data.map(skill => (
      <div key={skill.title} className="my-5">
        <h1 className="item-header font-semibold text-lg mb-2">
          {skill.title}
        </h1>
        {skill.subskills.map(subskill => (
          <span key={subskill.name}>
            {skill.type === 'percent' && (
              <Progress name={subskill.name} percent={subskill.percent} />
            )}
            {skill.type === 'tag' && (
              <span key={subskill.name} className="tag">
                {subskill.name}
              </span>
            )}
            {skill.type === 'list' && (
              <ListItem key={subskill.name} text={subskill.name} />
            )}
          </span>
        ))}
      </div>
    ))}
  </section>
);

export default Skills;

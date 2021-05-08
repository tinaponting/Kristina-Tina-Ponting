import React from 'react';

const Projects = ({ data }) => (
  <section>
    <h1 className="section-header">Projects</h1>
    {data.map(item => (
      <article className="my-5" key={item.name}>
        <h2 className="item-header">{item.name}</h2>
        <h3 className="item-sub">{item.company}</h3>
        <p className="py-4">{item.description}</p>
        <div className="flex justify-end">
          <a
            className="btn btn-secondary"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </article>
    ))}
  </section>
);

export default Projects;

import React from 'react';
import './Projects.css';

function Entry(props) {
  return (
    <article className="project-card">
      <div
        className="project-image"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className="project-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} rel="noopener noreferrer" target="_blank">
          View Project
        </a>
      </div>
    </article>
  )
};

export default Entry

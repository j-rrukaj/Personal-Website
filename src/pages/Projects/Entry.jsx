import React from 'react';
import './Projects.css';

function Entry(props) {
  return (
    <article
      className="project-card"
      style={{ animationDelay: `${props.delay || 0}ms` }}
    >
      <div
        className="project-image"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className="project-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="project-tags">
          {(props.tags || []).map((tag) => (
            <span key={`${props.title}-${tag}`}>{tag}</span>
          ))}
        </div>
        {props.link && (
          <a href={props.link} rel="noopener noreferrer" target="_blank">
            View Project
          </a>
        )}
      </div>
    </article>
  )
};

export default Entry

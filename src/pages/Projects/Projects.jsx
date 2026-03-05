import React from 'react';
import './Projects.css';
import CardItem from "./CardItem"
import Entry from "./Entry"

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <p className="projects-kicker">Selected Work</p>
        <h1>Projects</h1>
        <p>
          Hands-on projects that supported my growth in cloud, automation and
          delivery engineering.
        </p>
      </section>

      <section className="projects-grid">
        {CardItem.map((projectItem) => (
          <Entry
            key={projectItem.id}
            title={projectItem.title}
            image={projectItem.image}
            description={projectItem.description}
            link={projectItem.link}
          />
        ))}
      </section>
    </div>
  );
}

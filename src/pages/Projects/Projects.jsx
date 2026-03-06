import React, { useMemo, useState } from 'react';
import './Projects.css';
import CardItem from "./CardItem"
import Entry from "./Entry"

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const tags = useMemo(() => {
    const uniqueTags = new Set(CardItem.flatMap((project) => project.tags || []));
    return ["All", ...Array.from(uniqueTags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return CardItem.filter((project) => {
      const matchesTag = activeTag === "All" || (project.tags || []).includes(activeTag);
      const searchValue = searchTerm.trim().toLowerCase();
      if (!searchValue) {
        return matchesTag;
      }

      const searchableText = `${project.title} ${project.description} ${(project.tags || []).join(" ")}`.toLowerCase();
      return matchesTag && searchableText.includes(searchValue);
    });
  }, [activeTag, searchTerm]);

  return (
    <div className="projects-page">
      <section className="projects-hero reveal-up show">
        <p className="projects-kicker">Selected Work</p>
        <h1>Projects</h1>
        <p>
          Hands-on projects that supported my growth in cloud, automation and
          delivery engineering.
        </p>
      </section>

      <section className="project-controls reveal-up show">
        <input
          type="search"
          className="project-search"
          placeholder="Search projects, tools or keywords"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <div className="tag-filter-row">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag-filter ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-grid">
        {filteredProjects.map((projectItem, index) => (
          <Entry
            key={projectItem.id}
            title={projectItem.title}
            image={projectItem.image}
            description={projectItem.description}
            link={projectItem.link}
            tags={projectItem.tags}
            delay={Math.min(index * 80, 520)}
          />
        ))}
      </section>
      {filteredProjects.length === 0 && (
        <p className="projects-empty">
          No matches found. Try a different search or choose another tag.
        </p>
      )}
    </div>
  );
}

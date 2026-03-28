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
  const platformProjects = filteredProjects.filter((project) => project.category === "Platform");
  const codeProjects = filteredProjects.filter((project) => project.category !== "Platform");

  return (
    <div className="projects-page">
      <section className="projects-hero reveal-up show">
        <p className="projects-kicker">Selected Work</p>
        <h1>Projects</h1>
        <p>
          Platform delivery and coding projects separated properly so the
          production engineering work is not buried under smaller practice apps.
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

      {platformProjects.length > 0 && (
        <section className="project-section">
          <div className="section-heading">
            <p className="section-kicker">Platform Delivery</p>
            <h2>AWS, Kubernetes, GitOps and automation work</h2>
          </div>
          <div className="projects-grid">
            {platformProjects.map((projectItem, index) => (
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
          </div>
        </section>
      )}
      {codeProjects.length > 0 && (
        <section className="project-section">
          <div className="section-heading">
            <p className="section-kicker">Coding Projects</p>
            <h2>Public repos and smaller application builds</h2>
          </div>
          <div className="projects-grid">
            {codeProjects.map((projectItem, index) => (
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
          </div>
        </section>
      )}
      {filteredProjects.length === 0 && (
        <p className="projects-empty">
          No matches found. Try a different search or choose another tag.
        </p>
      )}

      <section className="projects-story reveal-up show">
        <div className="story-card">
          <p className="story-label">What This Page Covers</p>
          <h2>More than standalone repos</h2>
          <p>
            The platform section now reflects real work from the `aws-eks`
            repository: Terraform-managed EKS foundations, GitOps delivery,
            OIDC-based GitHub Actions access, shared ALB routing and monitored
            autoscaling behaviour for the deployed workload.
          </p>
        </div>
      </section>
    </div>
  );
}

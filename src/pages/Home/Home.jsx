import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.reveal');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className={`hero-copy ${loaded ? 'show' : ''}`}>
          <p className="hero-kicker">DevOps Engineer</p>
          <h1 className="hero-title">John Rrukaj</h1>
          <p className="hero-subtitle">
            DevOps Engineer with 5+ years of experience building scalable
            infrastructure across AWS and Azure, currently leading 20+ client
            environments.
          </p>
          <div className="hero-actions">
            <Link className="cta cta-primary" to="/resume">View Resume</Link>
            <Link className="cta cta-ghost" to="/projects">See Projects</Link>
          </div>
        </div>

        <div className={`hero-visual ${loaded ? 'show' : ''}`}>
          <img src="/images/me-cartoon-v2.png" alt="John Rrukaj" />
        </div>
      </section>

      <section className="cv-grid">
        <aside className="profile-card reveal">
          <h3>Profile</h3>
          <p>London, UK</p>
          <p>Technical lead across 20+ client environments</p>
          <p>AWS & Azure infrastructure specialist</p>
          <Link className="download-link" to="/contact">Get In Touch</Link>
        </aside>

        <div className="cv-content">
          <article className="content-card reveal">
            <h2>About</h2>
            <p>
              I focus on delivering stable cloud platforms through automation,
              reliable incident handling, and strong collaboration with both
              technical and non-technical teams.
            </p>
          </article>

          <article className="content-card reveal">
            <h2>Current Stack</h2>
            <div className="chip-row">
              <span>AWS</span>
              <span>Azure</span>
              <span>EKS</span>
              <span>AKS</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>Terraform</span>
              <span>GitHub Actions</span>
              <span>TeamCity</span>
              <span>Azure DevOps</span>
              <span>Cloudflare</span>
            </div>
          </article>

          <article className="content-card reveal">
            <h2>Leadership & Mentoring</h2>
            <p>
              Mentoring junior engineers on AWS, Terraform and Kubernetes while
              driving secure, efficient delivery workflows across client
              environments.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

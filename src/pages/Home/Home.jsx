import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Header() {
  const [loaded, setLoaded] = useState(false);
  const highlights = [
    "Kubernetes platforms across AWS and Azure",
    "ArgoCD GitOps release patterns",
    "GitHub Actions delivery pipelines",
    "Terraform-driven infrastructure changes"
  ];

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
            environments and improving the way teams ship, operate and support
            cloud platforms.
          </p>
          <div className="hero-actions">
            <Link className="cta cta-primary" to="/resume">View Resume</Link>
            <Link className="cta cta-ghost" to="/projects">See Projects</Link>
          </div>
          <div className="hero-highlights">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className={`hero-visual ${loaded ? 'show' : ''}`}>
          <img src="/images/me-cartoon-v2.png" alt="John Rrukaj" />
        </div>
      </section>

      <section className="cv-grid">
        <aside className="profile-card reveal">
          <h3>Profile</h3>
          <p className="profile-intro">London, UK based DevOps engineer focused on cloud platforms, delivery automation and operational reliability.</p>
          <div className="profile-meta">
            <div>
              <span>Experience</span>
              <strong>5+ years</strong>
            </div>
            <div>
              <span>Client scope</span>
              <strong>20+ environments</strong>
            </div>
          </div>
          <div className="profile-block">
            <h4>Core Focus</h4>
            <ul className="profile-list">
              <li>Kubernetes platforms across AWS and Azure</li>
              <li>Terraform-led infrastructure delivery</li>
              <li>GitHub Actions and GitOps deployment flows</li>
              <li>Operational support and platform hardening</li>
            </ul>
          </div>
          <div className="profile-block">
            <h4>Recent Delivery</h4>
            <ul className="profile-list">
              <li>Split Terraform stacks for safer EKS lifecycle management</li>
              <li>Shared ALB ingress for app, ArgoCD and Prometheus</li>
              <li>OIDC-based AWS access for GitHub Actions workflows</li>
              <li>HPA, IRSA and observability improvements for workloads</li>
            </ul>
          </div>
          <div className="profile-block">
            <h4>Working Style</h4>
            <p className="profile-note">Strongest in environments where delivery needs to be practical, supportable and well understood by the wider team.</p>
          </div>
          <Link className="download-link" to="/contact">Get In Touch</Link>
        </aside>

        <div className="cv-content">
          <article className="content-card reveal">
            <h2>About</h2>
            <p>
              I focus on delivering stable cloud platforms through automation,
              reliable incident handling, and strong collaboration with both
              technical and non-technical teams. The strongest results usually
              come from making delivery simpler for engineers while keeping the
              underlying platform secure, repeatable and supportable.
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
            <h2>Platform Work</h2>
            <p>
              Recent work has centred on an AWS EKS platform delivered with
              split Terraform stacks, ArgoCD-managed resources, shared ALB
              ingress, Route53 integration and GitHub Actions OIDC access. The
              goal was to make infrastructure and app delivery cleaner to
              operate, review and destroy.
            </p>
          </article>

          <article className="content-card reveal">
            <h2>Leadership & Mentoring</h2>
            <p>
              Mentoring junior engineers on AWS, Terraform and Kubernetes while
              helping teams raise the standard for operational ownership,
              documentation and day-to-day delivery practices.
            </p>
          </article>

          <article className="content-card reveal">
            <h2>What I Help Teams Deliver</h2>
            <div className="focus-grid">
              <div className="focus-item">
                <h3>Kubernetes</h3>
                <p>Workload deployment with probes, HPA, pod disruption budgets and topology spread for better resilience.</p>
              </div>
              <div className="focus-item">
                <h3>GitOps</h3>
                <p>ArgoCD applications that keep platform resources aligned to Git and easier to audit or recover.</p>
              </div>
              <div className="focus-item">
                <h3>CI/CD</h3>
                <p>GitHub Actions workflows using AWS OIDC federation, stack-aware planning and approval-gated applies.</p>
              </div>
              <div className="focus-item">
                <h3>Terraform</h3>
                <p>Infrastructure split into bootstrap, infra and app layers to reduce lifecycle coupling and destroy-time failure risk.</p>
              </div>
            </div>
          </article>

          <article className="content-card reveal">
            <h2>Impact</h2>
            <p>
              My focus is not just tooling adoption. It is creating delivery
              systems that are easier for engineers to use, easier for support
              teams to manage and less dependent on one-off manual fixes.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

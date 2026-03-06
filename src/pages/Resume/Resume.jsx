import React, { useEffect } from "react";
import "./Resume.css";

export default function Resume() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.16 }
    );

    const cards = document.querySelectorAll(".resume-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-shell">
        <h1 className="resume-hero">Resume</h1>
        <p className="resume-intro">
          DevOps Engineer focused on resilient cloud platforms, automation and
          practical delivery across AWS and Azure.
        </p>

        <section id="sectionOne" className="resume-card reveal-up">
          <div id="Summary">
          <h1 className="title">Profile</h1>
          <p className="resume-paragraph">
            DevOps Engineer with 5+ years of experience building scalable
            infrastructure on AWS and Azure. Currently the technical lead for
            20+ client environments, utilising Kubernetes and Terraform to
            drive stability and efficiency. I bring a calm, collaborative
            approach to incident resolution and project delivery. A naturally
            curious problem-solver, I pride myself on bridging the gap between
            technical and non-technical teams to deliver practical, high-value
            solutions.
          </p>
        </div>
        </section>

        <section id="sectionTwo" className="resume-card reveal-up">
          <div id="WorkExperience">
          <h1 className="title">Work Experience</h1>

          <h3 className="sub-headings">
            DevOps Engineer | Just After Midnight | Jan 2021 - Present
          </h3>

          <ul className="resume-list">
            <li>
              Design, build and manage cloud infrastructure for multiple client
              environments (dev, test and prod), primarily on AWS and Azure.
            </li>
            <li>
              Create and maintain new client environments using Terraform and
              shared internal modules for networking, compute and associated
              services.
            </li>
            <li>
              Manage Kubernetes clusters on EKS and AKS, including day-to-day
              monitoring, log investigation and troubleshooting of pod and node
              issues.
            </li>
            <li>
              Run security and compliance scans against AWS accounts and
              Kubernetes clusters, feeding remediation tasks into client
              backlogs.
            </li>
            <li>
              Implement and maintain CI/CD pipelines with GitHub Actions,
              TeamCity and Azure DevOps for automated build, test and
              deployment of infrastructure and applications.
            </li>
            <li>
              Work with IAM, security groups, WAF and Cloudflare (WAF, CDN,
              caching) to enhance security, performance and cost efficiency for
              client platforms.
            </li>
            <li>
              Mentor junior engineers on AWS, Terraform, Kubernetes basics and
              troubleshooting approaches, supporting their progression and
              involving them in active projects.
            </li>
          </ul>

          <h3 className="sub-headings">
            Mentoring & Support (with Certified AWS Instructor) | 2019
          </h3>
          <ul className="resume-list">
            <li>
              Guided students through live AWS lab exercises across courses
              including Solutions Architect, SysOps, Security Engineering,
              Advanced Architecting and DevOps.
            </li>
            <li>
              Supported students with AWS-based projects and presentations,
              helping them apply course material in practical scenarios.
            </li>
          </ul>
        </div>
        </section>

        <section id="sectionThree" className="resume-card reveal-up">
          <div id="Education">
          <h1 className="title">Education</h1>
          <h3 className="sub-headings">
            BSc (Hons) Business Information Systems
            <br />
            University of Westminster, London | 2012 - 2015
          </h3>
        </div>
        </section>

        <section id="sectionFour" className="resume-card split reveal-up">
          <div id="TechStack" className="split-pane">
          <h1 className="title">Software & Platform Experience</h1>
          <p className="resume-paragraph">
            AWS (core services, IAM, networking, WAF), Azure (VMs, APIM, App
            services), Kubernetes (EKS, AKS), Terraform, GitHub Actions,
            TeamCity, Azure DevOps, Site24x7, Cloudflare.
          </p>
        </div>

          <div id="Qualifications" className="split-pane">
          <h1 className="title">Other Qualifications</h1>
          <p className="resume-paragraph">
            AWS Certified Solutions Architect - Associate (active, passed 2025)
            <br />
            Previously held: AWS Certified SysOps Administrator - Associate;
            HashiCorp Certified: Terraform Associate; Microsoft Certified: Azure
            Administrator Associate
          </p>
        </div>
        </section>

        <section id="sectionFive" className="resume-card reveal-up">
          <div id="CV">
          <h1 className="title">Hobbies & Interests</h1>
          <p className="resume-paragraph centered">
            Attending meet up groups, organising social events and participating
            in Sunday league football.
          </p>

          <div className="button">
            <a
              className="cv-button"
              href="https://cv-download.s3.eu-west-2.amazonaws.com/John+R+CV.docx"
            >
              Download CV
            </a>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

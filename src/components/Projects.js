import { useState } from "react";
import { ExternalLink, GithubSmall } from "./Icons";

const ProjectItem = ({ project }) => {
  return (
    <li>
      <div className="item">
        <div className="item_top">
          <h5 style={{textTransform: "unset"}}>{project.title}</h5>
        </div>
        <div className="item_content">
          <ul style={{listStyleType: "disc", marginLeft: "20px"}}>
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="item_bottom" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                padding: '6px 14px', 
                border: '1px solid #555', 
                borderRadius: '4px', 
                textDecoration: 'none', 
                fontSize: '12px',
                color: '#ddd',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#777';
                e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#555';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <ExternalLink width="14" />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                padding: '6px 14px', 
                border: '1px solid #555', 
                borderRadius: '4px', 
                textDecoration: 'none', 
                fontSize: '12px',
                color: '#ddd',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#777';
                e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#555';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <GithubSmall width="14" />
              GitHub
            </a>
          )}
        </div>
        {project.stack && project.stack.length > 0 && (
          <div className="item_bottom">
            {project.stack.map((tech, i) => (
              <span key={i} className="techItem">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

const Projects = ({ projects }) => {
  const [toggleList, setToggleList] = useState("tab1");
  const projectsData = projects;
  const activeList = (value) => (value === toggleList ? "active" : "");

  if (!projectsData) {
    return (
      <section id="projects">
        <div className="container">
          <div className="roww">
            <div className="resumo_fn_about_info">
              <div className="about_left">
                <h3>Projects</h3>
                <p>Loading projects...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="projects">
      <div className="container">
        <div className="roww">
          {/* Projects Information */}
          <div style={{ marginBottom: '20px', marginTop: '50px' }}>
            <div className="about_left">
              <h3>Projects</h3>
              <p>
                A showcase of my work across open source contributions and creative coding projects.
              </p>
            </div>
            <div className="about_right">
            </div>
          </div>
          {/* /Projects Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setToggleList("tab1"); }}>
                    Open Source
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setToggleList("tab2"); }}>
                    Vibe Coded
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content - Open Source */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                <div className="resumo_fn_boxed_list">
                  <ul>
                    {projectsData && projectsData.oss && projectsData.oss.length > 0 ? (
                      projectsData.oss
                        .sort((a, b) => a.rank - b.rank)
                        .map((project, index) => (
                          <ProjectItem key={index} project={project} />
                        ))
                    ) : (
                      <li>
                        <div className="item">
                          <div className="item_top">
                            <h5>Coming Soon</h5>
                            <span>( Open Source )</span>
                          </div>
                          <h3>Open Source Projects</h3>
                          <p>This section will showcase my open source contributions and projects.</p>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content - Vibe Code */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                <div className="resumo_fn_boxed_list">
                  <ul>
                    {projectsData && projectsData.vibecoded && projectsData.vibecoded.length > 0 ? (
                      projectsData.vibecoded
                        .sort((a, b) => a.rank - b.rank)
                        .map((project, index) => (
                          <ProjectItem key={index} project={project} />
                        ))
                    ) : (
                      <li>
                        <div className="item">
                          <div className="item_top">
                            <h5>Coming Soon</h5>
                            <span>( Creative Projects )</span>
                          </div>
                          <h3>Vibe Code Projects</h3>
                          <p>This section will showcase my creative coding projects and experimental work.</p>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

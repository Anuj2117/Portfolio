import React from "react";
import "../../App.css";
import "../../App.css";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">
        
        {/* Project 1 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg"
                className="project-image"
                alt="React E-Commerce"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">React E-Commerce</h5>
              <p className="project-description">This is a project made with complete React js.</p>
              <a href="https://amazon-clone-git-main-anuj-kushwahas-projects-db7b729e.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href="https://github.com/Anuj2117/Amazon-clone.git" target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg"
                className="project-image"
                alt="Expense-Tracker"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">Expense-Tracker</h5>
              <p className="project-description">This is a project made with complete js.</p>
              <a href="https://anuj2117.github.io/Expense-Tracker/" target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href="https://github.com/Anuj2117/Expense-Tracker.git" target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg"
                className="project-image"
                alt="CryptoView"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">CryptoView</h5>
              <p className="project-description">This is a project made with complete js.</p>
              <a href="https://anuj2117.github.io/crypto/" target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href="https://github.com/Anuj2117/crypto.git" target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-item">
          <div className="project-card" data-aos="flip-right" data-aos-duration="1000">
            <div className="project-image-container">
              <img
                src="https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg"
                className="project-image"
                alt="Pokepedia"
              />
            </div>
            <div className="project-info">
              <h5 className="project-title">Pokepedia</h5>
              <p className="project-description">This is a project made with complete js.</p>
              <a href="https://anuj2117.github.io/Pokemon/" target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                Demo
              </a>
              <a href="https://github.com/Anuj2117/Pokemon.git" target="_blank" rel="noopener noreferrer" className="project-link code-link">
                Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;

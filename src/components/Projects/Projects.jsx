import React from "react";
import "../../App.css";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          
          {/* Project 1 */}
          <div className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src="https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg"
                  className="card-img-top"
                  alt="React E-Commerce"
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">React E-Commerce</h5>
                <p className="card-text">This is a project made with complete React js.</p>
                <a href="https://amazon-clone-git-main-anuj-kushwahas-projects-db7b729e.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-3">
                  Demo
                </a>
                <a href="https://github.com/Anuj2117/Amazon-clone.git" target="_blank" rel="noopener noreferrer" className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg"
                  className="card-img-top"
                  alt="Expense-Tracker"
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Expense-Tracker</h5>
                <p className="card-text">This is a project made with complete js.</p>
                <a href="https://anuj2117.github.io/Expense-Tracker/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-3">
                  Demo
                </a>
                <a href="https://github.com/Anuj2117/Expense-Tracker.git" target="_blank" rel="noopener noreferrer" className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg"
                  className="card-img-top"
                  alt="CryptoView"
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">CryptoView</h5>
                <p className="card-text">This is a project made with complete js.</p>
                <a href="https://anuj2117.github.io/crypto/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-3">
                  Demo
                </a>
                <a href="https://github.com/Anuj2117/crypto.git" target="_blank" rel="noopener noreferrer" className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src="https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg"
                  className="card-img-top"
                  alt="Pokepedia"
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Pokepedia</h5>
                <p className="card-text">This is a project made with complete js.</p>
                <a href="https://anuj2117.github.io/Pokemon/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-3">
                  Demo
                </a>
                <a href="https://github.com/Anuj2117/Pokemon.git" target="_blank" rel="noopener noreferrer" className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;

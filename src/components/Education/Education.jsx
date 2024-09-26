import React from 'react';
import "../../App.css"
function Education() {
  return (
    <> 
      <div id="education">
        <h1>Education</h1>
        <div className="educationWrapper">
          <div className='oneDiv' data-aos="flip-left" data-aos-duration="1000">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2>MCA <br />(Master of Computer Application)</h2>
              
                </div>
                <div className="flip-card-back">
               
                 <h2>IPS Academy Indore <br />-  <span>(2022-24)</span></h2>
              
                <h5>7.67 - CGPA</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='oneDiv' data-aos="flip-left" data-aos-duration="1000">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2>BSC <br />(Computer Science)</h2>
                  
                </div>
                <div className="flip-card-back">
                <h2>AKS University Satna <br /> - <span>(2019-22)</span></h2>
                  <h5>7.64 CGPA</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='oneDiv' data-aos="flip-left" data-aos-duration="1000">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2>12th <br />(Math and Bio)</h2>
                 
                </div>
                <div className="flip-card-back">
                <h2>Saraswati Higher Secondary School  <br /> - <span>(2018-19)</span></h2>
                 <h5>75.8%</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='oneDiv' data-aos="flip-left" data-aos-duration="1000">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2>10th <br />(Common Subjects)</h2>
                 
                </div>
                <div className="flip-card-back">
                <h2>Saraswati Higher Secondary School <br />- <span>(2016-17)</span></h2>
                  <h5>88.89%</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Education;

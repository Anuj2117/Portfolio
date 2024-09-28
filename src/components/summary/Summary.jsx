import React, { useState } from 'react';
import "../../App.css";

function Summary() {
 
  const [isFlipped, setIsFlipped] = useState(false);

  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side - Profile Summary */}
        <div className="card-front">
          <h1>Profile Summary</h1>
          <p>A detail-oriented and goal-driven software developer with proficiency in Java, C, and JavaScript, alongside expertise in React.js, Node.js, MongoDB, and RESTful APIs. Proven track record of developing scalable, user-friendly applications such as Amazon Clone, Expense Tracker, and CryptoView, integrating real-time data, authentication, and responsive design. Strong in DSA, expressive communication, and stakeholder management, with a keen focus on delivering high-quality solutions in fast-paced environments.</p>
          
          {/* Button inside the front side */}
          <button className='flip-button' onClick={handleFlip}>
            Show Future Goals
          </button>
        </div>

        {/* Back Side - Future Goals */}
        <div className="card-back">
          <h1>Future Goals</h1>
          <p>As I grow as a software developer, my focus is on advancing my full-stack expertise, especially in emerging fields like cloud computing, AI, and blockchain. I aim to master modern frameworks to build scalable, innovative solutions while also taking on leadership roles to mentor others and drive impactful projects. My ultimate goal is to create technology that enhances user experiences and positively impacts the tech industry.

</p>
          
          {/* Button inside the back side */}
          <button className='flip-button' onClick={handleFlip}>
            Show Profile Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;

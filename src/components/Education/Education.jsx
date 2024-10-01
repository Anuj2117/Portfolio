import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../../App.css";

const educationData = [
  {
    id: 'mca',
    title: 'MCA (Master of Computer Application)',
    year: '2022-24',
    institution: 'IPS Academy Indore',
    cgpa: '7.67 CGPA',
    link: 'https://drive.google.com/file/d/1JxNbt760VCsGFXnhTd6IhpMN9pbI8Vmt/view?usp=drive_link',
  },
  {
    id: 'bsc',
    title: 'BSC (Computer Science)',
    year: '2019-22',
    institution: 'AKS University Satna',
    cgpa: '7.64 CGPA',
    link: 'https://drive.google.com/file/d/1E77WyQwPBHw1HCqnMEgubXwV_gcaUMix/view?usp=drive_link',
  },
  {
    id: 'twelfth',
    title: '12th (Math and Bio)',
    year: '2018-19',
    institution: 'Saraswati Higher Secondary School',
    cgpa: '75.8%',
    link: 'https://drive.google.com/file/d/1CDsVkLedUdIcGhWSX1RsKobHEd3e9jaa/view?usp=drive_link',
  },
  {
    id: 'tenth',
    title: '10th (Common Subjects)',
    year: '2016-17',
    institution: 'Saraswati Higher Secondary School',
    cgpa: '88.89%',
    link: 'https://drive.google.com/file/d/1CACgO0H5q8e5QlU0uyTD47YiSTmjSZvK/view?usp=drive_link',
  }
];

function Education() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div id="education">
      <h1>Education</h1>
      <div className="educationWrapper">
        {educationData.map((edu) => (
          <div key={edu.id} className={`flip-card ${flippedCard === edu.id ? 'flipped' : ''}`}>
            {/* Front side */}
            <div className="flip-card-front">
              <h3>{edu.title}</h3>
              <h4>- <span>({edu.year})</span></h4>
              <button
                className={`button ${flippedCard === edu.id ? 'flipped' : ''}`} 
                onClick={() => handleFlip(edu.id)}
              >
                <span>{flippedCard === edu.id ? 'Hide Details' : 'Show Details'}</span>
              </button>
            </div>
            {/* Back side */}
            <div className="flip-card-back">
              <h3>{edu.institution}</h3>
              <h5>{edu.cgpa}</h5>
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                <span className="arrow arrow-right"><FaArrowRight /></span>
                Marksheet
                <span className="arrow arrow-left"><FaArrowLeft /></span>
              </a>

              <button
                className={`button ${flippedCard === edu.id ? 'flipped' : ''}`} 
                onClick={() => handleFlip(edu.id)}
              >
                <span>{flippedCard === edu.id ? 'Hide Details' : 'Show Details'}</span>
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

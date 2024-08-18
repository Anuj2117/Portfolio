import React from 'react'

function Education() {
  return (
    <>
    <div  id="education">

    <h1>Education</h1>
     <div className="educationWrapper">
      <div className='oneDiv' data-aos="flip-left" data-aos-duration="1000">
        <h2>MCA (Master of Computer Application)</h2>
        <p>IPS Academy Indore - <span>(2022-24)</span></p>
      </div>
      <div className="oneDiv" data-aos="flip-left" data-aos-duration="1000">
        <h2>BSC(Computer Science) </h2>
        <p>AKS University Satna - <span>(2019-22)</span></p>
      </div>
      <div className="oneDiv" data-aos="flip-left" data-aos-duration="1000">
        <h2>12th (Math and Bio) </h2>
        <p>Saraswati Higher Secondary School -  <span> (2018-19)</span></p>
      </div>
      <div className="oneDiv" data-aos="flip-left" data-aos-duration="1000">
        <h2>10th (Common Subjects)</h2>
        <p>Saraswati Higher Secondary School - <span>(2016-17) </span></p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Education
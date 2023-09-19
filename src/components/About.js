import React from 'react'

const About = ({imgsrc,about}) => { 

return (
  <aside>
    {(imgsrc) ? (
      <>
    <img src={imgsrc} alt='blog logo'/>
    <p>{about}</p>
    </>
        ) : (
          <>
          <img src="https://via.placeholder.com/215" alt='blog logo'/>
          <p>{about}</p>
          </>
    )}
  </aside>
);
}
 


export default About
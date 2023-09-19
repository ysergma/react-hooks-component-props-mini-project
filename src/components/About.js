import React from 'react'

const About = ({imgsrc='https://via.placeholder.com/215',about}) => { 

return (
  <aside>
    <img src={imgsrc} alt='blog logo'/>
    <p>{about}</p>
  </aside>
);
}
 


export default About
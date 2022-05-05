import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="container abt-container">
      <h1 className="about-title">about arcsste-e</h1>
      <p className="content">
        The African Regional Centre for Space Science and Technology Education
        in English (ARCSSTE-E) was inaugurated in Nigeria on 24th November, 1998
        and affiliated to the UN Office for Outer Space Affairs (OOSA). A number
        of other national and regional institutions with research and training
        interests in space science and technology are also affiliated to it.
        Following resolution 45/72 of 1990 and 50/27 of 1995, the United Nations
        General Assembly endorsed the recommendation of UNISPACE 82, that the
        United Nations Programme on Space Applications should assist member
        states in enhancing their indigenous capacity in the utilization of SST
        for national/regional development. The UN office of Outer Space Affairs
        (UN-OOSA) was mandated to establish Centres for Space Science and
        Technology Education in developing countries on a regional basis.
        Nigeria and Morocco were chosen to host the Centres for Space Science
        and Technology Education for the benefit of Anglophone and Francophone
        Afreican countries respectively. The host institution for the Centre in
        Nigeria is Obafemi Awolowo University, Ile-Ife.
      </p>
      <div>
        <h2 className="sub-heading">VISION AND MISSION</h2>
        <p className="content">
          Human Resources Development & Public Awareness in the African Region
          of the benefits and Applications of Space Science & Tech. for the
          sustainable development of the region and improvement on the quality
          of life of the people, through rigorous education/ training and
          outreach programmes, thereby empowering and informing the people on
          Space for Development.<br/>
          To build a high quality capacity and critical mass of indigenous Space
          Scientists/ Educators in English speaking African countries for the
          development and application of Space Science & Technology for
          Sustainable National & Regional Development.
        </p>
      </div>
      <div>
        <h2 className="sub-heading">MANDATE</h2>
        <p className="content">
          To develop skills and knowledge in 5 prime areas: Remote Sensing/ GIS;
          Satellite Meteorology & Global Climate; Satellite Communication; Basic
          Space & Atmospheric Science and Global Navigation Satellite System.
        </p>
      </div>
    </div>
  );
}

export default About
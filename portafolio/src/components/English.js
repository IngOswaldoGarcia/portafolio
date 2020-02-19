import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import csharp from '../csharp.png';
import unity from '../unity.png';
import firebase from '../fire.png';
import luckyjump from '../lucky.png';
import nayar from '../nayar.png';
import agencia from '../agencia.png';
import sqlite from '../sqlite.png';
import php from '../php.png';
import javaScript from '../JS.png';
import jquery from '../jquery.png';
import java from '../java.png';
import html from '../html.png';
import css from '../css.png';
import mysql from '../mysql.png';
import bootstrap from '../bootstrap.png';
import android from '../AS.png';

//import axios from 'axios';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.div`
  text-align: center;
`;

const Description = styled.div`
  padding: 0 40px;
  text-align: justify;
  @media (max-width: 500px){
    padding: 0 10px;
    font-size: 0.8rem;
    } 
  @media (min-width: 2000px){
    font-size: 2rem;
  } 
`;

const Main_Menu = styled.div`
    margin: 0 auto;
    display: grid;
    @media (min-width: 992px){
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    } 
    @media (min-width: 2000px){
      column-gap: 4rem;
  } 
`;

const Project = styled.div`
  background-color: #fff;
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  border: 1px solid #999999;
  margin: 40px 0;
  padding: 30px 0 90px 0;
  color: #000;
  position: relative;
  @media (max-width: 500px){
    padding-bottom: 0;
    margin-bottom: 0;
    } 

    @media (min-width: 2000px){
    padding-bottom: 180px;
  } 
`;

const ProjectName = styled.p`
  font-family: 'Arvo';
  font-size: 1.5rem;
  margin: 0 50px 30px 50px;
  @media (min-width: 2000px){
    font-size: 3.5rem;
    margin-top: 100px;
  } 
`;

const ProjectDate = styled.p`
  font-family: 'Arvo';
  font-size: 1.2rem;
  @media (max-width: 500px){
    font-size: 1rem;
    margin: 20px;
    } 
`;

const NameCreator = styled.h1`
  margin: 5px 0 0 0;
  @media (min-width: 2000px){
    font-size: 4rem;
    margin-top: 20px;
  } 
`;

const TitleCreator = styled.p`
  margin: 0;
  @media (min-width: 2000px){
    font-size: 2rem;
  } 
`;

const DivisionLine = styled.hr`
  height: 1px;
  width: 250px;
  margin: 2px auto 50px auto;
  background-color: black;
  @media (min-width: 2000px){
    height: 3px;
    width: 500px;
  } 
`;

const ContactArea = styled.div`

background-color: #FFFFFF;
color: #000000;
border: 1px solid #999999;
width: 200px;
margin: 0 auto 50px auto;
padding: 20px;
border-radius: 10px;
position:relative;
align-items: center;
  & > div {
    background-color: #fff;
    font-size: 2rem;
    position:absolute;
    top: -25px;
    right: 100px;
    padding: 0 5px 0 5px;
    color: #f47517;
  }
  & > p {
    margin: 0 0 8px 0;
    text-align: justify;
  }

  @media (min-width: 2000px){
    width: 400px;
    margin: 150px auto 80px auto;

    & > div {
    font-size: 4rem;
    top: -50px;
    right: 180px;
    padding: 0 5px 0 5px;
  }
  & > p {
    margin: 5px 0 8px 0;
    text-align: justify;
    font-size: 2rem;
  }
  } 
`;

const VistaImg = styled.img`
  width: 50%;
  padding: 0px;
  transition-timing-function: ease-in;
  transition: 0.2s;
  border-radius: 10px;
    &:hover {
      width: 100%;
      transition-timing-function: ease-out;
      transition: 0.2s;
      border-radius: 0;
  }
  @media (max-width: 500px){
    width: 100%;
    border-radius: 0;
    } 
  `;

const TechIcon = styled.img`
    max-width: 50px;

    @media (min-width: 2000px){
      max-width: 100px;
  } 
`;

const ListTechnologies = styled.div`
  display:flex;
  justify-content:space-between;
  margin: 20px auto 0 auto;
  width: 60%;
  @media (min-width: 2000px){
    margin: 80px auto;
  } 
`;

const Technology = styled.div`
`;

const ExtraTechnology = styled.div`
  margin-top: 20px;
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px auto 10px auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  @media (max-width: 500px){
    margin: 60px 0 0 0;
    } 
    @media (min-width: 2000px){
   padding: 30px 0;
  } 
`;

const GoSite = styled.a`
  margin: 0 auto;
  background-color: #3498DB;
  text-decoration: none;
  color: #fff;
  min-width: 120px;
  height: 20px;
  padding: 10px 10px; 
  border-radius: 10px;
  border: 0px solid #999999;
  @media (max-width: 500px){
  width: 100%;
  margin: 0 1px 2px 2px;
  padding: 20px 0;
    } 
  @media (min-width: 2000px){
   min-width: 280px;
   height: 60px;
   padding-top: 20px;
   font-size: 2rem;
  } 
    &:hover {
      transition-timing-function: ease-out;
      transition: 0.3s;
      background-color: #2E86C1;
  }
`;

const GoGit = styled.a`
  margin: 0 auto;
  background-color: #D35400;
  text-decoration: none;
  color: #fff;
  min-width: 120px;
  height: 20px;
  padding: 10px 10px; 
  border-radius: 10px;
  border: 0px solid #999999;
  @media (max-width: 500px){
  width: 100%;
  margin: 0 2px 2px 1px;
  padding: 20px 0;
    } 
  @media (min-width: 2000px){
   min-width: 280px;
   height: 60px;
   padding-top: 20px;
   font-size: 2rem;
  } 
    &:hover {
      transition-timing-function: ease-out;
      transition: 0.3s;
      background-color: #BA4A00;
  }
`;

const WAColor = styled.span`
  color: #4FCE5D;
`;

const MLColor = styled.span`
  color: #D44638;
`;

const PinColor = styled.span`
  color: #FE7569;
`;

const English = () => {

  return (
    <Fragment>

      <Content>
        <NameCreator> Oswaldo García Salas</NameCreator>
        <TitleCreator className = "sub_title">Web & Mobile Applications Developer</TitleCreator>
        <DivisionLine/>
        <ContactArea>
          <div>
            <FontAwesomeIcon icon={faIdCard} />
          </div>

          <p><FontAwesomeIcon icon={faPhoneAlt} /> <WAColor><FontAwesomeIcon icon={faWhatsapp} /> </WAColor>  (+52) 438 - 111 - 5621</p>
          <p><MLColor><FontAwesomeIcon icon={faEnvelope} /> </MLColor>  chinovyou@gmail.com</p>
          <p><PinColor><FontAwesomeIcon icon={faMapMarkerAlt} /> </PinColor>  Morelia, Michoacán. MX.</p>
        </ContactArea>
      </Content>
      <Main_Menu>
        <Project>
          <ProjectName>Lucky Jump</ProjectName>
          <VistaImg
            src={luckyjump}
          />
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> May 2017 - August 2018  </ProjectDate>
          <Description>"Lucky Jump" was developed with C# through the graphic engine Unity Engine and Firebase also some other tools for design as Photoshop, Illustrator, etc. The Project took 1 year and 4 months to be developed and it had the objective of being commercialized to different typed of users through Google Play Platforma and get earnings with advertising implementation.</Description>
          <ListTechnologies>
            <Technology>
              <TechIcon
                src={csharp}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={unity}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={firebase}
              />
            </Technology>
          </ListTechnologies>
          <FooterButtons>
            <GoSite
              href=""
            >
              Go to Website
              </GoSite>
            <GoGit
              href=""
            >
              See it on GitHub
              </GoGit>
          </FooterButtons>
        </Project>
        <Project>
        <ProjectName>NAYAR</ProjectName>
          <VistaImg
            src={nayar}
          />
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> January 2019 - August 2019  </ProjectDate>
          <Description>"NAYAR" is a web application developed with HTML5, CSS, JavaScript (JQuery), PHP and MySQL. Took 8 months to be developed. The target of the project was provided to the Instituto de Ciencias y Letras "NAYAR" a web application for managers of this institute to manage the information from students and teachers and having control of the administration of this institute. Also, generate reports and every member of this institute could log in with the system, to do this was implemented the Responsive Design and Mobile-first.</Description>
          <ListTechnologies>
            <Technology>
              <TechIcon
                src={html}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={css}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={javaScript}
              />
            </Technology>

          </ListTechnologies>
          <ListTechnologies>
          <Technology>
              <TechIcon
                src={jquery}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={mysql}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={php}
              />
            </Technology>
          </ListTechnologies>
          <FooterButtons>
            <GoSite
              href=""
            >
              Go to Website
              </GoSite>
            <GoGit
              href=""
            >
              See it on GitHub
              </GoGit>
          </FooterButtons>
        </Project>
        <Project>
        <ProjectName>"San Jose" Travel Agency Web App</ProjectName>
          <VistaImg
            src={agencia}
          />
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> September 2018 - December 2018  </ProjectDate>
          <Description>"San Jose" Travel Agency Web App was developed with HTML5, CSS, Bootstrap, PHP, JavaScript also using MySQL for the storage. This project took 4 months to be developed. The target provided a web application to the San Jose Travel Agency to communicate with their customers through a mail delivery system, also take the control of payments of trips and storage of customer information.</Description>
          <ListTechnologies>
            <Technology>
              <TechIcon
                src={html}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={css}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={bootstrap}
              />
            </Technology>
          </ListTechnologies>
          <ListTechnologies>
          <Technology>
              <TechIcon
                src={php}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={javaScript}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={mysql}
              />
            </Technology>
          </ListTechnologies>
          <FooterButtons>

            <GoGit
              href=""
            >
              See it on GitHub
              </GoGit>
          </FooterButtons>
        </Project>
        <Project>
        <ProjectName>Bitacora</ProjectName>
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> March 2018 - May 2018 </ProjectDate>
          <Description>"Bitacora" was developed natively for the Android platform with Java language on Android Studio and using web technologies as PHP for communication with the server and SQLite for the storage. The development took 3 months to be developed. The project had the target of taking the registry of incidents with the network and computer equipment at Instituto Tecnologico Superior de Uruapan, to be able to locate the devices with GPS services and using some Google's API's improving the operation.  </Description>
          <ListTechnologies>
            <Technology>
              <TechIcon
                src={java}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={android}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={php}
              />
            </Technology>
          </ListTechnologies>
            <ExtraTechnology>
              <TechIcon
                src={sqlite}
              />
            </ExtraTechnology>

          <FooterButtons>
            <GoGit
              href=""
            >
              See it on GitHub
              </GoGit>
          </FooterButtons>
        </Project>
        <Project>
        <ProjectName>DELTA GYM</ProjectName>
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> May 2019 - July 2019  </ProjectDate>
          <Description>"DELTA GYM" was developed with HTML5 and JavaScript (JQuery - AJAX). Took 3 months to be developed. The target was consumed external API's to be processed and show the information on the screen as tables to be used in other areas.</Description>
          <ListTechnologies>
            <Technology>
              <TechIcon
                src={html}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={javaScript}
              />
            </Technology>
            <Technology>
              <TechIcon
                src={jquery}
              />
            </Technology>
          </ListTechnologies>
          <FooterButtons>
            <GoGit
              href=""
            >
              See it on GitHub
              </GoGit>
          </FooterButtons>
        </Project>
      </Main_Menu>
    </Fragment>
  );
}


export default English;
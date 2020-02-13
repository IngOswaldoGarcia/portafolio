import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import vista from '../vista.jpg';
import csharp from '../csharp.png';
import unity from '../unity.png';
import firebase from '../fire.png';
import luckyjump from '../lucky.png';
import nayar from '../nayar.png';

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
`;

const Main_Menu = styled.div`
    margin: 0 auto;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
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
  margin: 20px 0;
  padding: 10px 0;
  color: #000;
  @media (max-width: 500px){
    padding-bottom: 0;
    margin-bottom: 0;
    } 
`;

const ProjectName = styled.p`
  font-family: 'Arvo';
  font-weight: 700;
  font-size: 1.5rem;
`;

const ProjectDate = styled.p`
  font-family: 'Arvo';
  font-size: 1.2rem;
  @media (max-width: 500px){
    font-size: 1rem;
    } 
`;

const NameCreator = styled.h1`
  margin: 5px 0 0 0;
`;

const TitleCreator = styled.p`
  margin: 0;
`;

const DivisionLine = styled.hr`
  height: 1px;
  width: 250px;
  margin: 2px auto 50px auto;
  background-color: black;
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
    } 
  `;

const TechIcon = styled.img`
    max-width: 50px;
`;

const ListTechnologies = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Technology = styled.div`
  margin: 0 5px;
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 10px 0;
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
  width: 50%;
  margin: 0 1px 0 2px;
  padding: 20px 0;
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
  width: 50%;
  margin: 0 2px 0 1px;
  padding: 20px 0;
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
        <NameCreator>Engr. Oswaldo García Salas</NameCreator>
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
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> Mayo 2017 - Agosto del 2018</ProjectDate>
          <Description>Proyecto Lucky Jump fue programado en C# a través del motor grafico Unity Engine, Firebase además de algunas herramientas de diseño como lo es
            Photoshop, Ilustrator, etc. El proyecto tuvo como objetivo ser comercializada
                hacia distintos tipos de usuarios a través de la plataforma de Play Store y obtener ganancias con la implementación de publicidad.</Description>
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
          <p>Nombre del Proyecto</p>
          <VistaImg
            src={nayar}
          />
          <p><FontAwesomeIcon icon={faCalendarAlt} /> Mayo 2017 - Agosto del 2018</p>
          <p>Descripción</p>
          <p>Tecnologías</p>
          <a href="">Ir al sitio</a>
          <a href="">Ver en GitHub</a>
        </Project>
        <Project>
          <p>Nombre del Proyecto</p>
          <VistaImg
            src={vista}
          />
          <p>Lapso de tiempo</p>
          <p>Descripción</p>
          <p>Tecnologías</p>
          <a href="">Ir al sitio</a>
          <a href="">Ver en GitHub</a>
        </Project>
        <Project>
          <p>Nombre del Proyecto</p>
          <VistaImg
            src={vista}
          />
          <p>Lapso de tiempo</p>
          <p>Descripción</p>
          <p>Tecnologías</p>
          <a href="">Ir al sitio</a>
          <a href="">Ver en GitHub</a>
        </Project>
      </Main_Menu>
    </Fragment>
  );
}


export default English;
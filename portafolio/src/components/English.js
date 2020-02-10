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
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.div`
  text-align: center;
`;

const Description = styled.div`
  padding: 0 10px;
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
  background-color: #f47517;
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  border: 0px solid #999999;
  margin: 10px 0;
  padding: 10px 0;
  color: #fff;
`;

const NameCreator = styled.h1`
  margin: 5px;
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
  margin: 40px 0 10px 0;
`;

const GoSite = styled.a`
  margin: 0 auto;
  background-color: #fff;
  text-decoration: none;
  min-width: 90px;
  height: 20px;
  padding: 10px 10px; 
  border-radius: 10px;
`;

const GoGit = styled.a`
  margin: 0 auto;
  background-color: #fff;
  text-decoration: none;
  min-width: 90px;
  height: 20px;
  padding: 10px 10px; 
  border-radius: 10px;
`;

const English = ({ changeAbout }) => {

  changeAbout('About Me');

  return (
    <Fragment>

      <Content>
        <NameCreator>Engr. Oswaldo García Salas</NameCreator>
        <p>Web & Mobile Applications Developer</p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> <FontAwesomeIcon icon={faWhatsapp} />  (+52) 438 - 111 - 5621</p>
        <p><FontAwesomeIcon icon={faEnvelope} />  chinovyou@gmail.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Morelia, Michoacan. MX.</p>

      </Content>
      <Main_Menu>
        <Project>
          <p>Lucky Jump</p>
          <VistaImg
            src={luckyjump}
          />
          <p><FontAwesomeIcon icon={faCalendarAlt} /> Mayo 2017 - Agosto del 2018</p>
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
              Ir al sitio
              </GoSite>
            <GoGit
              href=""
            >
              Ver en GitHub
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
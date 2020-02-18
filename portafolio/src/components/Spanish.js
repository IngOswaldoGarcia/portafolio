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
`;

const Main_Menu = styled.div`
    margin: 0 auto;
    display: grid;
    @media (min-width: 992px){
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
  margin: 40px 0;
  padding: 30px 0 90px 0;
  color: #000;
  position: relative;
  @media (max-width: 500px){
    padding-bottom: 0;
    margin-bottom: 0;
    } 
`;

const ProjectName = styled.p`
  font-family: 'Arvo';
  font-size: 1.5rem;
  margin: 0 50px 30px 50px;
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
    border-radius: 0;
    } 
  `;

const TechIcon = styled.img`
    max-width: 50px;
`;

const ListTechnologies = styled.div`
  display:flex;
  justify-content:space-between;
  margin: 20px auto 0 auto;
  width: 60%;
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
        <TitleCreator className = "sub_title">Desarrollador de Aplicaciones Web y Móviles</TitleCreator>
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
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> Mayo 2017 - Agosto 2018    </ProjectDate>
          <Description>Proyecto Lucky Jump fue programado con C# a través del motor grafico Unity Engine, Firebase además de algunas herramientas de diseño como lo es Photoshop, Illustrator, etc. El periodo de tiempo empleado fue de 1 año y 4 meses en total. El proyecto tuvo como objetivo ser comercializada hacia distintos tipos de usuarios a través de la plataforma de Play Store y obtener ganancias con la implementación de publicidad.</Description>
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
              Ir al Sítio
              </GoSite>
            <GoGit
              href=""
            >
              Ver codigo en GitHub
              </GoGit>
          </FooterButtons>
        </Project>
        <Project>
        <ProjectName>NAYAR</ProjectName>
          <VistaImg
            src={nayar}
          />
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> Enero 2019 - Agosto 2019  </ProjectDate>
          <Description>Proyecto NAYAR es una aplicación web desarrollada con HTML5, CSS, JavaScript (JQuery), PHP y MySQL. El tiempo de duración del proyecto tomó desde enero del 2019 a agosto del mismo año. El objetivo de este proyecto fue proporcionar al Instituto de Ciencias y Letras "NAYAR" una aplicación web para que los administrativos de dicha institución pudieran gestionar la información de los alumnos y maestros y se llevara un control del
          mismo además de generar actas de acuerdo a las necesidades de la institución. Se buscaba que todos los miembros del instituto pudieran acceder al sistema debido a esto, se implementaron técnicas de diseño como Responsive Design.</Description>
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
              Ir al Sítio
              </GoSite>
            <GoGit
              href=""
            >
              Ver codigo en GitHub
              </GoGit>
          </FooterButtons>
        </Project>
        <Project>
        <ProjectName>Agencia de Viajes "San Jose" Web App</ProjectName>
          <VistaImg
            src={agencia}
          />
          <ProjectDate><FontAwesomeIcon icon={faCalendarAlt} /> Septiembre 2018 - Diciembre 2018  </ProjectDate>
          <Description>El proyecto "Agencia de Viajes San Jose Web App" fue realizado en HTML5, CSS y Bootstrap, PHP, JavaScript además del uso e implementación de MySQL. El proyecto tuvo una duración de 4 meses. El objetivo fue el de proporcionarle un sitio web a la agencia de viajes "San Jose" para que esta se pudiera comunicar con sus clientes a través de un sistema de envío de correos, además de llevar el control de los pagos en viajes y cobros, así como el registro de sus clientes.</Description>
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
              Ver codigo en GitHub
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
              Ver codigo en GitHub
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
              Ver codigo en GitHub
              </GoGit>
          </FooterButtons>
        </Project>
      </Main_Menu>
    </Fragment>
  );
}


export default English;
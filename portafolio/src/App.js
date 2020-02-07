import React from 'react';
import styled from '@emotion/styled'; 
import foto from './foto.jpg';
import vista from './vista.jpg';
import { faPhoneAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faGithubSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    max-width: 90%;
    margin: 50px auto;
    padding: 25px; 
    background-color: #fff;
    border-radius: 15px;
`;

const Description = styled.div`
  text-align: center;
`;

const Imagen = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  margin-top: 2.5rem;

  -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
`;

const AboutButton = styled.button`
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #FF0000;
  color: #fff;
  border: 0px solid #999999;
  &:hover{
    cursor: pointer;
  }
`;

const Social = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Social__Network = styled.a`

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
  padding: 10px;
  margin: 10px 0;
  color: #fff;
`;

const NameCreator = styled.h1`
  margin: 5px;
`; 

const VistaImg = styled.img`
  width: 100%;
`;


function App() {
  return (
      <Container>
        <AboutButton>About Me</AboutButton>
        <Description>
          <Imagen
            src={foto}
            alt="Oswaldo García Salas"
          />
          <NameCreator>Ing. Oswaldo García Salas</NameCreator>
          <p>Web & Mobile Applications Developer</p>
          <p>Portfolio</p>
          <p><FontAwesomeIcon icon={faPhoneAlt}/> <FontAwesomeIcon icon={faWhatsapp} />  (+52) 438 - 111 - 5621</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Morelia, Michoacan. MX.</p>
          <Social>
          <Social__Network
              href="http://linkedin.com"
              target="_blank"
            >
            <FontAwesomeIcon icon={faLinkedin} />
            </Social__Network>
            <Social__Network
              href="http://github.com"
              target="_blank"
            >
            <FontAwesomeIcon icon={faGithubSquare} />
            </Social__Network>
            <Social__Network
              href="http://fb.com"
              target="_blank"
            >
            <FontAwesomeIcon icon={faFacebookSquare} />
            </Social__Network>
            <Social__Network
              href="http://twitter.com"
              target="_blank"
            >
            <FontAwesomeIcon icon={faTwitterSquare} />
            </Social__Network>
            <Social__Network
              href="http://instagram.com"
              target="_blank"
            >
            <FontAwesomeIcon icon={faInstagramSquare} />
            </Social__Network>
          </Social>
        </Description>
        <Main_Menu>
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
      </Container>
  );
}

export default App;

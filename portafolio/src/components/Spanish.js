import React, {Fragment} from 'react';
import styled from '@emotion/styled'; 
import foto from '../foto.jpg';
import vista from '../vista.jpg';
//import axios from 'axios';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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


const Spanish = () => ( 
        <Fragment>
        <Description>
            <Imagen
            src={foto}
            alt="Oswaldo García Salas"
            />
            <NameCreator>Ing. Oswaldo García Salas</NameCreator>
            <p>Desarrolador de Aplicaciones Web y Moviles</p>
            <p><FontAwesomeIcon icon={faPhoneAlt}/> <FontAwesomeIcon icon={faWhatsapp} />  (+52) 438 - 111 - 5621</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/>  chinovyou@gmail.com</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Morelia, Michoacan. MX.</p>

        </Description>
        <Main_Menu>
            <Project>
            <p>Lucky Jump</p>
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
      </Fragment>
     );
 
export default Spanish;
import React, {Fragment} from 'react';
import styled from '@emotion/styled'; 
import vista from '../vista.jpg';
import csharp from '../csharp.png';
//import axios from 'axios';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Description = styled.div`
  text-align: center;
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
  width: 100%;
  padding: 0px;
  `;

const CSharpIcon = styled.img`
    max-width: 50px;
`;

const ListTechnologies = styled.div`

`;

const Technology = styled.div`
  
`;


const Spanish = () => 
  {
    return ( 
        <Fragment>
        <Description>
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
            <p><FontAwesomeIcon icon={faCalendarAlt} /> mayo 2017 - agosto del 2018</p>
            <p>Proyecto Lucky Jump fue programado en C# a través del motor grafico Unity Engine, Firebase además de algunas herramientas de diseño como lo es
              Photoshop, Ilustrator, etc. El proyecto tuvo como objetivo ser comercializada
                hacia distintos tipos de usuarios a través de la plataforma de Play Store y obtener ganancias con la implementación de publicidad.</p>
            <ListTechnologies>
              <Technology>
                <CSharpIcon
                  src={csharp}
                />
              </Technology>
            </ListTechnologies>
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
  }
 
export default Spanish;
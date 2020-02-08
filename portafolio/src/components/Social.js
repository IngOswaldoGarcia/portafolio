import React from 'react';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faGithubSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from '@emotion/styled'; 

const SocialMenu = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;
const Social__Network = styled.a`

`;

const Social = () => {
    return ( 
        <SocialMenu>
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
        </SocialMenu>
     );
}
 
export default Social;
import React from 'react';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from '@emotion/styled';

const SocialMenu = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 20px;
  display: inline-block;
`;

const SocialNetwork = styled.a`
  margin: 0 5%;
  font-size: 2.5rem;
  text-decoration:none;
  @media (min-width: 2000px){
    font-size: 5rem;
  } 
`;

const LEColor = styled.span`
  color: #0e76a8;
`;
const GHColor = styled.span`
  color: #211f1f;
`;
const FBColor = styled.span`
  color: #3b5998;
`;
const TTColor = styled.span`
  color: #00acee;
`;
const IGColor = styled.span`
  color: #DD2A7B;
`;

const Social = () => {
    return (
        <SocialMenu>
            <SocialNetwork
                href="https://www.linkedin.com/in/ing-oswaldo-garcia/"
                target="_blank"
            >
                <LEColor>
                    <FontAwesomeIcon icon={faLinkedin} />
                </LEColor>
            </SocialNetwork>
            <SocialNetwork
                href="https://github.com/IngOswaldoGarcia"
                target="_blank"
            >
                <GHColor>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </GHColor>
            </SocialNetwork>
            <SocialNetwork
                href="https://www.facebook.com/oswaldo.garcia.16940599"
                target="_blank"
            >
                <FBColor>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </FBColor>
            </SocialNetwork>
            <SocialNetwork
                href="https://twitter.com/Chinovyou"
                target="_blank"
            >
                <TTColor>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </TTColor>
            </SocialNetwork>
            <SocialNetwork
                href="https://www.instagram.com/chinovyou1"
                target="_blank"
            >
                <IGColor>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </IGColor>
            </SocialNetwork>
        </SocialMenu>
    );
}

export default Social;
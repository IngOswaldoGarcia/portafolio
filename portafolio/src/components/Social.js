import React from 'react';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faGithubSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from '@emotion/styled';

const SocialMenu = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 0 20px;
  display: inline-block;
`;
const Social__Network = styled.a`
  margin: 0 5%;
  font-size: 2rem;
  text-decoration:none;
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
            <Social__Network
                href="http://linkedin.com"
                target="_blank"
            >
                <LEColor>
                    <FontAwesomeIcon icon={faLinkedin} />
                </LEColor>
            </Social__Network>
            <Social__Network

                href="http://github.com"
                target="_blank"
            >
                <GHColor>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </GHColor>
            </Social__Network>
            <Social__Network
                href="http://fb.com"
                target="_blank"
            >
                <FBColor>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </FBColor>
            </Social__Network>
            <Social__Network
                href="http://twitter.com"
                target="_blank"
            >
                <TTColor>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </TTColor>
            </Social__Network>
            <Social__Network
                href="http://instagram.com"
                target="_blank"
            >
                <IGColor>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </IGColor>
            </Social__Network>
        </SocialMenu>
    );
}

export default Social;
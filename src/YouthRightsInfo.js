import React from "react";
import styled, { keyframes } from "styled-components";
import violenceImage from "./images/violance.png";
import educationImage from "./images/education.jpeg";
import health from "./images/speech.jpg";
import background2 from "./images/background2.png";
import background6 from "./images/background6.jpeg";

const YouthRightsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
  position: relative;
`;

const RightImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;

const AnimatedSection = styled.div`
  position: relative;
  overflow: hidden;
`;

// Background animation
const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const YouthRightsContent = styled.div`
  animation: ${backgroundAnimation} 10s infinite; // Apply the backgroundAnimation
  background: linear-gradient(-45deg, #58a3f4, #a6eaea);
  background-size: 400% 400%;
  height: 100%;
`;

const YouthRightsInfo = () => (
  <AnimatedSection>
    <YouthRightsContent>
      <YouthRightsContainer>
        <h2>AS YOUTH YOU ARE ENTITLED TO THESE RIGHTS</h2>
        <ul>
          <li>
            <strong>The right to health:</strong> All young people have the
            right to the highest attainable standard of health, physically and
            mentally. This includes the right to access quality health care,
            including sexual and reproductive health services. Young people also
            have the right to be informed about their health and to make
            decisions about their own care.
            <RightImage src={health} alt="health" />
          </li>

          <li>
            <strong>The right to education:</strong> All young people have the
            right to free, quality primary and secondary education. This
            includes the right to a safe and supportive learning environment,
            and to be taught by qualified teachers. Young people also have the
            right to access higher education and vocational training.
            <RightImage src={educationImage} alt="Education" />
          </li>
          <li>
            <strong>The right to participation:</strong> All young people have
            the right to participate in decisions that affect their lives. This
            includes the right to freedom of expression, association, and
            assembly. Young people also have the right to be involved in the
            political process and to hold leadership positions.
            <RightImage src={background2} alt="Participation" />
          </li>
          <li>
            <strong>
              The right to protection from violence and exploitation:
            </strong>{" "}
            All young people have the right to be protected from violence,
            abuse, and exploitation. This includes the right to be protected
            from physical, sexual, and emotional abuse. Young people also have
            the right to be protected from trafficking and exploitation.
            <RightImage src={violenceImage} alt="Violence" />
          </li>
          <li>
            <strong>The right to equality and non-discrimination:</strong> All
            young people have the right to be treated equally, regardless of
            their race, ethnicity, gender, sexual orientation, religion, or
            other status. This includes the right to be free from discrimination
            and prejudice. Young people also have the right to access all
            opportunities and resources available to them, regardless of their
            background.
            <RightImage src={background6} alt="Equality" />
          </li>
          {/* Repeat the pattern for other rights */}
        </ul>
      </YouthRightsContainer>
    </YouthRightsContent>
  </AnimatedSection>
);

export default YouthRightsInfo;

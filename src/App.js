import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import ScrollToTopButton from "./Button";
import ArticleList from "./ArticleList";
import "./index.css";
import background from "./images/vector1.jpeg";
import violenceImage from "./images/violance.png";
import educationImage from "./images/education.jpeg";
import health from "./images/background.jpeg";
import background2 from "./images/background2.png";
import background6 from "./images/background6.jpeg";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.8
  ); // Adjust background color and opacity as needed
  color: #fff;
  padding: 10px;
  z-index: 1000; // Ensure the header is above other elements
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  position: relative;
  text-align: center;
  color: rebeccapurple;
  background-image: url(${background});
  padding: 20px 20px; // Adjust padding as needed

  h1 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 1.2em;
  }

  nav {
    margin-top: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-right: 20px;
  }

  a {
    color: rebeccapurple;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #0056b3;
  }
`;

const YouthRightsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;

  ol {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }
`;

const RightImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;
const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  color: #fff;

  border: none;
  behavior: "smooth";
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const YouthRightsInfo = () => (
  <YouthRightsContainer>
    <h2>Youth Rights Information</h2>
    <ol>
      <li>
        <strong>The right to health:</strong> All young people have the right to
        the highest attainable standard of health, physically and mentally. This
        includes the right to access quality health care, including sexual and
        reproductive health services. Young people also have the right to be
        informed about their health and to make decisions about their own care.
        <img src={health} alt="health" />
      </li>

      <li>
        <strong>The right to education:</strong> All young people have the right
        to free, quality primary and secondary education. This includes the
        right to a safe and supportive learning environment, and to be taught by
        qualified teachers. Young people also have the right to access higher
        education and vocational training.
        <img src={educationImage} alt="Violence" />
      </li>
      <li>
        <strong>The right to participation:</strong> All young people have the
        right to participate in decisions that affect their lives. This includes
        the right to freedom of expression, association, and assembly. Young
        people also have the right to be involved in the political process and
        to hold leadership positions.
        <RightImage src={background2} alt="Equality" />
      </li>
      <li>
        <strong>The right to protection from violence and exploitation:</strong>{" "}
        All young people have the right to be protected from violence, abuse,
        and exploitation. This includes the right to be protected from physical,
        sexual, and emotional abuse. Young people also have the right to be
        protected from trafficking and exploitation.
        <img src={violenceImage} alt="Violence" />
      </li>
      <li>
        <strong>The right to equality and non-discrimination:</strong> All young
        people have the right to be treated equally, regardless of their race,
        ethnicity, gender, sexual orientation, religion, or other status. This
        includes the right to be free from discrimination and prejudice. Young
        people also have the right to access all opportunities and resources
        available to them, regardless of their background.
        <RightImage src={background6} alt="Equality" />
      </li>
      {/* Repeat the pattern for other rights */}
    </ol>
  </YouthRightsContainer>
);

const AppContainer = styled.div`
  text-align: center;
  text-align: center;
  margin-top: 20%;
  height: 70%;
  overflow-y: auto;
`;

const App = () => (
  <Router>
    <AppContainer>
      <FixedHeader>
        <HeaderSection>
          <div>
            <h1> YOUTH FOR CHANGE </h1>
          </div>
          <div>
            <h3>
              Empowering the future through caring about the mental well-being
              of the youth
            </h3>
            <h4>
              This was developed due to the higher rate of mental diseases among
              the youth,Here are articles related to mental health awareness
            </h4>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/articles">
                  CLICK HERE TO BROWSE MENTAL WELLNESS ARTICLES
                </Link>
              </li>
              <li>
                <Link to="/rights">HAVE A LOOK AT YOUR RIGHTS </Link>
              </li>
            </ul>
          </nav>
        </HeaderSection>
      </FixedHeader>

      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/rights" element={<YouthRightsInfo />} />
      </Routes>
    </AppContainer>
    <Footer>
      <ScrollToTopButton />
    </Footer>
  </Router>
);

export default App;

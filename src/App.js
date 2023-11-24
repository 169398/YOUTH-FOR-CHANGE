import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import ScrollToTopButton from "./Button";
import ArticleList from "./ArticleList";
import Article from "./ Article";
import "./index.css";
import background from "./images/vector1.jpeg";
import YouthRightsInfo from "./YouthRightsInfo";

const FixedHeader = styled.header`
  position: absolute;
  bottom: 70%;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #afd8fa; // Adjust background color and opacity as needed
  color: #afd8fa;
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
  li {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
  }
  h1 {
    font-size: 2.5em;
    top: 0;
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
    position: relative;
  }

  a {
    color: rebeccapurple;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    transition: color 0.3s ease-in-out;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #afd8fa;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  color: #58a3f4;

  border: none;
  behavior: "smooth";
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;
const NavBox = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 20px;
  padding: 10px 10px 5px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0056b3;
    opacity: 0.3;
    z-index: -1;
    border-radius: 10px;
  }

  a {
    color: rebeccapurple;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  &:hover a {
    color: #a6eaea;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  text-align: center;
  margin-top: 22%;
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
              This was developed due to the higher rate of mental problems among
              the youth,Here are articles related to mental health awareness and
              a detailed information about suicide as a whole
            </h4>
          </div>
          <nav>
            <ul>
              <NavBox>
                {" "}
                <li>
                  <Link to="/articles">BROWSE MENTAL WELLNESS ARTICLES</Link>
                </li>
              </NavBox>
              <NavBox>
                {" "}
                <li>
                  <Link to="/rights">HAVE A LOOK AT YOUR RIGHTS </Link>
                </li>
              </NavBox>

              <NavBox>
                <li>
                  <Link to="/suicide"> KNOW ABOUT SUICIDE </Link>
                </li>
              </NavBox>
            </ul>
          </nav>
        </HeaderSection>
      </FixedHeader>

      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/rights" element={<YouthRightsInfo />} />
      </Routes>
    </AppContainer>
    <Routes>
      {" "}
      <Route path="/suicide" element={<Article />} />
    </Routes>
    <Footer>
      <ScrollToTopButton />
    </Footer>
  </Router>
);

export default App;

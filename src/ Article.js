import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 5;
  }
`;

const StyledArticle = styled.div`
  max-width: 100%;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  color: f588a9;
  line-height: 1.6;
  animation: ${fadeIn} infinite ease-in-out; 

  ol {
    list-style-type: none;
    padding-left: 10%;

  }

  li {
    margin-bottom: 20px;

  }

  strong {
    color: rebeccapurple; /* Blue color for strong text */
  }

  ul {
    padding-left: 15%;
  }

  a {
    color: rebeccapurple
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Additional styles for a more modern look */
  h1 {
    color: rebeccapurple;
    font-size: 2rem;
    margin-bottom: 20px;
    padding-left: 10%;

  }

  h2 {
    color: rebeccapurple;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }

  /* Background animation */
  background: linear-gradient(
    to right,
    #58a3f4,
    #a6eaea
  ); /* Gradient background */
  background-size: 200% 100%; 
  animation: gradientAnimation 15s; 

  @keyframes gradientAnimation {
   
    100% {
      background-position: -200% 0; /* Final position */
    }
  }
`;

const Article = () => {
  return (
    <StyledArticle>
      <h1>Suicide and Youth: Understanding the Issues</h1>
      <ol>
        <li>
          <h2>
            <strong>Suicide is a leading cause of death among youths</strong>
          </h2>
          <p>
            According to the Centers for Disease Control and Prevention (CDC),
            suicide is the second leading cause of death among youths aged 10-24
            in the United States. In 2020, there were 6,695 suicides in this age
            group. The suicide rate for youths has been increasing in recent
            years.
          </p>
          <p>
            There are a number of factors that can contribute to suicide in
            youths, including:
          </p>
          <ul>
            <li>Mental health conditions, such as depression and anxiety</li>
            <li>Substance use disorders</li>
            <li>Family history of suicide</li>
            <li>Stressful life events, such as bullying, abuse, or trauma</li>
            <li>Access to firearms</li>
          </ul>
          <p>
            There are a number of things that can be done to prevent suicide in
            youths, including:
          </p>
          <ul>
            <li>
              Early identification and treatment of mental health conditions
            </li>
            <li>Substance abuse prevention and treatment programs</li>
            <li>School-based suicide prevention programs</li>
            <li>Access to mental health care for all youths</li>
            <li>Increased awareness of the warning signs of suicide</li>
          </ul>
          <p>
            If you are concerned that a youth may be suicidal, there are a
            number of things you can do:
          </p>
          <ul>
            <li>Talk to the youth about your concerns</li>
            <li>Listen to the youth and take their concerns seriously</li>
            <li>Encourage the youth to seek professional help</li>
            <li>Remove access to firearms and other lethal means</li>
            <li>Stay connected with the youth and provide support</li>
          </ul>
          <p>Here are some additional resources that can help:</p>
          <ul>
            <li>
              The National Suicide Prevention Lifeline:{" "}
              <a href="tel:1-800-273-8255">1-800-273-8255</a>
            </li>
            <li>The Crisis Text Line: Text HOME to 741741</li>
            <li>
              The Trevor Project:{" "}
              <a href="tel:1-866-488-7386">1-866-488-7386</a>
            </li>
            <li>
              The Jed Foundation:{" "}
              <a
                href="https://www.jedfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jedfoundation.org
              </a>
            </li>
            <li>
              The American Foundation for Suicide Prevention:{" "}
              <a
                href="https://afsp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                afsp.org
              </a>
            </li>
          </ul>
          <p>Remember, you are not alone. There is help available.</p>
        </li>
      </ol>
    </StyledArticle>
  );
};

export default Article;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
const apiKey = process.env.REACT_APP_API_KEY;

const ArticleListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ArticleImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ArticleDetails = styled.div`
  text-align: center;
`;

const ReadMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=mental%20health&apiKey=${apiKey}`
        );

        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <ArticleListContainer>
      {articles.map((article) => (
        <ArticleContainer key={article.title}>
          {article.urlToImage && (
            <ArticleImage src={article.urlToImage} alt={article.title} />
          )}
          <ArticleDetails>
            <h3>{article.title}</h3>
            <ReadMoreLink
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </ReadMoreLink>
          </ArticleDetails>
        </ArticleContainer>
      ))}
    </ArticleListContainer>
  );
};

export default ArticleList;

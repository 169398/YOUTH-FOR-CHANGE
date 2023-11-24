import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollButton = styled.button`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #afd8fa;
  color: #58a3f4;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  transition: background-color 0.3s ease-in-out;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollButton visible={isVisible} onClick={scrollToTop}>
      Scroll to Top
    </ScrollButton>
  );
};

export default ScrollToTopButton;

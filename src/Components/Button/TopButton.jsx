import { useEffect, useState } from "react";
import styled from "styled-components";

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <ScrollContainer>
        <Button onClick={scrollToTop}>🔼</Button>
      </ScrollContainer>
    )
  );
}

const ScrollContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export default TopButton;

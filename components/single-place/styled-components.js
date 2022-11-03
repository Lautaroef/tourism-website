import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Description = styled(Header)`
  padding: 0 0.1rem;
  flex-direction: column;

  h1 {
    margin: 1rem 0;
    align-self: flex-start;
    font-size: 36px;
    font-weight: 700;
    @media (max-width: 600px) {
      align-self: center;
    }
  }

  h4 {
    font-size: 15px;
  }

  aside {
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
    align-self: flex-start;
    column-gap: 0.25rem;
  }
`;

export const Highlights = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-areas:
    "subtitle img"
    "paragraph img"
    "button img";

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "subtitle"
      "paragraph"
      "img"
      "button";
  }

  h2 {
    width: fit-content;
    margin: 2% auto 1.3rem auto;
    text-align: center;
    color: #4b57a5;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.2px;
    position: relative;
    grid-area: subtitle;
  }

  p {
    margin-bottom: 1rem;
    font-size: 16px;
    color: rgb(100, 100, 100);
    grid-area: paragraph;
  }
`;

export const Image = styled.div.attrs((props) => ({
  image: props.src,
  width: props.width + "px",
  height: props.height + "px",
}))`
  width: 100%;
  max-width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: flex-end;
  align-self: center;
  grid-area: img;

  @media (max-width: 740px) {
    margin: 0.13rem auto 0.75rem auto;
    justify-self: center;
  }
`;

export const Button = styled.button`
  width: max-content;
  max-height: 40px;
  padding: 5px 18px;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 500;
  border: 3px solid ${(props) => props.bgColor};
  border-radius: 3px;
  outline: none;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  transition: border 0.3s ease-in-out;
  grid-area: button;

  &:hover {
    background-color: #34333b;
    border: 3px solid #34333b;
  }
`;

// Category component
const randomColor = [/*"#5bc0de", "#C51D34",*/ "#5cb85c"]; //light-blue, red , green

export const CategoryStyled = styled.ul`
  background-color: ${randomColor[
    Math.floor(randomColor.length * Math.random())
  ]};
  display: flex;
  color: #fff;
  padding: 1px 3px;
  margin: 0.1rem auto;
  font-weight: 600;
  font-size: 12px;
  border-radius: 2px;
  text-transform: capitalize;
`;

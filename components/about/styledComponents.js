import styled from "styled-components";
import FastMenu from "./FastMenu";

export const Header = styled.header.attrs((props) => ({
  image: props.img,
}))`
  margin: 0 auto 2.5rem auto;
  padding: 100px 0;
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0px 0px 7px rgb(0 0 0);

  letter-spacing: 0.2px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Main = styled.main`
  line-height: 1.8;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;

  p {
    width: 75%;
    font-size: 14.3px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const FastMenuStyled = styled(FastMenu)`
  margin-right: 2.5rem;
  font-family: Poppins;

  h3 {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    width: 9rem;
    margin: 4.5px 0;
    padding: 2px 0;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
    transition: border-right 0.2s ease-in-out;

    :hover {
      color: #4b57a5;
      border-right: 4px solid #4b57a5;
    }
  }
  .active {
    color: #4b57a5;
    border-right: 4px solid #4b57a5;
  }
`;

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://s3-eu-west-1.amazonaws.com/www.mybosque.com/assets/boxes/img/sections/story-home.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fdead4;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 10px 0px 0px;
  font-size: 22px;
`;

const Finalpage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>PURCHASED SUCCESSFULLY</Title>
        <Buttons>
          <Button>
            <Link style={{ textDecoration: "none", color: "white", fontSize: "22px" }} to="/">
              Go to HOME
            </Link>
          </Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Finalpage;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'; // Asegúrate de tener un logo en la ruta correcta
import homeImage from '../images/home.jpg'; // Asegúrate de tener una imagen en la ruta correcta

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    color:black;
    margin:0px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: #4CAF50;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const GreenButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #45a049;
  }
`;

const WhiteButton = styled(Link)`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 20px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
`;

function Home() {
  return (
    <HomeContainer>
      <Content>
        <Logo src={logo} alt="Logo" />
        <Title>Welcome to MakersBot-1o</Title>
        <ButtonContainer>
          <GreenButton to="/chat">Go to Chat</GreenButton>
        </ButtonContainer>
        <p>Made by:</p>
        <p>Jonathan Velosa</p>
        <p>Mateus Fidelis</p>
      </Content>
      <ImageContainer>
        <HomeImage src={homeImage} alt="Home" />
      </ImageContainer>
    </HomeContainer>
  );
}

export default Home;
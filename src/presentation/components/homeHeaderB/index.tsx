import React from "react";
import { FirstSection, HeaderContainer, SecondSection, TextOne, TextThree, TextTwo } from "./styles";
import senac from "../../../assets/svg/senac.png";
export const HomeHeaderB: React.FC = () => {
  return (
    <HeaderContainer>
      <FirstSection>
        <TextOne>Olá, Gustavo Barzi</TextOne>
        <TextTwo>Técnico em Informática</TextTwo>
        <TextThree>(Trocar de Curso)</TextThree>
      </FirstSection>
      <SecondSection>
        <img src={senac}  width={80} height={50}/>
      </SecondSection>
    </HeaderContainer>
  );
};

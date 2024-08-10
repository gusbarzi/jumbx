import React from "react";
import { FirstSection, HeaderContainer, SecondSection, TextOne, TextThree, TextTwo } from "./styles";
import senac from "../../../assets/svg/senac.png";
export const HomeHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <FirstSection>
        <TextOne>Olá, Tainá Oliveira</TextOne>
        <TextTwo>Técnico em Administração</TextTwo>
        <TextThree>(Trocar de Curso)</TextThree>
      </FirstSection>
      <SecondSection>
        <img src={senac}  width={80} height={50}/>
      </SecondSection>
    </HeaderContainer>
  );
};

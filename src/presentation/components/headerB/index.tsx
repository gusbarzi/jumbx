import React from "react";
import { CircleInterrogation, FirstSection, HeaderContainer, NameTag, SecondSection } from "./styles";
import { FilePdf, XCircle } from "@phosphor-icons/react";
import { LinkClose } from "../homeHeader/styles";

export const HeaderB: React.FC = () => {
  return (
    <HeaderContainer>
      <FirstSection>
        <div><FilePdf size={32} /></div>
        <NameTag>Leitura de Arquivo</NameTag>
      </FirstSection>
      <SecondSection>
        <CircleInterrogation>?</CircleInterrogation>
        <LinkClose to='/area-do-aluno'><XCircle size={36} /></LinkClose>
      </SecondSection>
    </HeaderContainer>
  );
};


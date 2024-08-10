import React from "react";
import {
  InfantDevelopmentContainer,
  EbookCardContainer,
  EbookImageContainer,
  DescriptionContainer,
  MainTitle,
  MainDescription,
  Tag,
} from "./infantDevelopment.styles";
import { PathEnum } from "../../../routes/pathsEnum";

export const InfantDevelopment: React.FC = () => {
  return (
    <InfantDevelopmentContainer to={PathEnum.CHILD_TEN}>
      <EbookCardContainer>
        <EbookImageContainer />
        <DescriptionContainer>
          <MainTitle>
            Criança nota 10: Técnicas Infalíveis para Crianças Brilharem na
            Escola
          </MainTitle>
          <MainDescription>
            Descubra técnicas práticas para melhorar o desempenho escolar de
            crianças. Dicas de organização, concentração e atividades lúdicas
            para ajudar seu filho a brilhar na escola!
          </MainDescription>
          <Tag>
            <span>Novidade</span>
          </Tag>
        </DescriptionContainer>
      </EbookCardContainer>
    </InfantDevelopmentContainer>
  );
};

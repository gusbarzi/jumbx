import React from "react";
import {
  Card,
  CardContainer,
  Content,
  HiperLink,
  TitleCategory,
  TrustTheTipContainerTwo,
} from "./trustTheTip.styles";
import { PathEnum } from "../../../routes/pathsEnum";
import banner from "../../../assets/svg/backghround.svg"
import { HomeHeaderB } from "../../components/homeHeaderB";

export const TrustTheTipB: React.FC = () => {
  return (
    <>
      <HomeHeaderB />
      <TrustTheTipContainerTwo>

        <div>
          <img src={banner} alt="banner" width={400} height={200}/>
        </div>
        <Content>
          <div>
            <TitleCategory>Central do Aluno</TitleCategory>
          </div>
          <CardContainer>
            <Card>
              <HiperLink to={PathEnum.TO_B}>Aulas</HiperLink>
            </Card>

            <Card>
              <HiperLink to={PathEnum.TO_B}>Calendário</HiperLink>
            </Card>
            <Card>
              <HiperLink to={PathEnum.TO_B}>
                Declaração estudantil
              </HiperLink>
            </Card>
            <Card>
              <HiperLink to={PathEnum.TO_B}>Avisos</HiperLink>
            </Card>
          </CardContainer>
        </Content>

        <Content>
          <div>
            <TitleCategory>Central de Mensagens</TitleCategory>
          </div>
          <CardContainer>
            <Card>
              <HiperLink to={PathEnum.TO_B}>Notificações</HiperLink>
            </Card>

            <Card>
              <HiperLink to={PathEnum.TO_B}>Mural</HiperLink>
            </Card>
          </CardContainer>
        </Content>
      </TrustTheTipContainerTwo>
    </>
  );
};

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
import { HomeHeader } from "../../components/homeHeader";
import banner from "../../../assets/svg/backghround.svg"

export const TrustTheTip: React.FC = () => {
  return (
    <>
      <HomeHeader />
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
              <HiperLink to={PathEnum.TO_T}>Aulas</HiperLink>
            </Card>

            <Card>
              <HiperLink to={PathEnum.TO_T}>Calendário</HiperLink>
            </Card>
            <Card>
              <HiperLink to={PathEnum.TO_T}>
                Declaração estudantil
              </HiperLink>
            </Card>
            <Card>
              <HiperLink to={PathEnum.TO_T}>Avisos</HiperLink>
            </Card>
          </CardContainer>
        </Content>

        <Content>
          <div>
            <TitleCategory>Central de Mensagens</TitleCategory>
          </div>
          <CardContainer>
            <Card>
              <HiperLink to={PathEnum.TO_T}>Notificações</HiperLink>
            </Card>

            <Card>
              <HiperLink to={PathEnum.TO_T}>Mural</HiperLink>
            </Card>
          </CardContainer>
        </Content>
      </TrustTheTipContainerTwo>
    </>
  );
};

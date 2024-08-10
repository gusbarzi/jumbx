import React from "react";
import {
  ImageContainer,
  TrustTheTipContainer,
} from "../trustTheTip/trustTheTip.styles";
import taina from "../../../assets/svg/taina.svg";
import { Header } from "../../components/header";

export const Taina: React.FC = () => {
  return (
    <>
      <Header />
      <TrustTheTipContainer>
        <ImageContainer>
          <img src={taina} />
        </ImageContainer>
      </TrustTheTipContainer>
    </>
  );
};

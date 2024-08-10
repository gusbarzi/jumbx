import React from 'react'
import { ImageContainer, TrustTheTipContainer } from '../trustTheTip/trustTheTip.styles'
import barzi from "../../../assets/svg/gustavo.svg";
import { HeaderB } from '../../components/headerB';

export const Barzi: React.FC = () => {
  return (
    <>
    <HeaderB />
    <TrustTheTipContainer>
      <ImageContainer>
        <img src={barzi} />
      </ImageContainer>
    </TrustTheTipContainer>
    </>
  )
}

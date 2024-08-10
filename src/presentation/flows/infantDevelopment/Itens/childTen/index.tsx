import React from "react";
import {
  AllPricesContainer,
  BlueText,
  ButtonContainer,
  ButtonPayNow,
  ChildTenContainer,
  Cipher,
  DecimalPrice,
  Discount,
  FullPrice,
  GreenTag,
  ImageContainer,
  ImageEbookCard,
  IntegerContainer,
  PriceContent,
  Strikethrough,
  TagContainer,
  TruePrice,
  WithoutDiscountContainer,
  ZeroStyle,
} from "./childTen.styles";

export const ChildTen: React.FC = () => {
  return (
    <ChildTenContainer>
      <div>
        <span>
          Criança nota 10: Técnicas Infalíveis para Crianças Brilharem na Escola
        </span>
      </div>
      <TagContainer>
        <GreenTag>
          <span>MAIS VENDIDO</span>
        </GreenTag>
        <BlueText>1º em Desenvolvimento infantil</BlueText>
      </TagContainer>

      <ImageContainer>
        <ImageEbookCard />
      </ImageContainer>

      <AllPricesContainer>
        <Strikethrough>
          <p>R$</p>{" "}
          <WithoutDiscountContainer>
            <ZeroStyle>{49}</ZeroStyle>,{99}
          </WithoutDiscountContainer>
        </Strikethrough>

        <PriceContent>
          <Cipher>R$</Cipher>{" "}
          <IntegerContainer>
            <FullPrice>
              <TruePrice>{29}</TruePrice>,<DecimalPrice>{99}</DecimalPrice>
            </FullPrice>

            <Discount>-40% OFF</Discount>
          </IntegerContainer>
        </PriceContent>
      </AllPricesContainer>

      <ButtonContainer>
        <ButtonPayNow>ADQUIRIR AGORA</ButtonPayNow>
      </ButtonContainer>
    </ChildTenContainer>
  );
};

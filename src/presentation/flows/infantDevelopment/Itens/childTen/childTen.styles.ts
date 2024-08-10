import styled from "styled-components";

export const ChildTenContainer = styled.div`
  padding: 40px 16px 0 16px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: black;
  font-weight: 500;

  background-color: #fff;
  gap: 16px;
`;

export const GreenTag = styled.div`
  width: 120px;
  background-color: orange;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  gap: 12px;
`;

export const BlueText = styled.div`
  font-size: 12px;
  color: #70a1f6;
`;

export const ImageEbookCard = styled.div`
  width: 400px;
  height: 400px;

  border: 1px solid #ffefd8;
`;

export const ZeroStyle = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const TruePrice = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

export const DecimalPrice = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Strikethrough = styled.p`
  display: flex;
  align-items: center;
  text-decoration: line-through;

  color: gray;

  gap: 4px;
`;

export const IntegerContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-items: flex-end;

  gap: 12px;
`;

export const WithoutDiscountContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-items: center;
`;

export const PriceContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  align-items: flex-end;

  gap: 4px;
`;

export const Cipher = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

export const FullPrice = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
`;

export const Discount = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #75cb51;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AllPricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ButtonPayNow = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2F79D1;
  color: #fff;

  border-radius: 4px;

  padding: 12px;

  font-size: 20px;
  font-weight: 700;
`;

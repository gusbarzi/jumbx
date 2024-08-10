import { Link } from "react-router-dom";
import styled from "styled-components";

export const TrustTheTipContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

export const TrustTheTipContainerTwo = styled.div`
  width: 100vw;
  padding: 0 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 32px;

  gap: 32px;

  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;

export const BackgroundWhite = styled.div`
  background-color: #fff8f4;

  border-radius: 4px;
`;

export const MenuCardContainer = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ff914d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #7d3000;
`;

export const Links = styled(Link)`
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  border: 1px solid gray;
  overflow: hidden;

  display: flex;
  width: 100vw;
  height: 600px;
`;

export const Card = styled.div`
  padding: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  width: 120px;
  height: 120px;

  border: 1px solid lightgray;
  border-radius: 4px;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
`;

export const HiperLink = styled(Link)`
  text-decoration: none;
  color: gray;
  font-weight: 500;
`;

export const TitleCategory = styled.span`
  font-size: 20px;
  font-weight: bold;
`;


export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

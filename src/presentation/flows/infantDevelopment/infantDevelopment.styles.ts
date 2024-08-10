import { Link } from "react-router-dom";
import styled from "styled-components";
import child from "../../../assets/ebook-images/image-1.jpeg";

export const InfantDevelopmentContainer = styled(Link)`
  padding-top: 60px;

  width: 100vw;
  height: calc(100vh - 140px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: black;
  font-weight: 500;

  background-color: #FFF6F0;
`;

export const EbookCardContainer = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #FF914D;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  position: relative;
`;

export const EbookImageContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px 4px 0 0;
  background: url(${child});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px 8px;

  gap: 8px;
`;

export const MainTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #7D3000;
`;

export const MainDescription = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #7D3000;
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: green;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

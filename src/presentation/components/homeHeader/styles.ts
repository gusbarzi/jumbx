import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  background-color: #e7ba34;

  border-bottom: 1px solid #D9ECF1;

  border-radius: 0 0 16px 16px;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  align-items: flex-start;
  justify-content: center;
`;

export const SecondSection = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const NameTag = styled.span`
font-size: 24px;
  font-weight: 400;
`;

export const CircleInterrogation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid white;
  border-radius: 50%;

  width: 30px;
  height: 30px;

  font-weight: bold;
`

export const TextOne = styled.span`
  font-weight: bold;
`;

export const TextTwo = styled.span`
  text-transform: uppercase;
`;

export const TextThree = styled.span`
  color: #d71c1c;
  font-weight: bold;
`;

export const LinkClose = styled(Link)`
  color: white
`
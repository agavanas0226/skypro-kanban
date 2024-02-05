import styled from "styled-components";
import { themeStyles } from "../../lib/theme";

export const CardItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`;
export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;
export const CardThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};

  ${CardThemeText} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
  }
`;
export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;
export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

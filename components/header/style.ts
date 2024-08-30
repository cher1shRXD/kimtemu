import styled from "@emotion/native";
import { ThemedText, ThemedView } from "../theme";

export const Container = styled(ThemedView)`
  width:100%;
  height:50px;
  display:flex;
  align-items:flex-end;
  flex-direction:row;
  padding:0 10px;
  box-sizing:border-box;
  box-sizing:border-box;
  position:absolute;
  top:30px;
`
export const LogoText = styled(ThemedText)`
  font-size: 25px;
  font-weight: 600;
`;
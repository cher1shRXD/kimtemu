import styled from "@emotion/native";
import { ThemedView } from "../../theme";

export const Container = styled(ThemedView)`
  flex: 1;
  padding-top:40px;
  align-items: center;
`;

export const Pressable = styled.Pressable`
  width:100%;
  flex:1;
`

export const SearchWrap = styled.View`
  width: 95%;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #ad49e1;
  margin: 20px auto 5px auto;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 100%;
`;
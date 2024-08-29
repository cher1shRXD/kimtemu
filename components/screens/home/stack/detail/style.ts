import styled from "@emotion/native";
import { ThemedText, ThemedView } from "../../../../theme";

export const Container = styled(ThemedView)`
  flex:1;
  align-items:center;
`
export const TitleWrap = styled.TouchableOpacity`
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  flex-direction:row;
`
export const Title = styled(ThemedText)`
  font-size:15px;
`
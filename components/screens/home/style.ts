import styled from "@emotion/native";
import { ThemedBox, ThemedView } from "../../theme";

export const Container = styled(ThemedView)`
  flex:1;
  justify-content:center;
  align-items:center;
  position:relative;
  box-sizing:border-box;
  padding-top:80px;
`
export const CategoryWrap = styled.ScrollView`
  width:100vw;
  box-sizing:border-box;
  height:80px;
  display:flex;
  margin-top:20px;
`
export const CategoryItem = styled(ThemedBox)`
  width:80px;
  height:80px;
  margin: 0 7px;
  border-radius:20px;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`
export const SearchWrap = styled.View`
  width:95%;
  height:50px;
  justify-content:space-between;
  flex-direction:row;
  align-items:center;
  border-radius:20px;
  border: 2px solid #ad49e1;
  margin: 20px auto 5px auto;
  padding: 0 15px;
  box-sizing:border-box;
`;
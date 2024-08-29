import styled from "@emotion/native";
import { ThemedBox } from "../theme";
import { Animated } from "react-native";

export const Container = styled(ThemedBox)`
  width: 90%;
  height: 60px;
  position: absolute;
  bottom: 30px;
  border-radius: 20px;
  left: 5%;
`;

export const ItemWapper = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 0 5px;
`;

export const TabItem = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

export const Indicator = styled(Animated.View)`
  background-color: #ad49e1;
  width: 20%;
  height: 50px;
  border-radius: 15px;
  z-index: 1;
  position: absolute;
  margin:0 5px;
`;

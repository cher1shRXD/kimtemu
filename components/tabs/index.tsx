import { Ionicons } from "@expo/vector-icons";
import * as S from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/theme/themeContext";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

const Tabs = ({ state }: any) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { theme } = useTheme();
  const TAB_LIST = state.routeNames;
  const CURRENT_IDX = state.index;

  const indicatorPosition = useRef<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(indicatorPosition.current, {
      toValue: CURRENT_IDX * (100 / TAB_LIST.length), 
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [CURRENT_IDX]);

  const focusTo = (idx: number) => {
    navigation.navigate(TAB_LIST[idx]);
  };

  return (
    <S.Container>
      <S.ItemWapper>
        <S.Indicator
          style={{
            left: indicatorPosition.current.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        />
        <S.TabItem onPress={() => focusTo(0)} activeOpacity={1}>
          <Ionicons
            name={CURRENT_IDX === 0 ? "home" : "home-outline"}
            size={30}
            style={
              theme.backgroundColor === "#1b1b1b" ? { color: "#F1F1F1" } : {}
            }
          />
        </S.TabItem>
        <S.TabItem onPress={() => focusTo(1)} activeOpacity={1}>
          <Ionicons
            name={CURRENT_IDX === 1 ? "flash" : "flash-outline"}
            size={30}
            style={
              theme.backgroundColor === "#1b1b1b" ? { color: "#F1F1F1" } : {}
            }
          />
        </S.TabItem>
        <S.TabItem onPress={() => focusTo(2)} activeOpacity={1}>
          <Ionicons
            name={CURRENT_IDX === 2 ? "add-circle" : "add-circle-outline"}
            size={30}
            style={
              theme.backgroundColor === "#1b1b1b" ? { color: "#F1F1F1" } : {}
            }
          />
        </S.TabItem>
        <S.TabItem onPress={() => focusTo(3)} activeOpacity={1}>
          <Ionicons
            name={CURRENT_IDX === 3 ? "search" : "search-outline"}
            size={30}
            style={
              theme.backgroundColor === "#1b1b1b" ? { color: "#F1F1F1" } : {}
            }
          />
        </S.TabItem>
        <S.TabItem onPress={() => focusTo(4)} activeOpacity={1}>
          <Ionicons
            name={CURRENT_IDX === 4 ? "person" : "person-outline"}
            size={30}
            style={
              theme.backgroundColor === "#1b1b1b" ? { color: "#F1F1F1" } : {}
            }
          />
        </S.TabItem>
      </S.ItemWapper>
    </S.Container>
  );
};

export default Tabs;

import { useRef } from "react";
import { useTheme } from "../../../context/theme/themeContext";
import * as S from "./style";
import { Keyboard, TextInput, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {

  const { theme } = useTheme();
  const inputRef = useRef<TextInput | null>(null);

  useFocusEffect(()=>{
    if(inputRef.current) {
      inputRef.current.focus();
    }
  })

  return (
    <S.Container>
      <S.Pressable onPress={Keyboard.dismiss}>
        <S.SearchWrap>
          <S.Input
            placeholder="검색어를 입력하세요."
            cursorColor={theme.textColor}
            style={{ color: theme.textColor }}
            ref={inputRef}
            placeholderTextColor={theme.textColor}
          />
          <TouchableOpacity>
            <Ionicons name="search-outline" size={25} color={theme.textColor} />
          </TouchableOpacity>
        </S.SearchWrap>
      </S.Pressable>
    </S.Container>
  );
};

export default Search;

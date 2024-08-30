import { Ionicons } from '@expo/vector-icons';
import * as S from './style'
import { TouchableOpacity } from 'react-native';
import { ThemedText } from '../theme';
import { useTheme } from '../../context/theme/themeContext';
import { categoryStore } from '../../store/categoryStore';
import { Categories } from '../../types/category.type';

const CategoryItem = ({ icon,title }: { icon: Categories["value"],title:string }) => {
  const { theme } = useTheme();
  const category = categoryStore((state) => state.category);
  const setCategory = categoryStore((state) => state.setCategory);

  return (
    <TouchableOpacity
      onPress={() => {
        setCategory(icon);
      }}
    >
      <S.CategoryItem
        style={
          category === icon ? { borderWidth: 2, borderColor: "#ad49e1" } : {}
        }
      >
        <Ionicons
          name={icon}
          size={35}
          color={category === icon ? "#ad49e1" : theme.textColor}
        />
        <ThemedText style={category === icon ? { color: "#ad49e1" } : {}}>
          {title}
        </ThemedText>
      </S.CategoryItem>
    </TouchableOpacity>
  );
};

export default CategoryItem
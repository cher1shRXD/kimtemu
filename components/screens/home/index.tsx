import * as S from './style'
import Header from '../../header'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../../../context/theme/themeContext'
import { ThemedText } from '../../theme'
import { RefreshControl, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import CategoryItem from '../../categoryItem'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const Home = () => {
  const { theme } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };


  return (
    <S.Container>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('SearchScreen')}}>
          <S.SearchWrap>
            <ThemedText>검색어를 입력하세요</ThemedText>
            <Ionicons name="search-outline" size={25} color={theme.textColor} />
          </S.SearchWrap>
        </TouchableOpacity>
        <S.CategoryWrap
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <CategoryItem icon="shirt-outline" title="의류" />
          <CategoryItem icon="fast-food-outline" title="음식" />
          <CategoryItem icon="basketball-outline" title="스포츠" />
          <CategoryItem icon="pulse-outline" title="건강" />
          <CategoryItem icon="desktop-outline" title="전자기기" />
          <CategoryItem icon="construct-outline" title="문구류" />
        </S.CategoryWrap>
      </ScrollView>
    </S.Container>
  );
}

export default Home
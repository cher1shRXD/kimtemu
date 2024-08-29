import { Ionicons } from '@expo/vector-icons'
import { ThemedText } from '../../../../theme'
import * as S from './style'
import { useTheme } from '../../../../../context/theme/themeContext'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const Detail = () => {
  
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <S.Container>
      <S.TitleWrap onPress={()=>{navigation.navigate('Home')}}> 
        <Ionicons 
          name='chevron-back-outline'
          size={30}
          color={theme.textColor}
        />
        <S.Title>디테일 페이지</S.Title>
      </S.TitleWrap>
      <ThemedText>ㅎㅇㅎㅇ</ThemedText>
    </S.Container>
  )
}

export default Detail
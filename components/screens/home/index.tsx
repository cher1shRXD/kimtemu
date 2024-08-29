import { TouchableOpacity } from 'react-native'
import Header from '../../header'
import { ThemedText } from '../../theme'
import * as S from './style'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <S.Container>
      <ThemedText>this is home page</ThemedText>
      <TouchableOpacity onPress={()=>{navigation.navigate('Detail')}}>
        <ThemedText>오픈 섬띵</ThemedText>
      </TouchableOpacity>
    </S.Container>
  )
}

export default Home
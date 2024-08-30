import { TouchableOpacity } from 'react-native'
import { ThemedText } from '../../../theme'
import * as S from './style'
import { modalVisibleStore } from '../../../../store/modalVisibleStore'

const Intro = () => {

  const setVisible = modalVisibleStore(state=>state.setVisible);

  return (
    <S.Container>
      <TouchableOpacity onPress={()=>{setVisible(false)}}>
        <ThemedText>닫기</ThemedText>
      </TouchableOpacity>
    </S.Container>
  );
}

export default Intro
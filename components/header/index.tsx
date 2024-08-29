import { Ionicons } from '@expo/vector-icons'
import * as S from './style'
import { useTheme } from '../../context/theme/themeContext'

const Header = () => {

  const { theme } = useTheme();

  return (
    <S.Container>
      <S.LogoText>KimTEMU</S.LogoText>
      <Ionicons name="bag-handle-outline" size={35} color={theme.textColor}/>
    </S.Container>
  );
}

export default Header
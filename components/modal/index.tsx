import { Modal } from 'react-native';
import { modalStageStore } from '../../store/modalStageStore';
import Intro from './stages/intro';
import { modalVisibleStore } from '../../store/modalVisibleStore';

const ModalScreen = () => {

  const visible = modalVisibleStore(state=>state.visible);

  const INDEX = modalStageStore(state=>state.index);
  const STAGES = [<Intro/>];

  return (
    <Modal animationType='slide' visible={visible}>{STAGES[INDEX]}</Modal>
  );
}

export default ModalScreen
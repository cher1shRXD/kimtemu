import { create } from "zustand";

interface ModalVisibleStore {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const modalVisibleStore = create<ModalVisibleStore>((set) => ({
  visible: false,
  setVisible: (visible: boolean) => set({ visible }),
}));

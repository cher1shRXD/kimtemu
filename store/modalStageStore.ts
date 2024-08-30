import { create } from "zustand";

interface ModalStageStore {
  index:number;
  setIndex: (index:number) => void; 
}

export const modalStageStore = create<ModalStageStore>((set)=>({
  index:0,
  setIndex: (index:number) => set({index})
}))
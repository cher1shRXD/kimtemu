import { create } from "zustand";
import { Categories } from "../types/category.type";

interface CategoryStore {
  category: Categories["value"];
  setCategory: (category:Categories['value']) => void;
}

export const categoryStore = create<CategoryStore>((set) => ({
  category: "shirt-outline",
  setCategory: (category:Categories["value"]) => set({category})
}));
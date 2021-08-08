import create from "zustand";

export const useStore = create(set => ({

    // related to texture loading
    texture: 0,
    setToAmountTexture: (input) => set(state => ({ texture: input })),

    isHidden: false,
    hideIsHidden: () => set(state => ({ isHidden: true })),
    showIsHidden: () => set(state => ({ isHidden: false})),


}));

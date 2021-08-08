import create from "zustand";

export const useStore = create(set => ({

    // related to texture loading
    texture: 0,
    setToAmountTexture: (input) => set(state => ({ texture: input }))


    
}));

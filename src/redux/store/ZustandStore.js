import create from "zustand";

export const useStore = create(set => ({

    // related to texture loaded on the MainMesh
    texture: 0,
    setToAmountTexture: (input) => set(state => ({ texture: input })),

    // related to visibility of the MainMesh
    isHidden: false,
    hideIsHidden: () => set(state => ({ isHidden: true })),
    showIsHidden: () => set(state => ({ isHidden: false})),

    // related to the shape of the MainMesh
    shape: 1,
    setToShape: (input) => set(state => ({ shape: input})),

}));
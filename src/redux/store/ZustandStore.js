import create from "zustand";

export const useStore = create(set => ({

    texture: 0,
    // hide: () => set(state => ({ isHidden: true})),
    // show: () => set(state => ({ isHidden: false})),
    setToAmount: (input) => set(state => ({ texture: input }))

}));

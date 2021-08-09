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
    shape: 0,
    setToShape: (input) => set(state => ({ shape: input})),

}));

// At first I wanted to use React-redux with its toolkit
// because i thought it would be a good way to simplify 
// state management, as i was standing i was at the point where i
// was passing states from the very top to the children of the canvas
// it was not very good, so i thought react-redux would solve this
// to my Surprise it didn't, and that's because React has a major bug
// where react CANNOT be used between 2 renderers, that being
// the App and the Canvas, so it was not possible to pass redux because
// react would lose the context. This is why i chose to use Zustand, frankly
// i do not like it but it gets the job done.
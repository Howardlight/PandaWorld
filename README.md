# Apanda World

Work in Progress

A SandBox World built with <a href="https://github.com/pmndrs/react-three-fiber">React-three/fiber</a>

Tools: <a href="https://github.com/facebook/react">React JS</a>, <a href="https://github.com/pmndrs/drei" >react-three/drei</a>, <a href="https://www.npmjs.com/package/@react-spring/three">react-spring/three</a>, <a href="https://github.com/pmndrs/react-postprocessing">react-three/postprocessing</a>, <a href="https://github.com/sass/sass">sass</a> and <a href="https://github.com/pmndrs/zustand">Zustand</a>.

Currently Deployed to: https://howardlight.github.io/PandahWorld/s

## Why Zustand over Redux ?

At first I wanted to use React-redux with its toolkit
because i thought it would be a good way to simplify 
state management, as i was standing i was at the point where i
was passing states from the very top to the children of the canvas
it was not very good, so i thought react-redux would solve this
to my Surprise it didn't, and that's because React has a major bug
where react CANNOT be used between 2 renderers, that being
the App and the Canvas, so it was not possible to pass redux because
react would lose the context. This is why i chose to use Zustand.
The tradeoff is simplicity and bloatness in exchange for Redux's
boilerplate-y but concise nature.
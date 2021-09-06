import {
    EffectComposer,
    DepthOfField,
    Noise,
    Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const Effects = () => {
    return(
        <>
            <EffectComposer multisampling={0} disableNormalPass={true}>
            <DepthOfField
            focusDisctance={1}
            focalLength={0.07}
            bokehScale={3}
            height={480}
            />
            {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
            <Noise opacity={0.02} />


            {/* TIP: SMAA Fucked up the Vignette last time, Watch out */}
            <Vignette
            offset={0.5} // vignette offset
            darkness={0.5} // vignette darkness
            eskil={false} // Eskil's vignette technique
            blendFunction={BlendFunction.NORMAL} // blend mode
            />

            </EffectComposer>
        </>
    );
}

export default Effects;
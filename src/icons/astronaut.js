import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './lottie/space-code.json'

export const AnimatedAstronaut = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
           <Lottie options={defaultOptions}
            isClickToPauseDisabled={true}
            />
    )
}

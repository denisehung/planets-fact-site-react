import React from 'react';
import Main from './Main'
import planetImageNeptune from '../images/planet-neptune.svg';
import internalImageNeptune from '../images/planet-neptune-internal.svg';
import geologyNeptune from '../images/geology-neptune.png';

function Neptune() {
    return(
        <Main
            planetImage={planetImageNeptune}
            internalImage={internalImageNeptune}
            geologyImage={geologyNeptune}
            name="neptune"
            rotationTime="16.08 hours"
            revolutionTime="164.79 years"
            radius="24,622 km"
            temperature="-201°C"
            overview="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
            internal="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
            geology="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
            overviewLink="https://en.wikipedia.org/wiki/earth"
            internalLink="https://en.wikipedia.org/wiki/earth#Internal_structure"
            geologyLink="https://en.wikipedia.org/wiki/Earth#Surface"
            color="#2D68F0"
        >

        </Main>
    )
}

export default Neptune;
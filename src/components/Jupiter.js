import React from 'react';
import Main from './Main'
import planetImageJupiter from '../images/planet-jupiter.svg';
import internalImageJupiter from '../images/planet-jupiter-internal.svg';
import geologyJupiter from '../images/geology-jupiter.png';

function Earth() {
    return(
        <Main
            planetImage={planetImageJupiter}
            internalImage={internalImageJupiter}
            geologyImage={geologyJupiter}
            title="Jupiter"
            rotationTime="9.93 hours"
            revolutionTime="11.86 years"
            radius="69,911 km"
            temperature="-108°C"
            overview="Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
            internal="When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
            geology="The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
            overviewLink="https://en.wikipedia.org/wiki/Jupiter"
            internalLink="https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
            geologyLink="https://en.wikipedia.org/wiki/Jupiter#Surface"
            color="#D83A34"
        >

        </Main>
    )
}

export default Earth;
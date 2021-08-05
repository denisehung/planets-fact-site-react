import React from 'react';
import Main from './Main'
import planetImageMars from '../images/planet-mars.svg';
import internalImageMars from '../images/planet-mars-internal.svg';
import geologyMars from '../images/geology-mars.png';

function Mars() {
    return(
        <Main
            planetImage={planetImageMars}
            internalImage={internalImageMars}
            geologyImage={geologyMars}
            name="mars"
            rotationTime="1.03 days"
            revolutionTime="1.88 years"
            radius="3,389.5 km"
            temperature="−28°C"
            overview="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'."
            internal="Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
            geology="Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
            overviewLink="https://en.wikipedia.org/wiki/Mars"
            internalLink="https://en.wikipedia.org/wiki/Mars#Internal_structure"
            geologyLink="https://en.wikipedia.org/wiki/Mars#Surface"
            color="#D14C32"
        >

        </Main>
    )
}

export default Mars;
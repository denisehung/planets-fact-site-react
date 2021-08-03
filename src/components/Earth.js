import React from 'react';
import Main from './Main'
import planetImageEarth from '../images/planet-earth.svg';
import internalImageEarth from '../images/planet-earth-internal.svg';
import geologyEarth from '../images/geology-earth.png';

function Earth() {
    return(
        <Main 
            planetImage={planetImageEarth}
            internalImage={internalImageEarth}
            geologyImage={geologyEarth}
            title="Earth"
            rotationTime="0.99 days"
            revolutionTime="365.26 days"
            radius="6,371 km"
            temperature="16°C"
            overview="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
            internal="Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
            geology="The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
            overviewLink="https://en.wikipedia.org/wiki/Earth"
            internalLink="https://en.wikipedia.org/wiki/Earth#Internal_structure"
            geologyLink="https://en.wikipedia.org/wiki/Earth#Surface"
            color="#6D2ED5"
        >

        </Main>
    )
}

export default Earth;
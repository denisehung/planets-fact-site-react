import React from 'react';
import Main from './Main'
import planetImageUranus from '../images/planet-uranus.svg';
import internalImageUranus from '../images/planet-uranus-internal.svg';
import geologyUranus from '../images/geology-uranus.png';

function Uranus() {
    return(
        <Main 
            planetImage={planetImageUranus}
            internalImage={internalImageUranus}
            geologyImage={geologyUranus}
            title="Uranus"
            rotationTime="17.2 hours"
            revolutionTime="84 years"
            radius="25,362 km"
            temperature="-195°C"
            overview="Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
            internal="The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
            geology="The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
            overviewLink="https://en.wikipedia.org/wiki/Uranus"
            internalLink="https://en.wikipedia.org/wiki/Uranus#Internal_structure"
            geologyLink="https://en.wikipedia.org/wiki/Uranus#Surface"
            color="#1EC1A2"
        >

        </Main>
    )
}

export default Uranus;
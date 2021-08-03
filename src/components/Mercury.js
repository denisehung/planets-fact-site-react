import React from 'react';
import Main from './Main';
import planetImageMercury from '../images/planet-mercury.svg';
import internalImageMercury from '../images/planet-mercury-internal.svg';
import geologyMercury from '../images/geology-mercury.png';

function Mercury() {
    return(
        <Main 
            planetImage={planetImageMercury}
            internalImage={internalImageMercury}
            geologyImage={geologyMercury}
            title="Mercury"
            rotationTime="58.6 days"
            revolutionTime="87.97 days"
            radius="2,439.7 km"
            temperature="430°C"
            overview="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
            internal="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth's density."
            geology="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
            overviewLink="https://en.wikipedia.org/wiki/Mercury_(planet)"
            internalLink="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
            geologyLink="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface"
            color="#419EBB"
        >

        </Main>
    )
}

export default Mercury;
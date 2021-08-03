(this["webpackJsonpplanets-fact-site"]=this["webpackJsonpplanets-fact-site"]||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(15),r=a.n(s),o=a(4),l=(a(21),a(2)),c=a(0);var h=function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(o.c,{exact:!0,to:"/",className:"logo",children:"The Planets"}),Object(c.jsx)("nav",{className:"navigation",children:Object(c.jsxs)("ul",{className:"navigation__menu",children:[Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{exact:!0,to:"/",activeClassName:"navigation__link_active navigation__link_active_mercury",className:"navigation__link",children:"Mercury"})}),Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{to:"/venus",activeClassName:"navigation__link_active navigation__link_active_venus",className:"navigation__link",children:"Venus"})}),Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{to:"/earth",activeClassName:"navigation__link_active navigation__link_active_earth",className:"navigation__link",children:"Earth"})}),Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{to:"/mars",activeClassName:"navigation__link_active navigation__link_active_mars",className:"navigation__link",children:"Mars"})}),Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{to:"/jupiter",activeClassName:"navigation__link_active navigation__link_active_jupiter",className:"navigation__link",children:"Jupiter"})}),Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{to:"/saturn",activeClassName:"navigation__link_active navigation__link_active_saturn",className:"navigation__link",children:"Saturn"})}),Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{to:"/uranus",activeClassName:"navigation__link_active navigation__link_active_uranus",className:"navigation__link",children:"Uranus"})}),Object(c.jsx)("li",{className:"navigation__item",children:Object(c.jsx)(o.d,{to:"/neptune",activeClassName:"navigation__link_active navigation__link_active_neptune",className:"navigation__link",children:"Neptune"})})]})})]})},m=a(10);var u=function(e){var t=n.a.useState(!0),a=Object(m.a)(t,2),i=a[0],s=a[1],r=n.a.useState(!1),o=Object(m.a)(r,2),l=o[0],h=o[1],u=n.a.useState(!1),d=Object(m.a)(u,2),g=d[0],p=d[1];return Object(c.jsxs)("div",{class:"main-wrapper",children:[Object(c.jsxs)("section",{className:"main",children:[Object(c.jsxs)("div",{className:"main__image-container",children:[Object(c.jsx)("img",{src:i?e.planetImage:l?e.internalImage:e.planetImage,className:"main__image",alt:""}),g&&Object(c.jsx)("img",{src:e.geologyImage,className:"geology__image",alt:""})]}),Object(c.jsxs)("div",{className:"main__description",children:[Object(c.jsxs)("div",{className:"main__text-container",children:[Object(c.jsx)("h1",{className:"main__title",children:e.title}),Object(c.jsx)("p",{className:"main__paragraph",children:i?e.overview:l?e.internal:e.geology}),Object(c.jsxs)("p",{className:"main__source",children:["Source : ",Object(c.jsx)("a",{href:i?e.overviewLink:l?e.internalLink:e.geologyLink,className:"main__wikipedia",rel:"noreferrer",target:"_blank",children:"Wikipedia"})]})]}),Object(c.jsxs)("div",{className:"button-container",children:[Object(c.jsxs)("button",{className:"button",style:{backgroundColor:i?e.color:""},onClick:function(){s(!0),h(!1),p(!1)},children:[Object(c.jsx)("span",{className:"button__number",children:"01"}),"Overview"]}),Object(c.jsxs)("button",{className:"button",style:{backgroundColor:l?e.color:""},onClick:function(){s(!1),h(!0),p(!1)},children:[Object(c.jsx)("span",{className:"button__number",children:"02"}),"Internal structure"]}),Object(c.jsxs)("button",{className:"button",style:{backgroundColor:g?e.color:""},onClick:function(){s(!1),h(!1),p(!0)},children:[Object(c.jsx)("span",{className:"button__number",children:"03"}),"Surface geology"]})]})]})]}),Object(c.jsxs)("section",{className:"main__facts",children:[Object(c.jsxs)("div",{className:"facts__block",children:[Object(c.jsx)("h2",{className:"facts__title",children:"Rotation Time"}),Object(c.jsx)("p",{className:"facts__value",children:e.rotationTime})]}),Object(c.jsxs)("div",{className:"facts__block",children:[Object(c.jsx)("h2",{className:"facts__title",children:"Revolution Time"}),Object(c.jsx)("p",{className:"facts__value",children:e.revolutionTime})]}),Object(c.jsxs)("div",{className:"facts__block",children:[Object(c.jsx)("h2",{className:"facts__title",children:"Radius"}),Object(c.jsx)("p",{className:"facts__value",children:e.radius})]}),Object(c.jsxs)("div",{className:"facts__block",children:[Object(c.jsx)("h2",{className:"facts__title",children:"Average Temp."}),Object(c.jsx)("p",{className:"facts__value",children:e.temperature})]})]})]})},d=a.p+"static/media/planet-mercury.1fce205c.svg",g=a.p+"static/media/planet-mercury-internal.d1be1432.svg",p=a.p+"static/media/geology-mercury.aa6732c3.png";var v=function(){return Object(c.jsx)(u,{planetImage:d,internalImage:g,geologyImage:p,title:"Mercury",rotationTime:"58.6 days",revolutionTime:"87.97 days",radius:"2,439.7 km",temperature:"430\xb0C",overview:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",internal:"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth's density.",geology:"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon\u2019s.",overviewLink:"https://en.wikipedia.org/wiki/Mercury_(planet)",internalLink:"https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",geologyLink:"https://en.wikipedia.org/wiki/Mercury_(planet)#Surface",color:"#419EBB"})},j=a.p+"static/media/planet-venus.db5a3444.svg",b=a.p+"static/media/planet-venus-internal.1a94aa02.svg",f=a.p+"static/media/geology-venus.484f9dac.png";var y=function(){return Object(c.jsx)(u,{planetImage:j,internalImage:b,geologyImage:f,title:"Venus",rotationTime:"243 days",revolutionTime:"224.7 days",radius:"6,051.8 km",temperature:"471\xb0C",overview:"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",internal:"The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",geology:"Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",overviewLink:"https://en.wikipedia.org/wiki/Venus",internalLink:"https://en.wikipedia.org/wiki/Venus#Internal_structure",geologyLink:"https://en.wikipedia.org/wiki/Venus#Surface",color:"#EDA249"})},_=a.p+"static/media/planet-earth.4d12af96.svg",k=a.p+"static/media/planet-earth-internal.3c465186.svg",w=a.p+"static/media/geology-earth.61d2b324.png";var x=function(){return Object(c.jsx)(u,{planetImage:_,internalImage:k,geologyImage:w,title:"Earth",rotationTime:"0.99 days",revolutionTime:"365.26 days",radius:"6,371 km",temperature:"16\xb0C",overview:"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",internal:"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",geology:"The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",overviewLink:"https://en.wikipedia.org/wiki/Earth",internalLink:"https://en.wikipedia.org/wiki/Earth#Internal_structure",geologyLink:"https://en.wikipedia.org/wiki/Earth#Surface",color:"#6D2ED5"})},O=a.p+"static/media/planet-mars.f9dc1ca4.svg",N=a.p+"static/media/planet-mars-internal.d867ac80.svg",S=a.p+"static/media/geology-mars.d3ffce8e.png";var I=function(){return Object(c.jsx)(u,{planetImage:O,internalImage:N,geologyImage:S,title:"Mars",rotationTime:"1.03 days",revolutionTime:"1.88 years",radius:"3,389.5 km",temperature:"\u221228\xb0C",overview:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",internal:"Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16\u201317% sulfur.",geology:"Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",overviewLink:"https://en.wikipedia.org/wiki/Mars",internalLink:"https://en.wikipedia.org/wiki/Mars#Internal_structure",geologyLink:"https://en.wikipedia.org/wiki/Mars#Surface",color:"#D14C32"})},T=a.p+"static/media/planet-jupiter.b1d0956b.svg",L=a.p+"static/media/planet-jupiter-internal.3087313d.svg",E=a.p+"static/media/geology-jupiter.93e4e021.png";var C=function(){return Object(c.jsx)(u,{planetImage:T,internalImage:L,geologyImage:E,title:"Jupiter",rotationTime:"9.93 hours",revolutionTime:"11.86 years",radius:"69,911 km",temperature:"-108\xb0C",overview:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",internal:"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",geology:"The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22\xb0 south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",overviewLink:"https://en.wikipedia.org/wiki/Jupiter",internalLink:"https://en.wikipedia.org/wiki/Jupiter#Internal_structure",geologyLink:"https://en.wikipedia.org/wiki/Jupiter#Surface",color:"#D83A34"})},M=a.p+"static/media/planet-saturn.801f886a.svg",J=a.p+"static/media/planet-saturn-internal.e883c559.svg",U=a.p+"static/media/geology-saturn.b309827a.png";var V=function(){return Object(c.jsx)(u,{planetImage:M,internalImage:J,geologyImage:U,title:"Saturn",rotationTime:"10.8 hours",revolutionTime:"29.46 years",radius:"58,232 km",temperature:"-138\xb0C",overview:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",internal:"Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",geology:"The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",overviewLink:"https://en.wikipedia.org/wiki/Saturn",internalLink:"https://en.wikipedia.org/wiki/Saturn#Internal_structure",geologyLink:"https://en.wikipedia.org/wiki/Saturn#Surface",color:"#CD5120"})},A=a.p+"static/media/planet-uranus.e91b297f.svg",D=a.p+"static/media/planet-uranus-internal.578233c6.svg",R=a.p+"static/media/geology-uranus.8cec343d.png";var q=function(){return Object(c.jsx)(u,{planetImage:A,internalImage:D,geologyImage:R,title:"Uranus",rotationTime:"17.2 hours",revolutionTime:"84 years",radius:"25,362 km",temperature:"-195\xb0C",overview:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",internal:"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron\u2013nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",geology:"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15\xb10.03 in the upper troposphere.",overviewLink:"https://en.wikipedia.org/wiki/Uranus",internalLink:"https://en.wikipedia.org/wiki/Uranus#Internal_structure",geologyLink:"https://en.wikipedia.org/wiki/Uranus#Surface",color:"#1EC1A2"})},B=a.p+"static/media/planet-neptune.af322961.svg",F=a.p+"static/media/planet-neptune-internal.3ebd623e.svg",P=a.p+"static/media/geology-neptune.d1247e41.png";var G=function(){return Object(c.jsx)(u,{planetImage:B,internalImage:F,geologyImage:P,title:"Neptune",rotationTime:"16.08 hours",revolutionTime:"164.79 years",radius:"24,622 km",temperature:"-201\xb0C",overview:"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",internal:"Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",geology:"Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",overviewLink:"https://en.wikipedia.org/wiki/earth",internalLink:"https://en.wikipedia.org/wiki/earth#Internal_structure",geologyLink:"https://en.wikipedia.org/wiki/Earth#Surface",color:"#2D68F0"})};var z=function(){return Object(c.jsxs)(o.b,{basename:"/",children:[Object(c.jsx)(h,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(v,{})}),Object(c.jsx)(l.a,{path:"/venus",children:Object(c.jsx)(y,{})}),Object(c.jsx)(l.a,{path:"/earth",children:Object(c.jsx)(x,{})}),Object(c.jsx)(l.a,{path:"/mars",children:Object(c.jsx)(I,{})}),Object(c.jsx)(l.a,{path:"/jupiter",children:Object(c.jsx)(C,{})}),Object(c.jsx)(l.a,{path:"/saturn",children:Object(c.jsx)(V,{})}),Object(c.jsx)(l.a,{path:"/uranus",children:Object(c.jsx)(q,{})}),Object(c.jsx)(l.a,{path:"/neptune",children:Object(c.jsx)(G,{})})]})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(z,{})})}),document.getElementById("root")),W()}},[[31,1,2]]]);
//# sourceMappingURL=main.3a6f85fa.chunk.js.map
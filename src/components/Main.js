import React from 'react';

function Main(props) {
    const [overviewButtonState, setOverviewButtonState] = React.useState(true);
    const [internalButtonState, setInternalButtonState] = React.useState(false);
    const [geologyButtonState, setGeologyButtonState] = React.useState(false);

    function handleClickOverview() {
        setOverviewButtonState(true);
        setInternalButtonState(false);
        setGeologyButtonState(false);
    }

    function handleClickInternal() {
        setOverviewButtonState(false);
        setInternalButtonState(true);
        setGeologyButtonState(false);
    }

    function handleClickGeology() {
        setOverviewButtonState(false);
        setInternalButtonState(false);
        setGeologyButtonState(true);
    }

    return (
        <div class="main-wrapper">
        <nav className="button-container_mobile">
                <button className="button_mobile" onClick={handleClickOverview} 
                style={{borderBottom: overviewButtonState ? `4px solid ${props.color}` : ''}}>Overview</button>
                <button className="button_mobile" onClick={handleClickInternal}
                style={{borderBottom: internalButtonState ? `4px solid ${props.color}` : ''}}>Structure</button>
                <button className="button_mobile" onClick={handleClickGeology}
                style={{borderBottom: geologyButtonState ? `4px solid ${props.color}` : ''}}>Surface</button>
        </nav>
            <section className="main">
                <div className="main__image-container">
                    <img src={overviewButtonState ? props.planetImage
                    : internalButtonState ? props.internalImage : props.planetImage} className={`main__image main__image_${props.name}`} alt=''/>
                    {geologyButtonState && <img src={props.geologyImage} className="geology__image" alt='' />}
                </div>
                <div className="main__description">
                    <div className="main__text-container">
                        <h1 className="main__title">{props.name}</h1>
                        <p className="main__paragraph">
                        {overviewButtonState ? props.overview
                        : internalButtonState ? props.internal
                        : props.geology}</p>
                        <p className="main__source">Source : <a href=
                        {overviewButtonState ? props.overviewLink
                        : internalButtonState ? props.internalLink
                        : props.geologyLink} className="main__wikipedia" rel="noreferrer" target="_blank">Wikipedia</a></p>
                    </div>
                    <div className="button-container">
                        <button className="button" style={{backgroundColor: overviewButtonState ? props.color : ""}} onClick={handleClickOverview}><span className="button__number">01</span>Overview</button>
                        <button className="button" style={{backgroundColor: internalButtonState ? props.color : ""}}  onClick={handleClickInternal}><span className="button__number">02</span>Internal structure</button>
                        <button className="button" style={{backgroundColor: geologyButtonState ? props.color : ""}} onClick={handleClickGeology}><span className="button__number">03</span>Surface geology</button>
                    </div>
                </div>
            </section>
            <section className="main__facts">
                <div className="facts__block">
                    <h2 className="facts__title">Rotation Time</h2>
                    <p className="facts__value">{props.rotationTime}</p>
                </div>
                <div className="facts__block">
                    <h2 className="facts__title">Revolution Time</h2>
                    <p className="facts__value">{props.revolutionTime}</p>
                </div>
                <div className="facts__block">
                    <h2 className="facts__title">Radius</h2>
                    <p className="facts__value">{props.radius}</p>
                </div>
                <div className="facts__block">
                    <h2 className="facts__title">Average Temp.</h2>
                    <p className="facts__value">{props.temperature}</p>
                </div>
            </section>
        </div>
    )
}

export default Main;
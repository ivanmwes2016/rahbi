
import React from 'react'

const  MiddleSectionV2 = ({mission, missionInfo})  => {
    return (
        <div className="midde_section">
                <div className="leftV2">{mission}</div>
                <div className="rightV2"><p>{missionInfo}</p></div>
            </div>
    )
}

export default MiddleSectionV2


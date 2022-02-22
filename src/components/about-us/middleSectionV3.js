import React from 'react'

const MiddleSectionV3 = ({accredTitle, accredData}) => {
    return (
        <div className="AccredHolder">
            <p className="AccredTitle">{accredTitle}</p>
            <p>{accredData}</p>
        </div>
    )
}

export default MiddleSectionV3
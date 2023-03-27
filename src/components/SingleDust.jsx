import React from 'react'
import DustCard from './DustCard'
import LocationSelect from './LocationSelect'

function SingleDust({ sido, dust, setSido, station, setStation, pmData, setPmData }) {
    return (
        <div>
            <LocationSelect sido={sido} dust={dust} setSido={setSido} station={station} setStation={setStation} pmData={pmData} setPmData={setPmData} />
            <DustCard sido={sido} station={station} pmData={pmData} />
        </div>
    )
}

export default SingleDust

import React, { useEffect } from 'react'
import DustCard from '../components/DustCard'
import DustCards from '../components/DustCards'
import LocationSelect from '../components/LocationSelect'

function MultiDust({ dustList }) {
    // api 데이터 결과값

    const dusts = dustList?.response.body.items

    let locationList = localStorage.getItem('location') ? localStorage.getItem('location').split(',') : []
    useEffect(() => {
        console.log(locationList)
    }, [locationList])
    return (
        <div>
            <LocationSelect dustList={dustList} />
            {dusts?.map((dust) => {
                return (
                    <DustCards
                        key={dust.stationName}
                        sidoName={dust.sidoName}
                        stationName={dust.stationName}
                        pm10Grade={dust.pm10Grade}
                        pm10Value={dust.pm10Value}
                        dataTime={dust.dataTime}
                        locationList={locationList}
                    />
                )
            })}
        </div>
    )
}

export default MultiDust

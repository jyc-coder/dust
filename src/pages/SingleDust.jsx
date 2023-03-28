import React, { useEffect } from 'react'
import { useGetDustQuery } from '../apis/axios'
import DustCard from '../components/DustCard'
import LocationSelect from '../components/LocationSelect'
import { useDust } from '../store/slices/dust'

function SingleDust({ dustList }) {
    return (
        <div>
            <LocationSelect dustList={dustList} />
            <DustCard dustList={dustList} />
        </div>
    )
}

export default SingleDust

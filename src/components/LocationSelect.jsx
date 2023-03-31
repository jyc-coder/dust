import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { setAllLocation, setMyLocation } from '../store/slices/locationSlice'
import { useCallback } from 'react'

function LocationSelect({ location, dispatch, single, stationList }) {
    const [currentLocation, setCurrentLocation] = useState(location)

    /** sido 를 선택했을때 sido의 값을 변경하는 */
    const handleSido = (event) => {}

    /** 선택된 stationName을 바탕으로 pmData를 변경하는 메소드 */
    const handleStation = (event) => {}

    const onLocationChange = (e) => {
        const { name, value } = e.target

        setCurrentLocation((prevState) => ({ ...prevState, [name]: value }))
        if (!single) dispatch(setAllLocation({ ...currentLocation, [name]: value }))
        if (single) dispatch(setMyLocation({ ...currentLocation, [name]: value }))
    }

    return (
        <Box sx={{ minWidth: 300, marginBottom: '10px' }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">시/도</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={currentLocation.sidoName} name="sidoName" onChange={onLocationChange}>
                    <MenuItem value={'경북'}>경북</MenuItem>
                    <MenuItem value={'대전'}>대전</MenuItem>
                    <MenuItem value={'충북'}>충북</MenuItem>
                    <MenuItem value={'충남'}>충남</MenuItem>
                    <MenuItem value={'경남'}>경남</MenuItem>
                    <MenuItem value={'울산'}>울산</MenuItem>
                    <MenuItem value={'광주'}>광주</MenuItem>
                    <MenuItem value={'전북'}>전북</MenuItem>
                    <MenuItem value={'전남'}>전남</MenuItem>
                    <MenuItem value={'제주'}>제주</MenuItem>
                    <MenuItem value={'대구'}>대구</MenuItem>
                    <MenuItem value={'서울'}>서울</MenuItem>
                    <MenuItem value={'경기'}>경기</MenuItem>
                    <MenuItem value={'강원'}>강원</MenuItem>
                    <MenuItem value={'부산'}>부산</MenuItem>
                    <MenuItem value={'세종'}>세종</MenuItem>
                    <MenuItem value={'인천'}>인천</MenuItem>
                </Select>
            </FormControl>
            {single ? (
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">지역 선택</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={currentLocation.stationName} name="stationName" onChange={onLocationChange}>
                        {stationList?.map((item) => {
                            return (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            ) : null}
        </Box>
    )
}

export default LocationSelect

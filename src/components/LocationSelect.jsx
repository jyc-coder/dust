import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

function LocationSelect({ sido, setSido, station, setStation }) {
    const handleSido = (event) => {
        setSido(event.target.value)
        console.log(event.target.value)
    }

    const handleStation = (event) => {
        setStation(event.target.value)
        console.log(event.target.value)
    }

    return (
        <Box sx={{ minWidth: 300, marginBottom: '10px' }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">시/도 선택</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sido} label="sido" onChange={(e) => handleSido(e)}>
                    <MenuItem value={'서울'}>서울</MenuItem>
                    <MenuItem value={'부산'}>부산</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">지역 선택</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={station} label="station" onChange={(e) => handleStation(e)}>
                    <MenuItem value={'한강대로'}>한강대로</MenuItem>
                    <MenuItem value={'갈매기'}>갈매기</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default LocationSelect

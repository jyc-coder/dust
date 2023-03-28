import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import StarRateIcon from '@mui/icons-material/StarRate'
import { Container, IconButton, ToggleButton } from '@mui/material'
import { GRADE } from './../constants/pmgrade'
import { useState } from 'react'

function DustCards({ sidoName, stationName, pm10Grade, pm10Value, dataTime, locationList }) {
    const [selected, setSelected] = useState(false)

    const toggleData = () => {
        if (selected) {
            locationList.splice(locationList.indexOf(stationName), 1)
            localStorage.setItem('location', locationList)
            setSelected(false)
            console.log(locationList)
        } else {
            locationList.push(stationName)
            localStorage.setItem('location', locationList)
            setSelected(true)
            console.log(locationList)
        }
    }
    useEffect(() => {
        if (locationList.includes(stationName)) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [])

    return (
        // 카드 컴포넌트
        <Card sx={{ minWidth: 275, marginBottom: '20px', background: '#6c770b' }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                        {sidoName}
                    </Typography>
                    <Typography sx={{ fontSize: 15, paddingTop: '5px' }} color="white" gutterBottom>
                        {stationName}
                    </Typography>
                </Box>
                <Container maxWidth="sm" sx={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 150,
                            height: 100,
                            borderRadius: 5,
                            backgroundColor: 'primary.dark',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5" component="div" color="white" fontWeight="700">
                            {pm10Grade === null ? '측정불가' : GRADE[pm10Grade]}
                        </Typography>
                    </Box>
                </Container>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    미세먼지 수치 : {pm10Value}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    ({dataTime})
                </Typography>
            </CardContent>
            <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                    toggleData()
                }}
            >
                <StarRateIcon />
            </ToggleButton>
        </Card>
    )
}

export default DustCards

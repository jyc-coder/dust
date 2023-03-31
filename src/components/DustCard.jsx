import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

import { Container } from '@mui/material'
import { GRADE } from './../constants/pmgrade'

function DustCard({ dust }) {
    const { sidoName, stationName, pm10Grade, pm10Value, dataTime } = dust

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
        </Card>
    )
}

export default DustCard

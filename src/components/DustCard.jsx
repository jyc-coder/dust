import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

import { Container } from '@mui/material'
import { GRADE } from './../constants/pmgrade'
import { useGetDustQuery } from '../apis/axios'
import { changePmData, useDust } from '../store/slices/dust'

function DustCard({ dustList }) {
    const { dust, dispatch } = useDust()
    const { pmData, station } = dust
    useEffect(() => {
        // 맨 처음에 로드될때는 서울 한강대로의 데이터를 가져온다
        dispatch(changePmData(dustList?.response.body.items.find((dust) => dust.stationName === station)))
    }, [])
    return (
        // 카드 컴포넌트
        <Card sx={{ minWidth: 275, marginBottom: '20px', background: '#6c770b' }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                        {pmData.sidoName}
                    </Typography>
                    <Typography sx={{ fontSize: 15, paddingTop: '5px' }} color="white" gutterBottom>
                        {pmData.stationName}
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
                            {GRADE[pmData.pm10Grade]}
                        </Typography>
                    </Box>
                </Container>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    미세먼지 수치 : {pmData.pm10Value}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    ({pmData.dataTime})
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DustCard

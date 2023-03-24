import React from 'react'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { justifyContent, maxWidth } from 'styled-system'
import { Container } from '@mui/material'

function DustCard() {
    return (
        // 카드 컴포넌트
        <Card sx={{ minWidth: 275, marginBottom: '20px', background: '#6c770b' }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                        도산대로
                    </Typography>
                    <Typography sx={{ fontSize: 15, paddingTop: '5px' }} color="white" gutterBottom>
                        서울
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
                            그냥 그럼
                        </Typography>
                    </Box>
                </Container>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    미세먼지 수치 : 47
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="white" marginTop="10px">
                    (2202-08-12 17:00 기준)
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DustCard

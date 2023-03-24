const getParameters = {
    serviceKey: '아까 위에서 일반 인증키 (Decoding) 이라고 되어있던 부분을 여기 입력해주세요.',
    returnType: 'json',
    numOfRows: '100',
    pageNo: '1',
    sidoName: '시/도이름',
    ver: '1.0',
}

const fetchData = async () => {
    const response = await axios.get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', { params: getParameters })
    //여기서 set 해주면 좋겠죠?
}

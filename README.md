# 미세먼지 API를 이용하여 구현한 미세먼지 서비스



## 소개 
미세먼지 API를 사용해서 미세먼지 정보를 보여주는 서비스를 구현했습니다. 

##  배포 링크 : https://main--singular-biscuit-ed42ca.netlify.app


<div align="center">
<table>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/56331400/228398306-0ed0bf49-3afc-4de7-80b2-613f1dc8b8a7.png" />
      </div>
      <div align="center">
        단일 지역
      </div>
    </th>
  </tr>
  <tr>
 <th>
      <div>
        <img src="https://user-images.githubusercontent.com/56331400/228400652-ffdabd97-db82-4704-be10-e89b87806df2.gif"/>
      </div>
   <div align="center">
       복수 지역
      </div>
    </th>
  </tr>
  <tr>
     <th>
      <div>
        <img src="https://user-images.githubusercontent.com/56331400/228401268-6b1bd773-ce7b-49fc-96c6-8fde04050cd0.gif" />
      </div>
   <div align="center">
       즐겨 찾기
      </div>
    </th>
  </tr>
</table>
</div>


## 기술 스택 
- react
- react-redux
- @reduxjs/toolkit
- react-router
- mui-material
- @emotion/react
- @emotion/styled
- @emotion/icons-material
- prettier
- eslint

<details>
  <summary>☁️ 구현 기능 목록 </summary>
  <br>
  
  **단일 지역**
  - 로드 후, 서울 내부 지역의 첫번째 지역의 미세먼지 정보를 보여줌
  - 상단의 select 컴포넌트를 사용하여 원하는 시/도 를 선택하면, 하위 모든 지역이 지역 option에 디스플레이됨
  - 원하는 지역을 선택하면 미세먼지 정보를 보여줌
  - 데이터 중에서 pm10Grade 에 따라 가운데에 미세먼지 상태에 대한 간략한 키워드가 표시됨
  
  **복수 지역**
  - 원하는 시/도 를 선택하면 하위 지역에 대한 미세먼지 정보를 보여줌
  - 상태 관리를 통해서 단일지역에 선택한 시/도를 그대로 유지한 채로 검색이 가능함
  - 즐겨찾기 하고 싶은 지역이 있다면 카드 컴포넌트 하단에 있는 별모양 버튼을 클릭하면 즐겨찾기가 로컬스토리지에 추가됨
  
  
  **즐겨찾기**
  - 사용자가 복수지역에서 선택한 즐겨찾기 목록들을 열람할수 있음
  - 전국의 데이터를 가져와서 로컬스토리지와 일치한 지역에 대해서만 카드 컴포넌트가 렌더링 되는 방식으로 구현
  
  
  
  


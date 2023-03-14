# TeamProject_FrontEnd  

## Description  
1) 학원에서 진행 중인 팀 프로젝트(23.02.10 ~ 23.03.20)에서    
제가 작업한 내용들에 대해 올려 놓은 공간입니다. (팀 작업물 : https://github.com/DaEunPark/Greener)  
2) 이 Repo에서는 Vue.js를 활용한 프론트엔드 작업물들을 볼 수 있습니다.  

## Environment & Tech Stack
1) Environment  
Visual Studio Code  
node.js : 18.14.0  
npm : 9.3.1  
2) Tech Stack  
HTML5, CSS3, JavaScript(ES6)  
Vue.js(Vue3 - Vue CLI v5.0.8)  
Bootstrap : 5.3.0  

## Works - Functions   
1) 실시간 검색어 순위 보이기(자동)   
2) 로그인  
3) 로그인 상태 유지  
4) 로그아웃  
5) 로그인 상태에 따른 버튼 경로 변경(마이 페이지, 로그인 페이지)  
6) 회원가입 페이지로 이동  
7) 광고 배너 캐러셀(자동, Bootstrap)  
8) 카테고리(세로형 네비게이션바)  
9) 인기 상품 전시 캐러셀(자동, JS & CSS)  
10) 9)에서 보여지는 상품 클릭시, 해당 상품의 상세정보 페이지로 이동  

## Works - Files  
1) index.html - 웹사이트 주소 접속 시 처음으로 실행되는 페이지  
2) CategoryBanner.vue - 카테고리(수직, 수평), 광고 배너(자동 회전)  
3) FooterComp.vue - 푸터  
4) HeaderComp.vue - 헤더  
5) MostViewProduct.vue - 누적 판매량 기준 상위 10개 상품 전시(자동 회전)  
6) index.js(router) - 경로 설정  
7) index.js(store) - Vuex 라이브러리 사용을 위해 작성한 페이지  
8) HomepageComp.vue - 카테고리, 광고, 상품들의 내용으로 구성되는 페이지  
9) LoginPage.vue - 로그인 화면  
10) MyPage.vue - 마이페이지 화면(로그인 후 접속 가능)  
11) ProductInfo.vue - 상품 상세정보 화면(장바구니, 바로구매 버튼 포함)  
12) main.js - 라이브러리, 전역 변수, 시작 페이지 등을 정의함  
13) MainPage.vue - index.html 실행 시 랜더링 되는 페이지  
14) mitt.js - mitt 라이브러리 사용을 위해 작성한 페이지  

## etc.  
1) MyPage.vue의 경우, 페이지 파일 작성은 팀원 이정하님이 해주셨습니다.  
해당 파일에서 변수 입력/설정 등의 작업은 제가 했습니다.    

# Writing Timer

글쓰기 집중을 위한 타이머 웹앱입니다.  
랜덤 주제와 다양한 배경 이미지를 제공하며, 타이머가 종료되면 화면에 blur 효과가 적용됩니다.

## 주요 기능

- 랜덤 글쓰기 주제 제공
- 다양한 분위기의 배경 이미지
- 타이머 설정 및 시작/초기화
- 타이머 종료 시 blur 효과
- 반응형 UI 및 부드러운 트랜지션

## 설치 및 실행

1. 저장소 클론
```shell
git clone https://github.com/your-username/writing-timer.git cd writing-timer
```

2. 의존성 설치
```shell
npm install
```

3. 개발 서버 실행
```shell
npm run dev
```

## 폴더 구조

- `src/` : 주요 소스 코드
    - `App.jsx` : 메인 컴포넌트
    - `components/Timer.jsx` : 타이머 UI
    - `components/TopicBox.jsx` : 주제 박스 UI
    - `App.css` : 전체 스타일
- `public/assets/backgrounds/` : 배경 이미지
- `public/topics.json` : 주제 데이터

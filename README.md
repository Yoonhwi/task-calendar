# React + Ant-Design Calendar

Ant Design에서 제공해주는 Calendar를 이용해 여러 가지 기능을 추가했습니다.

셀별로 해당 날짜의 tasks를 todo와 done 두 종류로 Badge를 이용해 간단하게 보여줍니다.

마우스 이동에 따라 왼쪽 하단 Preview에서 해당 날짜의 tasks를 보여줍니다.

원하는 날짜의 셀을 클릭하면 모달을 통해 task 추가/제거와, status를 변경할 수 있습니다.

DB는 localStorage로 사용했으며, MSW를 이용한 API mocking을 통해 실제 서버와의 네트워크 통신을 시뮬레이션했습니다.

## Getting Started

```
yarn 또는 npm install  의존성 패키지 설치 후,
```

```
yarn dev 또는 npm run dev 실행합니다.
```

## Component Describe

```
CalendarContextProvider
React의 Context API를 사용하여 구현된 이 컴포넌트는 Calendar 관련 상태와 함수들을 관리합니다.
주요 기능으로는 선택된 날짜, 태스트 목록 등을 포함하며,
여러 데이터와 관련 함수들을 하위 컴포넌트들에게 제공합니다.

사용이유는,
캘린더와 관련된 모든 상태를 한 곳에서 관리함으로써 데이터의 일관성을 유지합니다.
Context를 사용함으로써 여러 단계의 컴포넌트를 거치지않고 필요한 곳에서 직접 데이터에 접근함으로써,
가독성과 유지보수에 용이합니다.
```

```
mocks 폴더
이 폴더는 MSW를 이용한 API mocking 구현을 위한 파일들을 포함합니다.
apis.ts파일 에서 fetch를 사용해 요청을 보내는 구조는 실제 API호출과 동일합니다.
handlers.ts에서 MSW를 이용해 API요청을 가로채고 모의 응답을 생성합니다.
이를 통해 프론트엔드가 백엔드와 상호작용하는 것처럼 보이게 합니다.

백엔드를 사용 불가능한 상황에서도 프론트엔드 개발을 진행할 수 있습니다.
실제 API와 유사한 인터페이스를 가지고 있어, 백엔드와 통합이 수월해집니다.
```

```
task 폴더
이 폴더는 캘린더에서 날짜를 클릭할 때 표시되는 모달창에서 필요한 모든 기능과 컴포넌트들을 포함합니다.
task 폴더에는 다양한 파일이 존재하지만, 주요 기능은 TaskList 컴포넌트에서 통합되어 사용됩니다.
TaskList는 선택된 날짜에 대한 모든 Tasks를 표시합니다.
또한, task 추가/제거 및 status 변경과 같은 작업 관련 API요청을 처리합니다.

선택된 날짜의 tasks를 효과적으로 보여주고 task 추가/제거 및 status변경을 제공합니다.
```

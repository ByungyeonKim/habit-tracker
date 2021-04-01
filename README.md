# 습관 만들기 😤

![habit-tracker](https://user-images.githubusercontent.com/66554164/113257439-95117180-9305-11eb-9af8-6d6863d96ea0.gif)

### Technologies used 🛠

<p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>
 </p>

### So what I've learned is...🏃🏻‍♂️

1. JSX 왜 써?
   - JavaScript와 UI 개발(HTML)을 한 곳(컴포넌트)에서 프로그래밍 할 수 있다.
   - HTML과 비슷한 문법, 협업에 용이
   - 컴포넌트별로 분류하여 유지보수가 쉬움
2. State

   - **컴포넌트 안**에서 정의한 state 오브젝트(데이터를 관리하는 저장소라고 생각한다)
   - state는 **얕은 비교**를 한다.
     - 최상위 오브젝트의 참조값이 변하지 않으면 render 함수를 호출하지 않는다.
     - setState 함수를 이용해서 새로운 상태의 오브젝트(업데이트 하고자 하는 상태 데이터)를 인자로 전달해 주어야 한다.
   - setState 함수는 **비동기 API**이다.
   - state 안의 데이터를 직접 수정하지 마!
     - setState 함수는 비동기 API이기 때문에 직접 state를 여러번 수정하는 경우 이전 데이터의 업데이트가 덮어 씌워질 수가 있고 예상치 못한 버그🪲가 생길 수 있다.(사실 이건 어떤 경우에 버그가 생기는지, 경험이 부족한 것인지 아직 이해를 잘하지 못했다.)
   - setState 함수는 두 가지 방법이 있다.
     1. setState(newState) - 새로운 state 오브젝트를 인자로 바로 받는 함수
     2. setState(prevState => { return newState; }) - 이전 state를 받아서 그걸로 계산해서 새로운 state를 리턴하는 함수를 인자로 받는 함수

3. Props
   - **컴포넌트 밖**에서 주어지는 데이터
   - 컴포넌트의 재사용을 높여준다.
   - 상황에 따라 일관된 데이터를 보여주기 위해 ex) 프로필 이미지를 props로 받아와서 전반적인 페이지에 걸쳐 사용할 수 있다.
4. list에선 고유한 아이디(key🔑)를 사용해!
   - 리액트에서 리스트를 사용할 땐 고유한 아이디가 있어야한다.
   - 리스트가 추가 되거나 삭제될 때, 이 아이디를 통해 비교를 해서 불필요한 렌더링을 줄일 수 있기때문
   - 배열에서 key를 인덱스로 사용해선 안된다!
     - 배열의 순서가 바뀌게 되면 인덱스도 바뀌게 되어 동일한 오브젝트인 경우에도 key가 바뀔 수 있기 때문
   - 이러한 key를 만들어주는 라이브러리(uuid 등)가 있지만 Date.now() 메소드(밀리초까지 반환)를 사용.
   ```jsx
   handleAdd = (name) => {
     const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
     this.setState({ habits });
   };
   ```
5. PureComponent..?
   - PureComponent는 **얕은 비교**를 한다.
     - 라이프 싸이클 메소드 중 하나인 shouldComponentUpdate()가 기본 수행되며 이 메소드는 최상위 오브젝트의 참조값이 변하지 않으면 render 함수를 호출하지 않는다.
     - 일반 Component는 setState 함수가 호출되면 무조건 render 함수를 호출한다.
     - PureComponent를 사용함으로써 불필요한 렌더링이 되는 것을 줄일 수 있다.
6. 리액트 컴포넌트
   - 웹 앱, 웹 페이지에서 독립적이고 재사용이 가능한 단위(박스 단위)로 나누어진 블럭.
     - 최대한 작은 단위로 만들어서 재사용이 가능하고 독립적인 컴포넌트로 만들면 좋다!(유지보수가 쉽다)
   - **클래스형, 함수형** 두 가지로 나뉜다.
     - Class Component
       1. React.Component 클래스를 상속
       2. 데이터는 this.state에서 관리
       3. render() 함수에 HTML과 비슷한 JSX 문법을 이용해서 UI 표기
       - 클래스 특성상 클래스의 인스턴스(실제 메모리에 저장된 값)가 생성이 되면 메소드(함수)가 아무리 많이 호출이 되어도 직접 수정하지 않는한 멤버 변수는 한 번 만들어지면 그 값이 **유지**가 된다.
       - 따라서 render 함수가 아무리 많이 호출이 되어도 this.state의 데이터는 변하지 않기 때문에 데이터를 일정하게 관리할 수 있다.
     - Function Component
       - props만 받아서 보여주는 페이지나 state, props 둘 다 없는 정적인 페이지를 보여줄 때 간단하게 만들 수 있다.
       - React.memo를 통해 PureComponent처럼 렌더링 최적화를 할 수 있다.
       - 클래스와는 반대로 함수의 특성상, 함수를 호출할 때마다 함수의 코드 블럭이 다시 실행이 되고, 그 안에 선언한 모든 지역변수들은 함수의 실행 컨텍스 안에서 재정의, 값이 재할당 되어진다.
       - 따라서 컴포넌트 안에서 state를 가질 수 없다!
     - 하지만 React Hooks가 있는걸?
       - 비교적 최근에 추가된 기능(16.8v)으로 class component처럼 state와 라이프 싸이클 메소드를 사용할 수 있다! 👏 [link to Hooks!](https://reactjs.org/docs/hooks-state.html)
       - function component는 `this.`를 사용하지 않아도 되고 중복되는 코드를 줄일 수 있다는 것에 장점이 있다!

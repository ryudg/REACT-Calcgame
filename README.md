# REACT-calcgame
 React를 이용해 더하기 게임 만들기


![화면 캡처 2023-01-27 153019](https://user-images.githubusercontent.com/103430498/215023543-d898d8fd-5f7b-469f-96e4-a876685afa0d.png)


## 기능
- `useRef` input focus하기
```javascript
import {useRef} from "react";

...

const input useRef();

...

const onClick = () => {

input.current.focus();

}

...

<input ref={input}>
```

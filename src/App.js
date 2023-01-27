import React, { useState, useEffect, useRef } from "react";
import "./css/style.css";

function App() {
  // 게임 정보
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [val, setVal] = useState("");
  const [ok, setOk] = useState(0);
  const [ng, setNg] = useState(0);

  // random num
  const getNum = () => {
    let n1 = Math.floor(Math.random() * 9);
    let n2 = Math.floor(Math.random() * 9);
    setNum1(n1);
    setNum2(n2);
  };
  const getNum2 = () => {
    let n1 = Math.floor(Math.random() * 99);
    let n2 = Math.floor(Math.random() * 99);
    setNum1(n1);
    setNum2(n2);
  };
  const getNum3 = () => {
    let n1 = Math.floor(Math.random() * 999);
    let n2 = Math.floor(Math.random() * 999);
    setNum1(n1);
    setNum2(n2);
  };

  // 앱이 실행되면 문제 출제
  useEffect(() => {
    // 문제 단계
    if (ok >= 20) {
      getNum3();
    } else if (ok >= 10) {
      getNum2();
    } else {
      getNum();
    }
  }, [ok, ng]);

  // input DOM
  const input = useRef();
  // input F
  const onInput = (e) => {
    setVal(e.target.value);
  };
  // input Enter
  const enterInput = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  // click F
  const onClick = () => {
    // 정답 오답
    if (num1 + num2 === parseInt(val)) {
      setOk(ok + 1);
    } else {
      setNg(ng + 1);
    }
    // input 값 초기화
    setVal("");
    // input 포커스
    input.current.focus();
  };

  return (
    <>
      <div className="container p-3 text-center">
        <h1>더하기 게임</h1>
        <div className="numBox d-flex bg-light p-3 fs-1 justify-content-center">
          <div className="num border">{num1}</div>
          <span className="calcText">+</span>
          <div className="num border">{num2}</div>
          <span className="calcText">=</span>
          <input
            className="result"
            type="text"
            placeholder="입력"
            autoComplete="off"
            autoFocus
            size="3"
            required
            maxLength="3"
            onInput={onInput}
            onKeyDown={enterInput}
            value={val}
            ref={input}
          />
        </div>
        <p>
          정답 : {ok}, 오답 : {ng}
        </p>
        <p>정답률 : {ok + ng === 0 ? 0 : (ok / (ok + ng)) * 100}%</p>
        <button className="btn btn-primary" onClick={onClick}>
          확인
        </button>
      </div>
    </>
  );
}

export default App;

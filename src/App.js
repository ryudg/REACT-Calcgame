import React, { useState, useEffect } from "react";
function App() {
  const onInput = () => {
    console.log("입력");
  };

  return (
    <>
      <div className="container p-3 text-center">
        <h1>더하기 게임</h1>
        <div className="numBox d-flex">
          <div className="num border">0</div>
          <span className="calcText">+</span>
          <div className="num border">0</div>
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
          />
        </div>
      </div>
    </>
  );
}

export default App;

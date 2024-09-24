import { useState } from "react";

export function AppCounter(props) {
  // состояние

  function increase() {
    props.plus();
  }

  function decrease() {
    props.minus();
  }

  return (
    <div>
      <h1> {props.counter} </h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

import { useState } from "react";

export function AppTest(props) {
  //   let someText = "hello world and word";
  const [isShow, setShow] = useState(true);

  function trigger() {
    setShow(!isShow); // если тру то не тру - если фолс то не фолс
  }

  return (
    <div>
      {isShow ? props.text : null}
      <button onClick={trigger}>Кнопка</button>
    </div>
  );
}

// export function AppTest() {
//   let initialValue = ["dima", "dima2"];
//   const [arrayStrings, setArrayStrings] = useState(initialValue);

//   function add() {
//     const newValue = arrayStrings.concat(["dima3"]);
//     setArrayStrings(newValue);
//   }

//   return (
//     <div>
//       <button onClick={add}>Добавить</button>
//       <ul>
//         {arrayStrings.map((element) => {
//           return <li> {element} </li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// rest и spread операторы
// rest - остаточные параметры
// spread - оператор расщирения
function myFun1(a, b) {
  console.log(a, b);
  console.log(Array.from(arguments)); // массив из псевдомассива - старый синтаксис
}
myFun1(5, 3, 2);

const myArr1 = [1, 2];
const myArr2 = [3, 4];

console.log(myArr1.concat(myArr2)); //  тоже старый синтаксис
const myArr3 = [0, ...myArr1, 7, ...myArr2, 20];
console.log(myArr3); // хороший синтаксис!

// распростарняются и на объекты и на массивы
// rest
function myFun2(a, b, ...args) {
  console.log(a, b, args);
}
myFun2(1, 2, 3, 4);

function myFun3(...args) {
  let result = 0;
  for (let element of args) {
    result += element;
  }
  console.log(result);
}

myFun3(1, 5, 3, 7, 8);

//spread
myFun3(...[1, 2, 3]); // раскрытие массива или объекта

const myArr4 = [1, 2, 3, ...myArr3];
const myObj1 = {
  name: "Dima",
  age: 21,
  city: "Ulsk",
};

const { name, ...otherProps } = myObj1;
console.log(otherProps);

const [a, ...otherNums] = myArr4;
console.log(otherNums);

const myObj2 = {
  ...myObj1, // использование клонирования
};
console.log(myObj2);

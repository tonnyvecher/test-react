import { useEffect, useState } from "react";
// import { AppInputText } from "../components/AppInputText";
// import { MainPage } from "./MainPage";
// import "./TestPage.css";

export function TestPage() {
  const [myArr, setMyArr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getData2() {
    try {
      setIsLoading(true);
      const response = await fetch(
        // "https://jsonplaceholder.typicode.com/todos/1"
        "https://jsonplaceholder.typicode.com/photos"
      );
      const responseData = await response.json();
      setMyArr(responseData);
    } catch {
      console.log("Ошибка!");
    } finally {
      setIsLoading(false);
    }
  }
  // вызывается после монитрования компонента и не вызывается после обновления состояния
  useEffect(() => {
    getData2();
  }, []);

  return (
    <section className="section">
      <div>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        {/* <button onClick={getData2}>Получить данные!</button> */}
        {isLoading ? <p>Идет загрузка...</p> : null}
        {myArr ? (
          <ul>
            {myArr.map((item) => (
              <li>
                {item.title} <img src={item.url} alt="" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
  // return <MainPage />;
}

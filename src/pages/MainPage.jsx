import { AppButton } from "../components/AppButton";
// import { AppInputText } from "../components/AppInputText";
import { AppCheckBox } from "../components/AppCheckBox";
import { AppH1 } from "../components/AppH1";
import { AppList } from "../components/AppList";
import { AppListItem } from "../components/AppListItem";
import { AppText } from "../components/AppText";
import { useState } from "react";

export function MainPage() {
  const [list, setList] = useState([
    { text: "Покормить кошку", isComplete: false, id: Math.random() },
  ]);
  const [inputValue, setInputValue] = useState("");

  function addToList(event) {
    if (event.key === "Enter") {
      if (inputValue.trim() === "") return;
      setList([
        ...list,
        { text: inputValue, isComplete: false, id: Math.random() },
      ]);
      setInputValue("");
    }
  }

  function daiDenegHandler(event, value) {
    setInputValue(event.target.value);

    // setInputValue(value);
  }

  function deleteListItem(param) {
    const newList = list.filter((item) => item.id !== param);
    setList(newList);
  }

  function triggerCompleteListItem(id) {
    const newList = list.map((item) => {
      return item.id === id ? { ...item, isComplete: !item.isComplete } : item;
    });
    setList(newList);
  }

  return (
    <div>
      <section className="todo-app">
        <header className="header" data-testid="header">
          <AppH1>TODO LIST</AppH1>
          <div className="input-container">
            {/* <AppInputText
            value={inputValue}
            daiDeneg={daiDenegHandler}
            upEnter={addToList}
          /> */}
            {/* <AppButton text="Добавить" onClick={addToList} /> */}
            <input
              className="input"
              type="text"
              value={inputValue}
              onChange={daiDenegHandler}
              onKeyUp={addToList}
            />
          </div>
        </header>
        <main className="main" data-testid="main">
          <AppList>
            {list.map((element) => {
              return (
                <AppListItem>
                  <div>
                    <AppCheckBox
                      value={element.isComplete}
                      daiDeneg={() => triggerCompleteListItem(element.id)}
                    />
                    <AppText>
                      {element.isComplete ? "Выполнено " : null}
                      {element.text}
                    </AppText>
                    <AppButton
                      text="✘"
                      onClick={() => deleteListItem(element.id)}
                    />
                  </div>
                </AppListItem>
              );
            })}
          </AppList>
        </main>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by TodoSidorov</p>
      </footer>
    </div>
  );
}

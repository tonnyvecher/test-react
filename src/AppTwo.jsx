import { useEffect, useState } from "react";
import { Gallery } from "./Gallery";
import { Pagination } from "./Pagination";
import "./AppTwo.css";
import { Skeleton } from "./Skeleton";
import { AppInputText } from "./components/AppInputText";
import { AppButton } from "./components/AppButton";
import { AppLink } from "./components/AppLink";
import { AppSelect } from "./components/AppSelect";
import { AppAccardeon } from "./components/AppAccardeon";
import { AppCheckBox } from "./components/AppCheckBox";
import { AppDropdown } from "./components/AppDropdown";
import { AppTab } from "./components/AppTab";
import { AppTabContent } from "./components/AppTabContent";
import { AppTabButton } from "./components/AppTabButton";
import { SimpleDropdown } from "./components/SimpleDropdown";

const TOTAL = 5000;
const LIMIT = 12;
const ARRAY_PAGE = Array.from({ length: 10 }, (_, i) => i + 1);

export function AppTwo() {
  const [pictures, setPictures] = useState([]);
  const [filteredPictures, setFilteredPictures] = useState([]);
  // фильтр для поиска по названию name
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  const [selectedOption, setSelectedOption] = useState("");

  const [columns, setColumns] = useState(3); // количество столбцов
  //   const [page, setPage] = useState(1);
  const options = [
    { value: 3, label: "3 columns" },
    { value: 6, label: "6 columns" },
  ];

  // массив для tab для примера
  const petData = [
    {
      animal: "Cheetah",
      fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
      image: "../src/assets/6.svg",
    },
    {
      animal: "Koala",
      fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
      image: "../src/assets/3.svg",
    },
    {
      animal: "Elephant",
      fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
      image: "../src/assets/1.svg",
    },
  ];

  const dropdownOptions = [
    // { label: "Option 1", value: "option1" },
    // { label: "Option 2", value: "option2" },
    // { label: "Option 3", value: "option3" },
    { label: "Starts with A", value: "A" },
    { label: "Starts with B", value: "B" },
    { label: "Starts with C", value: "C" },
  ];

  // Debounce логика для задержки отправки запроса на фильтрацию
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // Задержка 500ms перед отправкой запроса

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${LIMIT}&title_like=${debouncedSearchQuery}`
        );

        const responseData = await response.json();
        const totalItems = response.headers.get("x-total-count"); // Получаем общее количество элементов
        setTotalPages(Math.ceil(totalItems / LIMIT));
        setPictures(responseData); // Сохраняем все данные
        setFilteredPictures(responseData); // Изначально показываем все данные
        setIsLoading(false); // Выключаем индикатор загрузки
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Выключаем индикатор загрузки при ошибке
      }
    };

    fetchPictures();
  }, [currentPage, debouncedSearchQuery]);

  // Логика для пагинации
  //   const indexOfLastPicture = currentPage * picturesPerPage;
  //   const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
  //   const currentPictures = filteredPictures.slice(
  //     indexOfFirstPicture,
  //     indexOfLastPicture
  //   );
  //----------------------------------------------------------
  // фильтрация картинок в зависимости от выбранного таба
  // useEffect(() => {
  //   if (activeTab === "favorites") {
  //     setFilteredPictures(favorites);
  //   } else if (activeTab === "all") {
  //     setFilteredPictures(pictures);
  //   }
  // }, [activeTab, pictures, favorites]);

  // const handleAddToFavorites = (picture) => {
  //   if (!favorites.some((fav) => fav.id === picture.id)) {
  //     setFavorites([...favorites, picture]);
  //   }
  // };
  // ------------------------------------------------------

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }
  function handleColumnChange(event) {
    setColumns(parseInt(event.target.value));
  }

  const handleDropdownSelect = (option) => {
    console.log("Выбранная опция:", option);
    setSelectedOption(option);
    if (option) {
      const filtered = pictures.filter((picture) =>
        picture.title.startsWith(option.toLowerCase())
      );
      setFilteredPictures(filtered);
    } else {
      setFilteredPictures(pictures);
    }
  };

  // переход на выбранную страницу
  function paginate(pageNumber) {
    // Проверяем, существует ли такая страница, чтобы избежать ошибки

    setCurrentPage(pageNumber);
  }

  return (
    <div className="container">
      <div className="container__filters">
        {/* <AppCheckBox /> */}

        <AppInputText
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="-- Name --"
        />

        {/* <AppDropdown
          label="Filter by first letter: "
          options={["A", "B", "C", "D"]}
          onChange={handleLetterChange}
        /> */}

        {/* <AppDropdown
          options={["Option 1", "Option 2", "Option 3"]}
          onSelect={handleDropdownSelect}
        />
        {selectedOption && <p>Вы выбрали: {selectedOption}</p>} */}

        <AppDropdown
          dropdownOptions={dropdownOptions}
          onSelect={handleDropdownSelect} // работает но не работает - разобраться
        />

        <SimpleDropdown />

        <p>Choose ypur pet</p>
        <AppTab petData={petData} />

        <AppSelect
          value={columns}
          onChange={handleColumnChange}
          options={options}
          label="Columns"
        />

        {isLoading ? (
          <Skeleton type="gallery" />
        ) : (
          <div>
            {filteredPictures.length > 0 ? (
              <div>
                <Gallery pictures={pictures} columns={columns} />
                <Pagination
                  totalPictures={filteredPictures.length}
                  totalPages={totalPages}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            ) : (
              <p>No image found</p>
            )}
          </div>
        )}
      </div>
      <div>
        <AppAccardeon title="А чо?" content={<p>А ничо</p>} />
        <AppAccardeon
          title="Как поменять размерность столбцов?"
          content={
            <p>
              Есть select, который может менять значения на нужные. Найдите на
              сайте
            </p>
          }
        />
      </div>
    </div>
  );

  // return (
  //   <div className="container">
  //     <div className="filters">
  //       <input
  //         type="text"
  //         placeholder="Name"
  //         className="search-input"
  //         name="name"
  //         value={searchQuery}
  //         onChange={handleSearchChange}
  //       />

  //       <input
  //         type="text"
  //         className="disabled-input"
  //         placeholder="Author"
  //         disabled
  //       />
  //       <input
  //         type="text"
  //         className="disabled-input"
  //         placeholder="Location"
  //         disabled
  //       />
  //       <input
  //         type="text"
  //         className="disabled-input"
  //         placeholder="Created"
  //         disabled
  //       />
  //     </div>

  //     {isLoading ? (
  //       // <p>Идёт загрузка...</p>
  //       <Skeleton type="gallery" />
  //     ) : (
  //       <>
  //         {filteredPictures.length > 0 ? (
  //           <>
  //             <Gallery pictures={pictures} />
  //             <Pagination
  //               totalPictures={filteredPictures.length}
  //               totalPages={totalPages}
  //               paginate={paginate}
  //               currentPage={currentPage}
  //             />
  //           </>
  //         ) : (
  //           <p>No image found</p>
  //         )}
  //       </>
  //     )}

  //     {/* <p> Текущая страница: {page}</p>
  //     <button onClick={() => setPage(page + 1)}>+</button>
  //     <button onClick={() => setPage(page - 1)}>-</button>

  //     <div>
  //       {ARRAY_PAGE.map((item) => (
  //         <button onClick={() => setPage(item)}>{item}</button>
  //       ))}
  //     </div> */}
  //   </div>
  // );
}

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tours";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState([]);
  const [isTitleDisplayed, setTitleDisplayed] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [mainTitle, setMainTitle] = useState("Our Tours");

  async function getData() {
    let res = await fetch(url);
    let data = await res.json();
    setData(data);
    setTitleDisplayed(false);
  }

  function deleteBtn(id) {
    setData((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });

    if (data.length === 1) {
      console.log(data);
      setMainTitle("No Tours Left");
      setIsDataEmpty(true);
    }
  }

  useEffect(() => {
    getData();

    return () => {
      getData();
    };
  }, []);

  return (
    <>
      {isDataEmpty ?? <button className="btn">Refresh</button>}
      {isTitleDisplayed ? <Loading /> : <h1 className="title">{mainTitle}</h1>}
      <Tours arrData={data} deleteBtn={deleteBtn} />
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tours";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function deleteBtn(id) {
    setData((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <div className="title">
        <h2>No More Tours</h2>
        <button onClick={() => getData()} className="btn">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <main>
        <Tours arrData={data} deleteBtn={deleteBtn} />
      </main>
    </>
  );
}

export default App;

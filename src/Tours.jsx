import React from "react";
import Tour from "./Tour";

const Tours = ({ arrData, deleteBtn }) => {
  return (
    <section className="title">
      <div>
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {arrData.map((obj) => {
          return <Tour key={obj.id} {...obj} deleteBtn={deleteBtn} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

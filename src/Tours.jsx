import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  return (
    <main>
      <article>
        <section className="single-tour">
          {props.arrData.map((obj) => {
            const { id, name, info, image, price } = obj;
            return (
              <div key={id}>
                <img src={image} alt={name} />
                <div className="">
                  <h4>{name}</h4>
                  <p className="tour-price">{price}</p>
                  <p>{info}</p>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      props.deleteBtn(id);
                    }}
                  >
                    Not Interested
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </article>
    </main>
  );
};

export default Tours;

import React, { useState } from "react";
import FaqCategoryList from "./FaqCategoryList";
import "./FaqCategory.css";

function FaqCategory() {
  const [data, setData] = useState(FaqCategoryList);
  const filterResult = (catItem) => {
    const result = FaqCategoryList.filter((currentData) => {
      return currentData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <main className="faq">
        <div className="inner-box">
          <div id="acco">
            <div id="myBtnContainer">
              <button className="btn" onClick={() => setData(FaqCategoryList)}>
                전체
              </button>
              <button className="btn" onClick={() => filterResult("카테고리1")}>
                카테고리1
              </button>
              <button className="btn" onClick={() => filterResult("카테고리2")}>
                카테고리2
              </button>
              <button className="btn" onClick={() => filterResult("카테고리3")}>
                카테고리3
              </button>
            </div>

            <h3>제목</h3>
            <ul className="container">
              {data.map((values) => {
                const { id,category, question, answer } = values;
                return (
                  <li key={id}>
                    <h4>
                      [{category}]<span className="q">Q.</span> {question}
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </h4>
                    <p className="acco-body">
                      <span className="answer">A.</span> {answer}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default FaqCategory;

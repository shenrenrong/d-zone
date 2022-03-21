import React from "react";
import { useState } from "react";

function FaqAccordian({ id, category, question, answer }) {
    const [toggle,setToggle] = useState(false);
    const toggleSwitch = () => {
        setToggle(!toggle)
    }
    
  return (
    <li key={id} onClick={toggleSwitch}>
      <h4>
        [{category}]<span className="q">Q.</span> {question}
        <i className="fa fa-plus" aria-hidden="true"></i>
      </h4>
      <p className={toggle ? "acco-body" : "acco-body none"}>
        <span className="answer">A.</span> {answer}
      </p>
    </li>
  );
}

export default FaqAccordian;

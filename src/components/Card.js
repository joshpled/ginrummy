import React, { useState } from "react";
import { ReactSVG } from "react-svg";

function Card({ cardId }) {
  const [flipper, setFlipper] = useState(false);
  function turnCard() {
    if (flipper === false) {
      document.getElementsByClassName("flip-card")[0].classList.add("flip-card-flipit");
      document.getElementsByClassName("flip-card-inner")[0].classList.add("flip-card-inner-flipit");
      setFlipper(true);
    } else if (flipper === true) {
      document.getElementsByClassName("flip-card")[0].classList.remove("flip-card-flipit");
      document.getElementsByClassName("flip-card-inner")[0].classList.remove("flip-card-inner-flipit");
      setFlipper(false);
    }
  }
  return (
    <div className="flip-card" onClick={() => turnCard()}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {" "}
          <ReactSVG
            beforeInjection={(svg) => {
              svg.classList.add("card-back");
            }}
            afterInjection={(err, svg) => {
              svg.parentElement.classList.add("card-container");
            }}
            src="BackBlue.svg"
          />
        </div>
        <div className="flip-card-back">
          <ReactSVG
            beforeInjection={(svg) => {
              svg.classList.add("card-front");
              svg.getElementById("fs").setAttribute("xlink:href", `#${cardId}`);
              svg.getElementById("fs").setAttribute("class", "show");

              svg.querySelectorAll("defs")[0].setAttribute("display", "none");
            }}
            afterInjection={(err, svg) => {
              svg.parentElement.classList.add("card-container");
            }}
            src="DeckCards.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

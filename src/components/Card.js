import { ReactSVG } from "react-svg";

function Card() {
  return (
    <div>
      <div className="cards-list">
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("card-style");
            svg.getElementById("fs").setAttribute("xlink:href", "#c9");
            svg.getElementById("fs").setAttribute("class", "show");
            svg.getElementById("cards").setAttribute("class", "hide");
          }}
          src="DeckCards.svg"
        />
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("cardstyle");
            svg.getElementById("fs").setAttribute("xlink:href", "#c9");
            svg.getElementById("fs").setAttribute("class", "show");
            svg.getElementById("cards").setAttribute("class", "hide");
          }}
          src="DeckCards.svg"
        />
      </div>
    </div>
  );
}

export default Card;

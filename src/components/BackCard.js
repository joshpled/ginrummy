import { ReactSVG } from "react-svg";

function BackCard() {
  return (
    <div>
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add("backcard-style");
        }}
        src="BackBlue.svg"
      />
    </div>
  );
}

export default BackCard;
